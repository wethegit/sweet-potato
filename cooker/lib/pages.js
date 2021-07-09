// The purpose of this function is to compile our templates
"use strict";

const pug = require("pug");
const yaml = require("js-yaml");
const fse = require("fs-extra");
const path = require("path");
const resolve = require("resolve");
const matter = require("gray-matter");
const Markdown = require("markdown-it")({ html: true });
const { config, logger, getFiles } = require("@wethegit/sweet-potato-utensils");

// local imports
const { getClientEnvironment } = require("./env.js");

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

  // render the html with the data
  let htmlString;
  try {
    htmlString = pugFunction({
      globals,
      page: data.page,
      model: data.model,
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
      [`Can't compile global yaml`, path.relative(config.CWD, file)],
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
 * pages
 *
 * @param {string} file - Path to a pug file
 * @param {string} localeFile - Path to a yaml file
 *
 * @returns {promise} - Resolves to array of objects with the page information
 */
async function pages(file, localeFile) {
  if (
    (file &&
      (!fse.pathExistsSync(file) || !file.includes(config.PAGES_DIRECTORY))) ||
    (localeFile && !fse.pathExistsSync(localeFile))
  )
    return;

  let pugFiles;
  let singleLocale;

  if (file) pugFiles = [file];

  if (localeFile) {
    let fileInfo = path.parse(localeFile);
    // if we have a locale file then we save that specific language
    // that way we only compiled that language template
    singleLocale = fileInfo.base;
    // if we are at not at the root then we find the relative template file to the locale file
    if (!pugFiles && localeFile.includes(config.PAGES_DIRECTORY))
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

  // go throught all of them
  let promises = [];

  for (let file of pugFiles) {
    // get the file information and locale files
    let templateInfo = path.parse(file);

    // The data file for MD. This just includes any object data within an MD file, if that's what we're compiling
    const mdData = {};

    // getting the pathname for globals
    let pathname = `/${path.relative(`${config.CWD}/pages`, templateInfo.dir)}`;

    // If we're a markdown file, compile with grey-matter
    if (templateInfo.ext.toLowerCase() === ".md") {
      const mdfile = matter.read(file);
      const name = templateInfo.name;
      const templateFile = path.join(templateInfo.dir, mdfile.data.template);

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
          continue;
        } else {
          // Fill out the markdown data content
          // Convert the content using markdown.
          mdData.content = Markdown.render(mdfile.content);
          // Transcribe the returned data components to the markdown data object
          for (let t in mdfile.data) {
            mdData[t] = mdfile.data[t];
          }
          // Parse the template file
          templateInfo = path.parse(templateFile);
          // ... But set the name of the output to the name of the md file
          templateInfo.name = name;
          // Finally update the file to parse to the provided template file.
          file = templateFile;
        }
      }
    }

    // Otherwise compile as a pug file
    // if file starts with underscore, we ignore it, expected as standard 👍
    if (templateInfo.name.charAt(0) == "_") continue;

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

    // Find locale files based on main updated file, if it exists
    let localeFiles;
    if (singleLocale) {
      const masterLocale = path.join(templateInfo.dir, "locales", singleLocale);

      // something to discuss, should we skip files without master locales?
      if (fse.pathExistsSync(masterLocale)) localeFiles = [masterLocale];
    } else
      localeFiles = await getFiles(
        path.join(templateInfo.dir, "locales", "*.yaml")
      );

    // Get data from a model, if available
    const model = await getDataFromDataInclude(
      path.join(templateInfo.dir, "data", "index.js"),
      path.join(templateInfo.dir, "data")
    );

    // Update our pathname to reflect the output file.
    if (templateInfo.name === "index") pathname += "/";
    else pathname += `/${templateInfo.name}.html`;

    const outputOptions = {
      destination: config.BUILD_DIRECTORY,
      filepath: pagePath,
      filename: `${templateInfo.name}.html`,
      pugFunction: compiledFunction,
      data: {
        globals: {
          PATH_NAME: pathname,
        },
        page: mdData,
        model,
      },
    };

    // if no page locales were passed or found
    // we try to get the default locale
    if (localeFiles.length <= 0) {
      let mainYaml = await getDataFromYaml(
        path.join(
          config.GLOBAL_LOCALES_DIRECTORY,
          `${config.OPTIONS.locales.defaultName}.yaml`
        )
      );

      outputOptions.data.globals = Object.assign(
        {},
        outputOptions.data.globals,
        mainYaml
      );

      // render the html with the data and save it
      promises.push(
        saveHtml(outputOptions, {
          source: file,
        })
      );
    } else {
      // go through the locale files
      for (const locale of localeFiles) {
        // get the file info
        const localeInfo = path.parse(locale);

        // get the main locale
        let mainYamlFile = path.join(
          config.GLOBAL_LOCALES_DIRECTORY,
          localeInfo.base
        );

        // if doesn't exists uses default
        if (!fse.pathExistsSync(mainYamlFile))
          mainYamlFile = path.join(
            config.GLOBAL_LOCALES_DIRECTORY,
            `${config.OPTIONS.locales.defaultName}.yaml`
          );

        let mainYaml = await getDataFromYaml(mainYamlFile);

        const globals = Object.assign({}, outputOptions.data.globals, mainYaml);
        const pageYaml = await getDataFromYaml(locale);
        const page = Object.assign({}, mdData, pageYaml);

        // render the html with the data and save it
        const options = {
          ...outputOptions,
          locale: localeInfo.name,
          destination:
            // default locale doesn't generate a sub directory
            localeInfo.name !== "default"
              ? path.join(config.BUILD_DIRECTORY, localeInfo.name)
              : config.BUILD_DIRECTORY,
          data: {
            globals,
            page,
            model,
          },
        };

        promises.push(
          saveHtml(options, {
            source: file,
          })
        );
      }
    }
  }

  return Promise.all(promises).then((res) => {
    // done 🎉
    logger.finish("Generating pages");
    return res;
  });
}

module.exports = pages;
