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
 *
 *
 * this was an atempt at a simple cache
const cacheFile = path.join(CONSTS.CACHE_DIRECTORY, "server.json");
let cache = {};
if (fse.pathExistsSync(cacheFile)) cache = fse.readJsonSync(cacheFile);

async function _cache(file) {
  const cacheMtimeMs = cache[file];
  const { mtimeMs } = await fse.stat(file);

  if (cacheMtimeMs === mtimeMs) return true;
  return mtimeMs;
}
*/

// appending socket.io listener
// so we can refresh the page on updates
function plugSocketIO(html) {
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

async function _css(file) {
  const css = await styles(file);

  return css[0].css;
}

async function _js(file) {
  const js = await javascripts(file);

  return js[0].js;
}

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

async function _static(file) {
  let contents = await fse.readFile(file);

  return contents;
}

function _respond(
  res,
  { contentType = "text/plain", responseCode = 200, contents = "" }
) {
  if (contentType) res.setHeader("Content-Type", contentType);

  res.writeHead(responseCode);
  res.end(contents);
}

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

async function requestListener(req, res) {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  const { ext, base } = path.parse(pathname);
  const isStatic = ext && !Object.keys(extMap).includes(ext);
  let file;

  if (config.OPTIONS.verbose) logger.announce(["Resolving", pathname]);

  // const inCache = await _cache(file);
  const contentType = mime.lookup(pathname);
  const result = {
    contentType,
  };

  // if file is static we just serve the contents
  // NOTE: this should very rarely happen as express takes care
  // of static files
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
      const pageLocalePath = path.join(
        config.PAGES_DIRECTORY,
        pagePath.join("/"),
        "locales"
      );

      let pageName = ext ? base : "index.html";

      // we first try the page locale
      let locale = path.join(pageLocalePath, `${potentialLocale}.yaml`);

      if (!fse.pathExistsSync(locale)) {
        // we are probably dealig with
        // a regular page
        file = path.join(
          config.PAGES_DIRECTORY,
          ext ? pathname.replace(ext, extMap[ext]) : `${pathname}index.pug`
        );

        locale = path.resolve(
          config.PAGES_DIRECTORY,
          potentialLocale,
          pagePath.join("/"),
          "locales",
          "default.yaml"
        );

        if (!fse.pathExistsSync(locale)) locale = null;
      } else
        file = path.join(pageLocalePath, "..", pageName.replace("html", "pug"));

      if (!fse.pathExistsSync(file)) {
        _doesntExist(res, file);
        break;
      }

      try {
        contents = await _html(file, locale, pageName);
      } catch (err) {
        _error(res, file, err);
        break;
      }

      break;
  }

  // try {
  //   // save our cache...
  //   cache[file] = {
  //     contents,
  //     mtimeMs,
  //   };

  //   // ...but don't wait for file
  //   fse.outputJson(cacheFile, cache);
  // } catch (err) {
  //   _error(res, file, err);
  //   return;
  // }

  if (contents) _respond(res, { ...result, contents });
}

module.exports = requestListener;
