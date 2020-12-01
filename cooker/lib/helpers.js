"use strict";

const glob = require("glob");
const fse = require("fs-extra");
const prettier = require("prettier");

// Locals
const logger = require("./logger.js");
const CONSTS = require("./consts.js");

// Helper function to simplify the process of prettifying a file
async function prettify(file, options) {
  try {
    const input = await fse.readFile(file, "utf8");
    const isPretty = await prettier.check(input, options);

    if (isPretty) return false;

    const output = await prettier.format(input, options);
    logger.announce([file, "Prettifying..."]);
    await fse.outputFile(file, output);

    return true;
  } catch (error) {
    logger.error([file, "Prettier failed"], error.message);
    return false;
  }
}

// This helper promisify the glob function as it still uses
// callback instead of promises, just pass a glob pattern to it
// and it will return a Promise that resolves to the glob result.
function getFiles(pattern, options = {}) {
  return new Promise(function(resolve, reject) {
    glob(pattern, options, function(err, files) {
      if (err) reject(err);

      resolve(files);
    });
  });
}

// This helper builds the final destination path for files
// For now, it simply removes the src/website/ path and adds
// the build/ path to files. If you need something more complex
// I would reccomend avoiding this function, don't tweak it, this is
// here to be used as a base for MOST compilers.
function buildDest(fileInfo, appendName = true) {
  let dest = `${CONSTS.BUILD_FOLDER}${fileInfo.dir}/`;
  dest = dest.replace(CONSTS.SOURCE_WEBSITE_FOLDER, ""); // remove src
  if (appendName) dest += `${fileInfo.name}${fileInfo.ext}`;

  return dest;
}

module.exports = {
  getFiles,
  buildDest,
  prettify
};
