const path = require("path");
const fse = require("fs-extra");
const mime = require("mime-types");
const { config, logger } = require("@wethegit/sweet-potato-utensils");

const errorTemplate = fse.readFileSync(path.join(__dirname, "error.html"), {
  encoding: "utf-8",
});
const pages = require("../../../lib/pages.js");
const styles = require("../../../lib/styles.js");
const javascripts = require("../../../lib/javascripts.js");

const extMap = {
  ".html": ".pug",
  ".css": ".scss",
  ".js": ".js",
};

/* TODO:
 Implement a caching system or even better, a dependency tree 
 where only the updated files are recompiled
*/

/**
 * plugSocketIO
 * Appends the required socket.io listener so we can refresh the page on updates.
 *
 * @param {string} html - HTML content
 */
function plugSocketIO(html) {
  if (!html) return "";

  return html.replace(
    "</body>",
    `
      <script src="/socket.io/socket.io.js"></script>
      <script>
        const socket = io();
        socket.on('browserReload', function() {
          document.location.reload(true);
        });
      </script>
      </body>
    `
  );
}

/**
 * _css
 *
 * Compiles a .scss file
 *
 * @param {string} file - Path to a .scss file
 * @returns {string} CSS
 */
async function _css(file) {
  const css = await styles(file);

  return css[0].css;
}

/**
 * _js
 *
 * Compiles and bundles a .js file
 *
 * @param {string} file - Path to a .js file
 * @returns {string} JS
 */
async function _js(file) {
  const js = await javascripts(file);

  return js[0].js;
}

/**
 * _html
 *
 * Compiles a .pug file with or without a locale data.
 *
 * @param {string} file - Path to a .pug file
 * @param {string} locale - Path to a locale .yaml file
 * @param {string} [name="index.html"] - Name of the file to return
 * @returns {string} HTML with socket.io listener
 */
async function _html(file, locale, name = "index.html") {
  let page = await pages(file, locale);

  if (page.length > 1) {
    page = page.filter(({ filename }) => filename === name);

    if (page.length > 1)
      page = page.find(
        ({ destination }) =>
          destination.replace(config.BUILD_DIRECTORY, "") === ""
      );
    else page = page[0];
  } else page = page[0];

  return plugSocketIO(page.html);
}

/**
 * _static
 *
 * Reads the contents of a file
 *
 * @param {file} file
 * @returns {Buffer}
 */
async function _static(file) {
  let contents = await fse.readFile(file);

  return contents;
}

/**
 * _respond
 *
 * Writes the head and respond to a request with the given contents
 *
 * @param {Response} res
 * @param {object} responseData
 * @param {string} responseData.contentType - Type of the response
 * @param {number} responseData.responseCode - Code of the response
 * @param {string} responseData.contents - Contents of the response
 */
function _respond(
  res,
  { contentType = "text/plain", responseCode = 200, contents = "" }
) {
  if (contentType) res.setHeader("Content-Type", contentType);

  res.writeHead(responseCode);
  res.end(contents);
}

/**
 * _doesntExist
 *
 * Writes an error message and respond to a request with a 404
 *
 * @param {Response} res
 * @param {string} file
 */
function _doesntExist(res, file) {
  const prettyPath = path.relative(config.CWD, file);
  const contents = plugSocketIO(
    errorTemplate.replace(
      "<!-- error -->",
      `
      <h1>404</h1>
      <p>Couldn't find file <strong>${prettyPath}</strong></p>
    `
    )
  );

  logger.error(["Couldn't find file", prettyPath]);

  _respond(res, {
    contentType: "text/html",
    responseCode: 404,
    contents,
  });
}

/**
 * _error
 *
 * Writes an error message and respond to a request with a 500
 *
 * @param {Response} res
 * @param {string} file
 * @param {Error} err
 */
function _error(res, file, err) {
  const prettyPath = path.relative(config.CWD, file);
  const contents = plugSocketIO(
    errorTemplate.replace(
      "<!-- error -->",
      `
      <h1>Error</h1>
      <p>Couldn't process file <strong>${prettyPath}</strong></p>
      <code>
        <pre>
          ${err.stack}
        </pre>
      </code>
    `
    )
  );

  logger.error(["Couldn't process file", prettyPath]);

  _respond(res, {
    contentType: "text/html",
    responseCode: 500,
    contents,
  });
}

/**
 * requestListener
 *
 * Sort and responds requests to the server with the final compiled contents.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise}
 */
