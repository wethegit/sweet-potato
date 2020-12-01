// This file makes sure that the environment variables are set
// to production and run the functions to build our beautiful creation
"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

// Ensure environment variables are read.
require("./env.js");

// local imports
const logger = require("./logger.js");
const buildAll = require("./build-all.js");

(async function() {
  try {
    buildAll();
  } catch (error) {
    logger.error("Failed to make a production build", error);
    process.exit();
  }
})();
