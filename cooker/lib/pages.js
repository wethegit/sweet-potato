// The purpose of this function is to compile our templates
"use strict";

const pug = require("pug");
const yaml = require("js-yaml");
const fse = require("fs-extra");
const path = require("path");
const resolve = require("resolve");
const matter = require("gray-matter");
const Markdown = require("markdown-it")({ html: true });
const markdownItAttrs = require("markdown-it-attrs");
const { config, logger, getFiles } = require("@wethegit/sweet-potato-utensils");

Markdown.use(markdownItAttrs, {});

// local imports
const { getClientEnvironment } = require("./env.js");
const { exists } = require("fs");

// consts
const env = getClientEnvironment();

/**
 * npmResolverPlugin
 * Custom resolver for pug to import files from node_modules.
 *
 * How it works:
 * 1. Install component with `npm install @wethegit/sweet-potato-components
 * 2. Inside a pug file we can import from node_modules with a tilda, ie:
 * ~@wethegit/sweet-potato-components/navigation
 * Note that the installed components MUST have a `pug` entry on its package.json
 *
 * @param {string} filename
 * @param {string} source
 */
function npmResolverPlugin() {
  return {
    resolve(filename, source) {
      // if file doesn't start with ~ we just return the regular resolved path
      if (filename.charAt(0) !== "~")
        return resolve.sync(filename, { basedir: path.dirname(source) });

      // we remove the tilda from the name
      const file = path.parse(filename.substring(1));
      let resolved;
      try {
        // try to resolve the module from node_modules
        resolved = resolve.sync(path.join(file.dir, file.name), {
          basedir: path.join(config.CWD, "node_modules"),
          extensions: [".pug"],
          packageFilter(pkg) {
            // looks for a pug entry inside the package.json
            return { ...pkg, main: pkg.pug || pkg.main };
          },
        });
      } catch (err) {
        logger.error(
          `Error resolving pug module path\nFilename: ${filename}\nSource: ${source}`,
          err
        );
        return "";
      }

      return resolved;
    },
  };
}

/**
 * saveHtml
 * Compiles a source pug file and outputs the html to the destination
 * @param {object} outputOptions
 * @param {string} outputOptions.destination
 * @param {string} outputOptions.filepath
 * @param {string} outputOptions.filename
 * @param {string} outputOptions.locale
 * @param {function} outputOptions.pugFunction - Function generated from compiling a file
 * @param {object} outputOptions.data
 * @param {object} outputOptions.data.globals
 * @param {object} outputOptions.data.page
 *
 * @returns {object} File data
 */
async function saveHtml(outputOptions, { source }) {
  const { destination, filepath, filename, pugFunction, data, locale } =
    outputOptions;

  // page dest
  const dest = path.join(destination, filepath);

  let slug = filepath.split("/");
  slug = slug[slug.length - 1];

  // globals
  const relroot = path.relative(dest, config.BUILD_DIRECTORY);

  let globals = {
    ...env.raw,
    RELATIVE_ROOT: relroot ? relroot : ".",
    BREAKPOINTS: config.OPTIONS.breakpoints || {},
    PAGE_SLUG: slug,
    LOCALE_SLUG: locale,
    ...data.globals,
  };

  if (locale) {
    const rellocale = path.relative(dest, destination);

    globals.RELATIVE_LOCALE_ROOT = rellocale ? rellocale : ".";
    globals.LOCALE_KEY = locale;
  }

  // final destination
  const outFile = path.join(dest, filename);
  const prettyPathSource = path.relative(config.CWD, source);
  const prettyPathOut = path.relative(config.CWD, outFile);

  // getting the pathname for globals
  globals.PATH_NAME = `/${path.relative(
    `${config.BUILD_DIRECTORY}`,
    path.join(dest, filename)
  )}`;

  // render the html with the data
  let htmlString;
  try {
    htmlString = pugFunction({
      globals,
      page: data.page,
      model: data.model,
      pagePlugins: data.pagePlugins,
    });
  } catch (error) {
    logger.error([`Failed to render template`, prettyPathSource], error);

    throw error;
  }

  try {
    await fse.outputFile(outFile, htmlString);

    logger.success([`Compiled`, prettyPathSource, prettyPathOut]);

    return { destination, filepath, filename, html: htmlString };
  } catch (err) {
    logger.error([`Failed to save template to disk`, prettyPathOut], err);

    throw err;
  }
}



