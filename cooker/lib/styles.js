// The purpose of this function is to compile our scss files, simple as that
"use strict";

const sass = require("node-sass");
const path = require("path");
const fse = require("fs-extra");
const assetFunctions = require("node-sass-asset-functions");
const packageImporter = require("node-sass-package-importer");
const { logger, config, getFiles } = require("@wethegit/sweet-potato-utensils");

const isProduction = process.env.NODE_ENV == "production";

/**
 * customImporter
 * Custom resolver that enables reading data from the config inside sass files
 *
 * How it works:
 * Inside a scss file import with a prefix:
 * @import sweet-potato:breakpoints
 * This will load all the breakpoints from the config
 *
 * @param {string} url
 */
function customImporter(url) {
  // This generates a stylesheet from scratch for `@use "big-headers"`.
  if (!url.includes("sweet-potato:") || !config.OPTIONS.breakpoints)
    return null;

  let contents = "";

  for (let [key, value] of Object.entries(config.OPTIONS.breakpoints)) {
    contents += `$${key}: "screen and ${value}";`;
  }

  return {
    contents,
  };
}

/**
 * styles
 *
 * @param {string} file - Path to a scss file
 *
 * @returns {promise} - Resolves to array of objects with the file information
 */
async function styles(file) {
  if (
    file &&
    (!fse.pathExistsSync(file) || !file.includes(config.PAGES_DIRECTORY))
  )
    return; // if file for some reason got removed

  let sassFiles = file
    ? [file]
    : await getFiles(path.join(config.PAGES_DIRECTORY, "**", "*.scss"));

  if (sassFiles.length <= 0) return;

  logger.start("Generating styles");

  // gonna save all promises here to callback completion
  let promises = [];

  // go through files
  for (const file of sassFiles) {
    const fileInfo = path.parse(file);

    // if file starts with underscore, we ignore it, expected as standard 👍
    if (fileInfo.name.charAt(0) == "_") continue;

    // build the destination file
    const outFile = path.join(
      config.BUILD_DIRECTORY,
      fileInfo.dir.replace(config.PAGES_DIRECTORY, ""),
      fileInfo.base.replace("scss", "css")
    );

    let relativeOutput = path.relative(
      path.parse(outFile).dir,
      config.BUILD_DIRECTORY
    );

    if (!relativeOutput) relativeOutput = ".";
    relativeOutput += "/";

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
          importer: [packageImporter(), customImporter],
          functions: assetFunctions({
            images_path: config.PUBLIC_DIRECTORY,
            http_images_path: relativeOutput,
          }),
          ...config.OPTIONS.sassOptions(!isProduction, file),
        },
        async function (error, result) {
          const prettyPathOut = path.relative(config.CWD, outFile);
          const prettyPathSource = path.relative(config.CWD, file);

          if (error) {
            logger.error(["Failed to compile", prettyPathSource], error);

            reject(error);
          }

          const finalCSS = result.css;

          try {
            // output the file
            await fse.outputFile(outFile, finalCSS);

            const data = await fse.readFile(outFile, "utf8");

            logger.success(["Compiled", prettyPathSource, prettyPathOut]);

            resolve({ destination: outFile, css: data });
          } catch (error) {
            logger.error(
              ["Failed saving", prettyPathSource, prettyPathOut],
              error
            );

            reject(error);
          }
        }
      );
    });

    promises.push(promise);
  }

  // done 🎉
  return Promise.all(promises).then((res) => {
    // go through files
    logger.finish("Generating styles");

    return res;
  });
}

module.exports = styles;