async function requestListener(req, res) {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  const { ext, base } = path.parse(pathname);
  const isStatic = ext && !Object.keys(extMap).includes(ext);
  let file;

  

  logger.announce(["Resolving", pathname]);

  const contentType = mime.lookup(pathname);
  const result = {
    contentType,
  };


  if(config.OPTIONS.plugins) {
    for (let i = 0; i < config.OPTIONS.plugins.length; i++) {
      const plugin = config.OPTIONS.plugins[i];
      
      if(plugin.endPoint && typeof plugin.endPoint === 'function') {
        const pluginResult = plugin.endPoint(req.url);
        if(pluginResult && pluginResult.body) {
          const contents = pluginResult.type === 'text/html' ? plugSocketIO(pluginResult.body) : pluginResult.body
          _respond(res, { contentType: pluginResult.type, contents });
          return;
        }
      }
    }
  }

  // if file is static we just serve the contents
  // NOTE: this should very rarely happen as express takes care
  // of static files.
  if (isStatic) {
    let file = path.join(config.PUBLIC_DIRECTORY, pathname);

    if (!fse.pathExistsSync(file)) {
      _doesntExist(res, file);
      return;
    }

    try {
      let contents = await _static(file);

      _respond(res, { ...result, contents });
      return;
    } catch (err) {
      _error(res, file, err);
      return;
    }
  }


  let contents;
  switch (ext) {
    case ".css":
      file = path.join(
        config.PAGES_DIRECTORY,
        pathname.replace(ext, extMap[ext])
      );

      if (!fse.pathExistsSync(file)) {
        _doesntExist(res, file);
        break;
      }

      try {
        contents = await _css(file);
      } catch (err) {
        _error(res, file, err);
        break;
      }
      break;

    case ".js":
      file = path.join(
        config.PAGES_DIRECTORY,
        pathname.replace(ext, extMap[ext])
      );

      if (!fse.pathExistsSync(file)) {
        _doesntExist(res, file);
        break;
      }

      try {
        contents = await _js(file);
      } catch (err) {
        _error(res, file, err);
        break;
      }
      break;

    default:
      // html is more complicated then css and js
      // we could be dealing with a locale
      // which we have to find the path to

      const { dir } = path.parse(ext ? pathname : `${pathname}index.html`);
      const [r, potentialLocale, ...pagePath] = dir.split("/");
      let pageName = ext ? base : "index.html";

      // we first try the page locales
      let { pageLocalePath, locales, exists } = await resolveLocales(
        pagePath,
        potentialLocale
      );

      if (exists) {
        file = path.join(pageLocalePath, "..", pageName.replace("html", "pug"));
      } else {
        // we are probably dealig with
        // a regular page
        file = path.join(
          config.PAGES_DIRECTORY,
          ext ? pathname.replace(ext, extMap[ext]) : `${pathname}index.pug`
        );
        const mdFile = path.join(
          config.PAGES_DIRECTORY,
          ext ? pathname.replace(ext, ".md") : `${pathname}index.md`
        );
        // If this page has an md file associated with it instead of a pug file, use that.
        if (fse.pathExistsSync(mdFile)) {
          file = mdFile;
        }
        // try the global locale for the page
        const defaultLocalesObj = await resolveLocales(pagePath, config.OPTIONS.locales.defaultName);
        locales = defaultLocalesObj.locales;
        // LIAM 2021-08-14 - I'm commenting this out because I want to review it later on.
        // It includes this `potentialLocale` variable that I don't quire understand right now, just refactoring.
        // const locale = path.resolve(
        //   config.PAGES_DIRECTORY,
        //   potentialLocale,
        //   pagePath.join("/"),
        //   config.OPTIONS.locales.directoryName,
        //   config.OPTIONS.locales.defaultName + ".yaml"
        // );
        // if (!fse.pathExistsSync(locale)) locales = null;
        // else locales = [locale];
        
        if (!defaultLocalesObj.exists) locales = null;
      }

      /// If this doesn't exist...
      if (!fse.pathExistsSync(file)) {
        // Try with an MD file
        // If this page has an md file associated with it instead of a pug file, use that.
        file = path.join(pageLocalePath, "..", pageName.replace("html", "md"));

        // Finally, if this doesn't exist, throw an error
        if (!fse.pathExistsSync(file)) {
          _doesntExist(res, file);
          break;
        }
      }

      try {
        contents = await _html(file, locales, pageName);
      } catch (err) {
        _error(res, file, err);
        break;
      }

      break;
  }

  if (contents) _respond(res, { ...result, contents });
}

async function resolveLocales(pagePath, n, additionalComponents = []) {
  const pageLocalePath = path.join(
    config.PAGES_DIRECTORY,
    ...additionalComponents,
    pagePath.join("/"),
    config.OPTIONS.locales.directoryName
  );
  
  let locales = [
    path.join(pageLocalePath, `${n}.yaml`),
    path.join(pageLocalePath, `${n}.md`),
  ];
  
  const exists = locales.reduce((a, c) => {
    return a !== false || fse.pathExistsSync(c) !== false;
  }, false);

  return {
    pageLocalePath,
    locales,
    exists,
  };
}

module.exports = requestListener;
