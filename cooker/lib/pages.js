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
      // if we are dealing with anything inside /website
      // we only compiled that specific template and locales
      pugFiles = [file];
    } else if (fileInfo.ext === ".yaml") {
      // if we have a locale file then we save that specific language
      // that way we only compiled that languages template
      singleLocale = fileInfo.base;
      // if we are at not at the root then we find the relative template file
      // to the locale file
      if (file.includes(CONSTS.PAGES_FOLDER))
        pugFiles = await helpers.getFiles(
          path.join(fileInfo.dir, "..", "*.pug")
        );
    }
  }

  // If we don't have any passed files, then we query them all
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

    // note: files that doesn't have locales, will be skipped here 👍
    if (localeFiles.length > 0) {
      // render the pug file to a function so we can just reuse
      // that with the different locale. SUPA FAST ⚡️
      let compiledFunction;

      try {
        compiledFunction = pug.compileFile(file);
      } catch (error) {
        logger.error([file, "Error compiling template"], error);
        continue; // skips template file
      }

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

        // root dest with locale
        const dest =
          localeInfo.name !== "default"
            ? path.join(CONSTS.BUILD_FOLDER, localeInfo.name)
            : CONSTS.BUILD_FOLDER;

        // page dest
        const pageDest = path.join(
          dest,
          templateInfo.dir.replace(CONSTS.PAGES_FOLDER, "")
        );

        // relative paths
        const relroot = path.relative(pageDest, CONSTS.BUILD_FOLDER);
        const rellocale = path.relative(pageDest, dest);

        // assemble the data
        const data = {
          globals: {
            relroot: relroot ? relroot : ".",
            rellocale: rellocale ? rellocale : ".",
            ...env.raw,
          },
          locale: {
            id: localeInfo.name,
            ...mergedYaml[0],
          },
        };

        const outFile = path.join(pageDest, `${templateInfo.name}.html`);

        // render the html with the data
        let htmlString;
        try {
          htmlString = compiledFunction(data);
        } catch (error) {
          logger.error(
            [outFile, "Failed to compiled template with locale variables"],
            error
          );
          continue; // skip file
        }

        try {
          // output the file
          promises.push(
            fse
              .outputFile(outFile, htmlString)
              .then(() => logger.success([outFile, "Compiled"]))
          );
        } catch (error) {
          logger.error([outFile, "Failed to save template to disk"], error);
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