/**
 * getDataFromYaml
 * Reads a yaml file and returns the compiled data
 *
 * @returns {(object|string|number|null|undefined)}
 */
async function getDataFromYaml(file) {
  let result = {};

  if (!fse.pathExistsSync(file)) return result;

  try {
    const content = await fse.readFile(file, "utf8");
    result = yaml.load(content);
  } catch (error) {
    logger.error(
      [`Can't compile yaml`, path.relative(config.CWD, file)],
      error
    );

    throw error;
  }

  return result;
}

/**
 * Retrieves locale data from a matter-styled markdown file and renderes the markdown to HTML.
 * 
 * @typedef {Object} getDataFromMarkdown
 * @property {string} file - The full path to the markdown file. Will read with matter and then render the contained markdown
 */
async function getDataFromMarkdown(file) {
  let result = {};

  if (!fse.pathExistsSync(file)) return result;

  try {
    const mdfile = matter.read(file);
    result = Object.assign({}, mdfile.data, {
      [config.OPTIONS.locales.markdownVariableName || 'markdownContent']:
        Markdown.render(mdfile.content),
    });
  } catch (error) {
    logger.error(
      [`Can't compile markdown`, path.relative(config.CWD, file)],
      error
    );

    throw error;
  }

  return result;

}

/**
 * getDataFromDataInclude
 * Executes a promise in a javascript file which is intended to return model data.
 *
 * @param {string} file - Path to a index javasceript file
 * @param {string} path - The fully justified path to the folder. This allows the javascript file to run code against the folder, loading additional files, for example
 *
 * @returns {object} - Resolves to an object. This is provided by the repo, so implementation is up to the associated developer
 */
async function getDataFromDataInclude(file, filepath) {
  let result = {};

  if (!fse.pathExistsSync(file)) return result;

  try {
    const content = await require(file)(filepath);
    result = content;
  } catch (error) {
    logger.error(
      [`Can't compile data file`, path.relative(config.CWD, file)],
      error
    );

    throw error;
  }

  return result;
}

/**
 * Parses a markdown file from a path, file, and templateInfo supplied by the pages function.
 *
 * @param {string} file - The string path to the markdown file. Used to parse the file in matter.
 * @param {Object} fileInfo - An object detailing specific properties of the md file. Result of path.parse(file);
 * @returns {ParsedMarkdown} - The parsed markdown content for rendering.
 */
function parseMarkdown(file, fileInfo) {
  const mdfile = matter.read(file);
  const name = fileInfo.name;
  const dir = fileInfo.dir;
  const templateFile = path.join(fileInfo.dir, mdfile.data.template);
  const mdData = {
    ...mdfile,
    templateFile,
  };

  // If we have a template file defined in the grey-matter file
  if (mdfile.data.template) {
    // If the template doesn't exist, warn and continuer
    if (!fse.pathExistsSync(templateFile)) {
      logger.warning([
        `Error compiling ${path.relative(
          config.CWD,
          file
        )}. The markdown file calls for the template ${path.relative(
          config.CWD,
          templateFile
        )} which does not exist`,
      ]);
      throw new Error("MD template doesn't exists, skipping.");
    } else {
      // Fill out the markdown data content
      // Convert the content using markdown.
      mdData.content = Markdown.render(mdfile.content);
      // Parse the template file
      mdData.templateInfo = path.parse(templateFile);
      // ... But set the name of the output to the name of the md file
      mdData.templateInfo.name = name;
      // ... and set the dir to the md file
      mdData.templateInfo.dir = dir;
    }
  }

  return mdData;
}

/**
 * Serves as a wrapper around various data resolution methods. Takes a fileInfo and returns an object that contains all of the variables contained within.
 * 
 * @param {Array} localeFiles - An array of locale files for consumption
 */
