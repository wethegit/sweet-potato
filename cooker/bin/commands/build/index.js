// This file run the functions to build a local version of the website
"use strict";

function build() {
  // consts
  process.env.BABEL_ENV = "production";
  process.env.NODE_ENV = "production";

  // Makes the script crash on unhandled rejections instead of silently
  // ignoring them. In the future, promise rejections that are not handled will
  // terminate the Node.js process with a non-zero exit code.
  process.on("unhandledRejection", (err) => {
    throw err;
  });

  // local imports
  const buildAll = require("../../../lib/build-all.js");

  try {
    buildAll();
  } catch (error) {
    logger.error("Failed to build local files", error);
    process.exit();
  }
}

module.exports = build;
