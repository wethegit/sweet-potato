// The purpose of this function is to compile our templates
"use strict";

const pug = require("pug");
const yaml = require("js-yaml");
const fse = require("fs-extra");
const path = require("path");

// local imports
const logger = require("../utils/logger.js");
const helpers = require("./helpers.js");
const getClientEnvironment = require("./env.js");
const CONSTS = require("../utils/consts.js");

// consts
const env = getClientEnvironment();

function saveHtml({
  destination,
  filepath,
  filename,
  pugFunction,
  data,
  locale,
}) {
  // page dest
  const dest = path.join(destination, filepath);

  // globals
  const relroot = path.relative(dest, CONSTS.BUILD_DIRECTORY);
  let globals = {
    ...env.raw,
    relativeRoot: relroot ? relroot : ".",
    ...data.globals,
  };

  if (locale) {
    const rellocale = path.relative(dest, destination);

    globals.relativeLocaleRoot = rellocale ? rellocale : ".";
    globals.localeKey = locale;
  }

  const outFile = path.join(dest, filename);

  // render the html with the data
  let htmlString;
  try {
    htmlString = pugFunction({
      globals,
      page: data.page,
    });
  } catch (error) {
    logger.error(
      [outFile, "Failed to compiled template with locale variables"],
      error
    );
  }

  return fse
    .outputFile(outFile, htmlString)
    .then(() => logger.success([outFile, "Compiled"]));
}

async function pages(event, file) {
  // if the watcher function fires this, then event and file will be populated
  if (event && event == "add") return; // don't do anything for newly added files just yet

  if (file && !fse.pathExistsSync(file)) return; // if file for some reason got removed

  logger.start("Started templates compilation");

  let pugFiles;
  let singleLocale;

  if (file) {
    let fileInfo = path.parse(file);

    if (fileInfo.ext === ".pug" && file.includes(CONSTS.PAGES_DIRECTORY)) {
      // if we are dealing with anything inside /pages
      // we only compiled that specific template and locales
      pugFiles = [file];
    } else if (fileInfo.ext === ".yaml") {
      // if we have a locale file then we save that specific language
      // that way we only compiled that language template
      singleLocale = fileInfo.base;
      // if we are at not at the root then we find the relative template file
      // to the locale file
      if (file.includes(CONSTS.PAGES_DIRECTORY)) {
        // this assumes that the yaml file lives inside `locales/` just a folder deep
        pugFiles = await helpers.getFiles(
          path.join(fileInfo.dir, "..", "*.pug")
        );

        if (!pugFiles) {
          logger.finish("Locale without template.");
          return;
        }
      }
    }
  }

  // If we don't have any files, then we query them all
  // this means that we are either dealing with a master pug file
  // or a master locale file
  if (!pugFiles)
    pugFiles = await helpers.getFiles(
      path.join(CONSTS.PAGES_DIRECTORY, "**", "*.pug")
    );

  // go throught all of them
  let promises = [];
  for (const file of pugFiles) {
    // get the file information and locale files
    const templateInfo = path.parse(file);

    // if file starts with underscore, we ignore it, expected as standard 👍
    if (templateInfo.name.charAt(0) == "_") continue;

    // render the pug file to a function so we can just reuse
    // that with the different locale. SUPA FAST ⚡️
    let compiledFunction;

    try {
      compiledFunction = pug.compileFile(file);
    } catch (error) {
      logger.error([file, "Error compiling template"], error);
      continue; // skips template file
    }

    // removes the path to the pages folder for the final output
    const pagePath = templateInfo.dir.replace(CONSTS.PAGES_DIRECTORY, "");

    // Find locale files based on main updated file, if it exists
    let localeFiles;
    if (singleLocale) {
      const masterLocale = path.join(templateInfo.dir, "locales", singleLocale);

      if (!fse.pathExistsSync(masterLocale)) continue;

      localeFiles = [masterLocale];
    } else
      localeFiles = await helpers.getFiles(
        path.join(templateInfo.dir, "locales", "*.yaml")
      );

    const outputOptions = {
      destination: CONSTS.BUILD_DIRECTORY,
      filepath: pagePath,
      filename: `${templateInfo.name}.html`,
      pugFunction: compiledFunction,
      data: {
        globals: {},
        page: {},
      },
    };

    if (localeFiles.length <= 0) {
      // render the html with the data and save it
      try {
        promises.push(saveHtml(outputOptions));
      } catch (error) {
        logger.error("Failed to save template to disk", {
          outputOptions,
          error,
        });
      }
    } else {
      // go through the locale files
      for (const locale of localeFiles) {
        // get the file info
        const localeInfo = path.parse(locale);

        // get the main locale, if doesn't exists uses default.yaml
        let mainYamlFile = path.join(
          CONSTS.SOURCE_DIRECTORY,
          "locales",
          localeInfo.base
        );

        if (!fse.pathExistsSync(mainYamlFile))
          mainYamlFile = path.join(
            CONSTS.SOURCE_DIRECTORY,
            "locales",
            "default.yaml"
          );

        let mainYaml = {};
        if (fse.pathExistsSync(mainYamlFile)) {
          try {
            mainYaml = await fse
              .readFile(mainYamlFile, "utf8")
              .then((contents) => yaml.load(contents));
          } catch (error) {
            // silently skips it
          }
        }

        let localeYaml = {};
        if (fse.pathExistsSync(locale)) {
          try {
            localeYaml = await fse
              .readFile(locale, "utf8")
              .then((contents) => yaml.load(contents));
          } catch (error) {
            // silently skips it
          }
        }

        // render the html with the data and save it
        const options = {
          ...outputOptions,
          locale: localeInfo.name,
          destination:
            localeInfo.name !== "default"
              ? path.join(CONSTS.BUILD_DIRECTORY, localeInfo.name)
              : CONSTS.BUILD_DIRECTORY,
          data: {
            globals: mainYaml,
            page: localeYaml,
          },
        };

        try {
          promises.push(saveHtml(options));
        } catch (error) {
          logger.error("Failed to save template to disk", { options, error });
        }
      }
    }
  }

  return Promise.all(promises).then(() => {
    // done 🎉
    logger.finish("Ended templates compilation");
  });
}

module.exports = pages;
