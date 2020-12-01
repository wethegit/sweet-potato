// This file run the functions to build a local version of the website
"use strict";

// consts
const env = process.argv[2] ? process.argv[2] : "development";

// Do this as the first thing so that any code reading it knows the right env.
const processEnv =
  env === "wtcdev" ? "development" : env === "wtcpub" ? "production" : env;
process.env.WTC_ENV = env === "wtcdev" || env === "wtcpub" ? env : processEnv;
process.env.BABEL_ENV = processEnv;
process.env.NODE_ENV = processEnv;

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

// local imports
const buildAll = require("./build-all.js");

try {
  buildAll();
} catch (error) {
  logger.error("Failed to build local files", error);
  process.exit();
}