async function getDataFromLocaleFiles(localeFiles) {
  let dataReturn = {}

  // Currently there's no explicit order to this data, should we assume one? Question for later
  for(const file of localeFiles) {
    const localeInfo = path.parse(file);

    let data = {};

    if (localeInfo.ext === ".yaml") {
      data = await getDataFromYaml(file);
    } else if (localeInfo.ext === ".md") {
      data = await getDataFromMarkdown(file);
    } else {
      logger.warning([
        `${localeInfo.ext} not supported? How the hell did we get here?`,
      ]);
    }

    dataReturn = Object.assign({}, dataReturn, data);
  };

  return dataReturn;
}

/**
 * Assembles all of the page options into an array for processing.
 *
 * @param {templateInfo} templateInfo - An object containing the combined data for the rendering template.
 * @param {*} singleLocale - Whether we're rendering to a single locale
 * @param {*} outputOptions - The default output options object to extend
 * @returns
 */
async function assemblePageOptions(
  templateInfo,
  singleLocale = false,
  outputOptions
) {
  // Find locale files based on main updated file, if it exists
  let localeFiles = [];
  const outputData = [];
  if (singleLocale) {
    singleLocale.forEach((localeFile) => {
      const masterLocale = path.join(templateInfo.dir, "locales", localeFile);

      // something to discuss, should we skip files without master locales?
      if (fse.pathExistsSync(masterLocale)) localeFiles.push(masterLocale);
    })


  } else
    localeFiles = await getFiles(
      path.join(templateInfo.dir, "locales", "?(*.yaml|*.md)")
    );

  // Combine different types of localefiles into common locale objects based on their name
  // For example if both default.yaml and default.md exist, these will be combined for processing.
  const locales = {};
  localeFiles.forEach(file => {
    const fileInfo = path.parse(file);
    locales[fileInfo.name] = locales[fileInfo.name] || [];
    locales[fileInfo.name].push(file);
  });



  // If there are no locale files, we compile the file with the bare bones of information.
  if (localeFiles.length <= 0) {
    let mainYaml = await getDataFromYaml(
      path.join(
        config.GLOBAL_LOCALES_DIRECTORY,
        `${config.OPTIONS.locales.defaultName}.yaml`
      )
    );

    // render the html with the data and save it
    const options = {
      ...outputOptions,
    };
    options.data.globals = mainYaml;
    // options.data.page =Object.assign({}, options.data.page, mainYaml);

    outputData.push(options);

    // Otherwise we loop through and create a build for each locale
  } else {

    // Loop through the discovered locales
    for(const locale in locales) {
      // get the root locale
      let mainYamlFile = path.join(
        config.GLOBAL_LOCALES_DIRECTORY,
        `${locale}.yaml`
      );
      // if doesn't exists uses default
      if (!fse.pathExistsSync(mainYamlFile))
        mainYamlFile = path.join(
          config.GLOBAL_LOCALES_DIRECTORY,
          `${config.OPTIONS.locales.defaultName}.yaml`
        );

      let mainYaml = await getDataFromYaml(mainYamlFile);

      const pageLoaleData = await getDataFromLocaleFiles(locales[locale]);

      const globals = Object.assign({}, outputOptions.data.globals, mainYaml);
      const page = Object.assign({}, outputOptions.data.page, pageLoaleData);
      const pagePlugins = outputOptions.data.pagePlugins;

      // render the html with the data and save it
      const options = {
        ...outputOptions,
        locale,
        destination:
          // default locale doesn't generate a sub directory
          locale !== "default"
            ? path.join(config.BUILD_DIRECTORY, locale)
            : config.BUILD_DIRECTORY,
        data: {
          ...outputOptions.data,
          globals,
          page,
          pagePlugins,
        },
      };

      outputData.push(options);
    }
  }

  return outputData;
}

/**
 * pages
 *
 * @param {string} file - Path to a pug file
 * @param {string} localeFile - Path to a yaml file
 *
 * @returns {promise} - Resolves to array of objects with the page information
 */
