// The purpose of this function is to compile our templates
"use strict";

const pug = require("pug");
const yaml = require("js-yaml");
const fse = require("fs-extra");
const path = require("path");

// local imports
const logger = require("./logger.js");
const helpers = require("./helpers.js");
const getClientEnvironment = require("./env.js");
const CONSTS = require("../utils/consts.js");

// consts
const env = getClientEnvironment();

function saveHtml({ destination, filepath, filename, pugFunction, data }) {
  // page dest
  const dest = path.join(destination, filepath);

  // globals
  const relroot = path.relative(dest, CONSTS.BUILD_FOLDER);
  const rellocale = path.relative(dest, destination);

  const outFile = path.join(dest, filename);

  // render the html with the data
  let htmlString;
  try {
    htmlString = pugFunction({
      globals: {
        relroot: relroot ? relroot : ".",
        rellocale: rellocale ? rellocale : ".",
        ...env.raw,
      },
      page: data ? data : {},
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

    if (fileInfo.ext === ".pug" && file.includes(CONSTS.PAGES_FOLDER)) {
      // if we are dealing with anything inside /pages
      // we only compiled that specific template and locales
      pugFiles = [file];
    } else if (fileInfo.ext === ".yaml") {
      // if we have a locale file then we save that specific language
      // that way we only compiled that language template
      singleLocale = fileInfo.base;
      // if we are at not at the root then we find the relative template file
      // to the locale file
      if (file.includes(CONSTS.PAGES_FOLDER))
        pugFiles = await helpers.getFiles(
          path.join(fileInfo.dir, "..", "*.pug")
        );
    }
  }

  // If we don't have any files, then we query them all
  // this means that we are either dealing with a master pug file
  // or a master locale file
  if (!pugFiles)
    pugFiles = await helpers.getFiles(
      path.join(CONSTS.PAGES_FOLDER, "**", "*.pug")
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
    const pagePath = templateInfo.dir.replace(CONSTS.PAGES_FOLDER, "");

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
      destination: CONSTS.BUILD_FOLDER,
      filepath: pagePath,
      filename: `${templateInfo.name}.html`,
      pugFunction: compiledFunction,
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
        let mainYamlFile = path.join(CONSTS.CWD, localeInfo.name, ".yaml");

        const exists = await fse.pathExists(mainYamlFile);
        if (!exists) mainYamlFile = path.join(CONSTS.CWD, "default.yaml");

        let mainYaml;
        try {
          mainYaml = await fse.readFile(mainYamlFile, "utf8");
        } catch (error) {
          logger.error([mainYaml, "Failed to read locale"], error);
          continue; // skips locale file
        }

        let localeYaml;
        try {
          localeYaml = await fse.readFile(locale, "utf8");
        } catch (error) {
          logger.error([localeYaml, "Failed to read locale"], error);
          continue; // skips locale file
        }

        let mergedYaml;
        try {
          mergedYaml = yaml.loadAll(mainYaml + "\n" + localeYaml, null, {
            json: true,
          });
        } catch (error) {
          logger.error([mergedYaml, "Failed to compile locale"], error);
          continue; // skips locale file
        }

        // render the html with the data and save it
        const options = {
          ...outputOptions,
          destination:
            localeInfo.name !== "default"
              ? path.join(CONSTS.BUILD_FOLDER, localeInfo.name)
              : CONSTS.BUILD_FOLDER,
          data: {
            ...mergedYaml[0],
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
