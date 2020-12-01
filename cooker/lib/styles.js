// The purpose of this function is to compile our scss files, simple as that
"use strict";

const sass = require("node-sass");
const path = require("path");
const fse = require("fs-extra");
const stylelint = require("stylelint");
const stylelintFormatter = require("stylelint-formatter-pretty");
const assetFunctions = require("node-sass-asset-functions");
const packageImporter = require("node-sass-package-importer");

// local imports
const logger = require("./logger.js");
const helpers = require("./helpers.js");
const CONSTS = require("./consts.js");
const isProduction = process.env.NODE_ENV == "production";

async function lint(file) {
  let result;

  try {
    result = await stylelint.lint({
      files: file,
      syntax: "scss",
      formatter: stylelintFormatter,
      maxWarnings: 20,
    });

    if (result.errored || result.maxWarningsExceeded) {
      logger.error([file, "Failed on linting"], result.output);
      return false;
    }

    if (result.results[0].warnings > 0) {
      logger.warning([file, "Linting warnings"]);
      console.log(result.output);
    }
  } catch (error) {
    logger.error([file, "Failed to lint"], error);
    return false;
  }

  return result;
}

async function styles(event, file) {
  if (event && event == "add") return; // don't do anything for newly added files just yet

  if (file && !fse.pathExistsSync(file)) return; // if file for some reason got removed

  logger.start("Started styles compilation");

  // If we pass a file and it's outside website, we still need to lint and prettyfy
  if (file && !file.includes(CONSTS.SOURCE_WEBSITE_FOLDER)) {
    const prettified = await helpers.prettify(file, { parser: "scss" });
    if (prettified === true) {
      logger.finish("Ended styles compilation");
      return;
    }

    const lintResult = await lint(file);
    if (lintResult === false) {
      logger.finish("Ended styles compilation");
      return;
    }

    file = null;
  }

  // if a file is passed use it instead of querying for all
  let sassFiles = file
    ? [file]
    : await helpers.getFiles(
        `${CONSTS.SOURCE_WEBSITE_ASSETS_FOLDER}/css/**/*.scss`
      );

  // gonna save all promises here to callback completion
  let promises = [];

  // go through files
  for (const file of sassFiles) {
    const fileInfo = path.parse(file);

    const prettified = await helpers.prettify(file, { parser: "scss" });
    // we prettified the file and wrote it on disk again,
    // that will trigger another update for this file, not with proper coding style
    // so we skip it here at this moment, and compile it on the second trigger
    if (prettified === true) return;

    const lintResult = await lint(file);
    if (lintResult === false) return;

    // if file starts with underscore, we ignore it, expected as standard 👍
    if (fileInfo.name.charAt(0) == "_") continue;

    // build the destination file
    let outFile = helpers.buildDest({
      ...fileInfo,
      ext: ".css",
    });

    // render file and push promise
    const promise = new Promise(function (resolve, reject) {
      sass.render(
        {
          file: file,
          sourceMap: !isProduction,
          sourceMapEmbed: !isProduction,
          outFile: outFile,
          includePaths: ["node_modules"],
          outputStyle: "compressed",
          importer: packageImporter(),
          functions: assetFunctions({
            images_path: `${CONSTS.SOURCE_WEBSITE_ASSETS_FOLDER}/img`,
            http_images_path: `${process.env.WTC_PUBLIC_URL}assets/img`,
          }),
        },
        async function (error, result) {
          if (error) {
            logger.error(
              [outFile, "Failed to compile"],
              `Line ${error.line}:${error.column} ${error.message}`
            );
            resolve(null);
            return;
          }

          let finalCSS = result.css;

          try {
            // output the file
            fse
              .outputFile(outFile, finalCSS)
              .then(() => resolve(logger.success([outFile, "Compiled"])));
          } catch (error) {
            logger.error(
              [outFile, "Failed saving compiled .css"],
              error.message
            );
            resolve(null);
          }
        }
      );
    });

    promises.push(promise);
  }

  // done 🎉
  return Promise.all(promises).then(() =>
    logger.finish("Ended styles compilation")
  );
}

module.exports = styles;