async function pages(file, localeFiles) {
  if (
    (file &&
      (!fse.pathExistsSync(file) || !file.includes(config.PAGES_DIRECTORY))) ||
    (localeFiles && localeFiles[0] && !fse.pathExistsSync(localeFiles[0]))
  )
    return;

  let pugFiles;
  let singleLocale;

  if (file) pugFiles = [file];

  // Assemble the locale file information
  if (localeFiles) {
    let fileInfo = path.parse(localeFiles[0]);
    // if we have a locale file then we save that specific language
    // that way we only compiled that language template
    singleLocale = localeFiles.map(p => path.parse(p).base); // Map the provided localefiles to their basenames
    // if we are at not at the root then we find the relative template file to the locale file
    if (!pugFiles && localeFiles[0].includes(config.PAGES_DIRECTORY))
      // this assumes that the yaml file lives inside `locales/` just a folder deep
      pugFiles = await getFiles(path.join(fileInfo.dir, "..", "*.pug"));
  }

  // If we don't have any files, then we query them all
  // this means that we are either dealing with a master pug file
  // or a master locale file
  if (!pugFiles)
    pugFiles = await getFiles(
      path.join(config.PAGES_DIRECTORY, "**", "?(*.pug|*.md)")
    );

  if (pugFiles.length <= 0) return;

  logger.start("Generating pages");

  // go through all of them
  let promises = [];

  for (let file of pugFiles) {
    // get the file information and locale files
    let templateInfo = path.parse(file);

    // Container variable for markdown data
    let mdData;

    // if file starts with underscore, we ignore it, expected as standard 👍
    if (templateInfo.name.charAt(0) == "_") continue;

    // If we're a markdown file, compile with grey-matter
    // This is a great pattern that we can just extend as we need to to render different kinds of files.
    if (templateInfo.ext.toLowerCase() === ".md") {
      try {
        mdData = parseMarkdown(file, templateInfo);

        // Update the template info and file for rendering
        // The idea here is that if we're rendering a markdown file to a page then the markdown file will provide information on the template it needs to render, so we're:
        // 1. Parsing out the markdown file into appropriate properties;
        // 2. Updating the template and page to be rendered to the template cited in the markdown file; and
        // 3. Passing along the parameters generated from the md file to that template.
        templateInfo = mdData.templateInfo;
        file = mdData.templateFile;
      } catch (e) {
        logger.error(e.message);
        continue;
      }
    }

    // render the pug file to a function so we can just reuse
    // that with the different locale. SUPA FAST ⚡️
    let compiledFunction;

    try {
      compiledFunction = pug.compileFile(file, {
        plugins: [npmResolverPlugin()],
      });
    } catch (error) {
      logger.error([`Error compiling`, path.relative(config.CWD, file)], error);
      throw error;
    }

    // removes the path to the pages folder for the final output
    const pagePath = templateInfo.dir.replace(config.PAGES_DIRECTORY, "");

    // Get data from a model, if available
    const model = await getDataFromDataInclude(
      path.join(templateInfo.dir, "_data", "index.js"),
      path.join(templateInfo.dir, "_data")
    );

    // Get any included page functions
    const pagePlugins = config.OPTIONS.pagePlugins;
    // TO DO We shoudl probably include a verification step here to ensure that provided plugins are legitimate and don't cause any issues

    const outputOptions = {
      destination: config.BUILD_DIRECTORY,
      filepath: pagePath,
      filename: `${templateInfo.name}.html`,
      pugFunction: compiledFunction,
      data: {
        model,
        page: mdData,
        pagePlugins: pagePlugins,
      },
    };

    // Assemble the page options array. This creates objects that are passed to the saveHTML function and include locale information, etc.
    const outputData = await assemblePageOptions(
      templateInfo,
      singleLocale,
      outputOptions
    );

    outputData.forEach((options) => {
      // render the html with the data and save it
      promises.push(
        saveHtml(options, {
          source: file,
        })
      );
    });
  }

  return Promise.all(promises).then((res) => {
    // done 🎉
    logger.finish("Generating pages");
    return res;
  });
}

module.exports = pages;
