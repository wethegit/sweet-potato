// The main purpose of this function is to transpile our
// ES6 JS files with babel and webpack. It will also generate
// a extra file for older browsers that don't support modules,
// it will be suffixed with .es5.
"use strict";

const path = require("path");
const fse = require("fs-extra");
const esbuild = require("esbuild");
const { config, logger, getFiles } = require("@wethegit/sweet-potato-utensils");

// local imports
const { getClientEnvironment } = require("./env.js");

// local consts
const env = getClientEnvironment();
const isProduction = process.env.NODE_ENV == "production";

/**
 * javascripts
 *
 * @param {string} file - Path to a js file
 *
 * @returns {promise} - Resolves to array of objects with the file information
 */
async function javascripts(file) {
  if (
    file &&
    (!fse.pathExistsSync(file) || !file.includes(config.PAGES_DIRECTORY))
  )
    return; // if file for some reason got removed


  let jsFiles = file
    ? [file]
    : await getFiles(path.join(config.PAGES_DIRECTORY, "**", "*.js"));

  if (jsFiles.length <= 0) return;

  logger.start("Generating scripts");

  let promises = [];
  let service = await esbuild.startService();

  for (let file of jsFiles) {
    const fileInfo = path.parse(file);

    // Continue if we're working in a data folder
    if (fileInfo.dir.split("/").pop() === '_data') continue;

    // build dest path
    const DEST = path.join(
      config.BUILD_DIRECTORY,
      fileInfo.dir.replace(config.PAGES_DIRECTORY, ""),
      fileInfo.base
    );

    // get relative paths so we can pass as env
    let DEFINE_VALUES = {
      "process.env.BREAKPOINTS": JSON.stringify(config.OPTIONS.breakpoints || {}),
      "process.env.RELATIVE_ROOT": `"${path.relative(
        DEST,
        config.BUILD_DIRECTORY
      )}"`,
    };

    // set all env variables
    for (const [key, value] of Object.entries(env.raw)) {
      DEFINE_VALUES[`process.env.${key}`] =
        typeof value === "string" ? `"${value}"` : value;
    }

    promises.push(
      service
        .build({
          entryPoints: [file],
          bundle: true,
          outfile: DEST,
          minify: isProduction,
          sourcemap: !isProduction ? "inline" : false,
          target: ["es2020"],
          format: "esm",
          define: DEFINE_VALUES,
        })
        .then(() => {
          logger.success([
            `Compiled`,
            path.relative(config.CWD, file),
            path.relative(config.CWD, DEST),
          ]);

          return fse.readFile(DEST, "utf8");
        })
        .then((data) => {
          return { destination: DEST, js: data };
        })
        .catch((err) => {
          logger.error([`Failed to bundle`, file], err);
        })
    );
  }

  // create promise and render both versions of file
  return Promise.all(promises).then((res) => {
    // done 🎉
    service.stop();
    logger.finish("Generating scripts");
    return res;
  });
}

module.exports = javascripts;
