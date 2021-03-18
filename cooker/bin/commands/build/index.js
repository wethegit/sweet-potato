// The purpose os this command is generate a production build of the website
"use strict";

const logger = require("../../../utils/logger.js");

async function build(options) {
  // consts
  process.env.BABEL_ENV = "production";
  process.env.NODE_ENV = "production";

  // Makes the script crash on unhandled rejections instead of silently
  // ignoring them. In the future, promise rejections that are not handled will
  // terminate the Node.js process with a non-zero exit code.
  process.on("unhandledRejection", (err) => {
    throw err;
  });

  // Ensure environment variables are read.
  const { loadEnv } = require("../../../lib/env.js");

  loadEnv(options.env);

  // local imports
  const buildAll = require("../../../lib/build-all.js");

  try {
    await buildAll(process.env.NODE_ENV);
    logger.finish("Finished building.");
  } catch (error) {
    logger.error("Failed to build local files", error);
    process.exit(1);
  }
}

module.exports = build;
