"use strict";

const path = require("path");
const glob = require("glob");
const fse = require("fs-extra");
const prettier = require("prettier");

// Locals
const logger = require("./logger.js");
const CONSTS = require("../utils/consts.js");

// Helper function to simplify the process of prettifying a file
async function prettify(file, options) {
  try {
    const input = await fse.readFile(file, "utf8");
    const isPretty = prettier.check(input, options);

    if (isPretty) return false;

    const output = prettier.format(input, options);
    logger.announce([file, "Prettifying..."]);
    await fse.outputFile(file, output);

    return true;
  } catch (error) {
    logger.error([file, "Prettier failed"], error);
    return false;
  }
}

// This helper promisify the glob function as it still uses
// callback instead of promises, just pass a glob pattern to it
// and it will return a Promise that resolves to the glob result.
async function getFiles(pattern, options = {}) {
  const patterns = !(pattern instanceof Array) ? [pattern] : pattern;

  const allFiles = await Promise.all(
    patterns.map(
      (pattern) =>
        new Promise(function (resolve, reject) {
          glob(pattern, options, function (err, files) {
            if (err) reject(err);

            resolve(files);
          });
        })
    )
  );

  return allFiles.flat();
}

// This helper builds the final destination path for files
// For now, it simply removes the src/website/ path and adds
// the build/ path to files. If you need something more complex
// I would reccomend avoiding this function, don't tweak it, this is
// here to be used as a base for MOST compilers.
function buildDest(fileInfo, appendName = true) {
  let dest = fileInfo.dir.replace(CONSTS.PAGES_FOLDER, CONSTS.BUILD_FOLDER);
  if (appendName) dest = path.join(dest, `${fileInfo.name}${fileInfo.ext}`);

  return dest;
}

module.exports = {
  getFiles,
  buildDest,
  prettify,
};
