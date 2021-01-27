// The main purpose of this function is to transpile our
// ES6 JS files with babel and webpack. It will also generate
// a extra file for older browsers that don't support modules,
// it will be suffixed with .es5.
"use strict";

const path = require("path");
const fse = require("fs-extra");
const esbuild = require("esbuild");

// local imports
const helpers = require("./helpers.js");
const getClientEnvironment = require("./env.js");
const logger = require("../utils/logger.js");
const CONSTS = require("../utils/consts.js");

// local consts
const env = getClientEnvironment();
const isProduction = process.env.NODE_ENV == "production";

async function javascripts(event, file) {
  if (event && event === "add") return; // don't do anything for newly added files just yet

  if (file && !fse.pathExistsSync(file)) return; // if file for some reason got removed

  logger.start("Started javascripts bundling");

  // If we pass a file and it's outside website, we still need to prettify
  if (file && !file.includes(CONSTS.PAGES_DIRECTORY)) {
    const prettified = await helpers.prettify(file, { parser: "babel" });

    // if it had linting issues we don't continue and let the
    // updates to the file trigger a new event
    if (prettified === true) return;

    file = null;
  }

  let jsFiles = file
    ? [file]
    : await helpers.getFiles(path.join(CONSTS.PAGES_DIRECTORY, "**", "*.js"));

  if (jsFiles.length <= 0) return;

  let promises = [];
  let service = await esbuild.startService();
  try {
    for (let file of jsFiles) {
      const prettified = await helpers.prettify(file, { parser: "babel" });
      // we prettified the file and wrote it on disk again,
      // that will trigger another update for this file, not with proper coding style
      // so we skip it here at this moment, and compile it on the second trigger
      if (prettified === true) continue;

      const fileInfo = path.parse(file);

      const DEST = path.join(
        CONSTS.BUILD_DIRECTORY,
        fileInfo.dir.replace(CONSTS.PAGES_DIRECTORY, ""),
        fileInfo.base
      );

      promises.push(
        service
          .build({
            entryPoints: [file],
            bundle: true,
            outfile: DEST,
            minify: isProduction,
            sourcemap: !isProduction,
            target: ["esnext"],
            format: "esm",
          })
          .then(() => logger.success([DEST, "Bundled"]))
      );
    }
  } catch (error) {
    logger.error("Failed to save bundle javascript file", error);
  }

  // create promise and render both versions of file
  return Promise.all(promises).then(() => {
    // done 🎉
    service.stop();
    logger.finish("Ended javascript bundling");
  });
}

module.exports = javascripts;
