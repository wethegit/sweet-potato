// This file makes sure that the environment variables are set
// to development and run the functions to build a local version
// of the website, it then sets the watch function to watch for changes
// and also fires a local server.
"use strict";

async function start() {
  // Do this as the first thing so that any code reading it knows the right env.
  process.env.BABEL_ENV = "development";
  process.env.NODE_ENV = "development";

  // Makes the script crash on unhandled rejections instead of silently
  // ignoring them. In the future, promise rejections that are not handled will
  // terminate the Node.js process with a non-zero exit code.
  process.on("unhandledRejection", (err) => {
    throw err;
  });

  // Ensure environment variables are read.
  require("../../../lib/env.js");

  const liveServer = require("live-server");
  const watch = require("../../../lib/watch.js");
  const CONSTS = require("../../../utils/consts.js");
  const logger = require("../../../lib/logger.js");
  const {
    assetsMiddleware,
    assetsLogger,
  } = require("../../../lib/assets-logger-middleware.js");

  // local imports
  const buildAll = require("../../../lib/build-all.js");

  try {
    await buildAll();
  } catch (error) {
    logger.error("Failed to build local files", error);
    process.exit();
  }

  watch();

  process.on("SIGINT", async function () {
    await assetsLogger();
    process.exit();
  });

  liveServer.start({
    root: CONSTS.BUILD_FOLDER,
    wait: 1000,
    logLevel: 1,
    middleware: [assetsMiddleware],
    host: "localhost",
    port: 8080,
  });
}

module.exports = start;
