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
const spinners = require("../utils/spinners.js");
const helpers = require("./helpers.js");
const CONSTS = require("../utils/consts.js");

const isProduction = process.env.NODE_ENV == "production";

const customImporter = function (url) {
  // This generates a stylesheet from scratch for `@use "big-headers"`.
  if (!url.includes("sweet-potato:") || !CONSTS.CONFIG.breakpoints) return null;

  let contents = "";

  for (let [key, value] of Object.entries(CONSTS.CONFIG.breakpoints)) {
    contents += `$${key}: "screen and ${value}";`;
  }

  return {
    contents,
  };
};

async function lint(file) {
  let result;

  try {
    result = await stylelint.lint({
      fix: true,
      files: file,
      syntax: "scss",
      formatter: stylelintFormatter,
      configFile: path.join(CONSTS.ROOT_DIRECTORY, ".stylelintrc.yaml"),
    });

    if (result.errored || result.maxWarningsExceeded) {
      spinners.add(`${file}-e`, {
        text: `Failed linting\n${file}\n${result.output}`,
        status: "non-spinnable",
      });
      return false;
    }

    if (result.results[0].warnings > 0) {
      spinners.add(`${file}-w`, {
        text: `Linting warnings\n${result.output}`,
        status: "non-spinnable",
      });
    }
  } catch (error) {
    spinners.add(`${file}-f`, {
      text: `Failed to lint\n${file}\n${error.message}`,
      status: "non-spinnable",
    });
    return false;
  }

  return result;
}

async function standardize(file) {
  // If we pass a file and it's outside website, we still need to lint and prettyfy
  const prettified = await helpers.prettify(file, { parser: "scss" });

  // we prettified the file and wrote it on disk again,
  // that will trigger another update for this file, not with proper coding style
  // so we skip it here at this moment, and compile it on the second trigger
  if (prettified === true) return false;

  const lintResult = await lint(file);
  if (lintResult === false) return false;

  return true;
}

async function styles(file) {
  if (file && !fse.pathExistsSync(file)) return; // if file for some reason got removed

  const mainSpinnerName = file ? file : "styles";
  if (!spinners.pick(mainSpinnerName))
    spinners.add(mainSpinnerName, { text: "Compiling styles", indent: 2 });

  // if it's a file com a component or someplace else we
  // need to compiled all dependencies
  if (file && !file.includes(CONSTS.PAGES_DIRECTORY)) {
    try {
      const inStandards = await standardize(file);
      // if it had linting issues we don't continue and let the
      // updates to the file trigger a new event
      if (!inStandards) return;

      // if it's all good, because we are outside the pages
      // directory, we want to compile everything again
      file = null;
    } catch (error) {
      spinners.fail(mainSpinnerName, {
        text: `Failed to standardize\n${file}\n${error.message}`,
      });
      return;
    }
  }

  let sassFiles = file
    ? [file]
    : await helpers.getFiles(path.join(CONSTS.PAGES_DIRECTORY, "**", "*.scss"));

  // gonna save all promises here to callback completion
  let promises = [];

  // go through files
  for (const file of sassFiles) {
    const inStandards = await standardize(file);
    if (!inStandards) continue;

    const fileInfo = path.parse(file);

    // if file starts with underscore, we ignore it, expected as standard 👍
    if (fileInfo.name.charAt(0) == "_") continue;

    // build the destination file
    let outFile = helpers.buildDest({
      ...fileInfo,
      ext: ".css",
    });

    let relativeOutput = path.relative(
      path.parse(outFile).dir,
      CONSTS.BUILD_DIRECTORY
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
            images_path: CONSTS.PUBLIC_DIRECTORY,
            http_images_path: relativeOutput,
          }),
          ...CONSTS.CONFIG.sassOptions(!isProduction, file),
        },
        async function (error, result) {
          if (error) {
            spinners.add(file, {
              text: `Failed to compile\n${outFile}\nLine ${error.line}:${error.column} ${error.message}`,
              status: "non-spinnable",
            });
            reject(error);
            return;
          }

          const finalCSS = result.css;

          try {
            // output the file
            await fse.outputFile(outFile, finalCSS);
            const data = await fse.readFile(outFile, "utf8");
            resolve({ destination: outFile, css: data });
          } catch (error) {
            spinners.add(file, {
              text: `Failed saving file${outFile}${error.message}`,
              status: "non-spinnable",
            });
            reject(error);
            return;
          }
        }
      );
    });

    promises.push(promise);
  }

  // done 🎉
  return Promise.all(promises).then((res) => {
    spinners.succeed(mainSpinnerName, { text: "Done compiling styles" });
    return res;
  });
}

module.exports = styles;
