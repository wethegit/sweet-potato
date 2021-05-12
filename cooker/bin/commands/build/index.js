// The purpose os this command is generate a production build of the website
"use strict";

async function buildCommand(options) {
  // consts
  process.env.BABEL_ENV = "production";
  process.env.NODE_ENV = "production";

  // Makes the script crash on unhandled rejections instead of silently
  // ignoring them. In the future, promise rejections that are not handled will
  // terminate the Node.js process with a non-zero exit code.
  process.on("unhandledRejection", (err) => {
    throw err;
  });

  process.on("SIGINT", function () {
    console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
    // some other closing procedures go here
    process.exit(1);
  });

  // Ensure environment variables are read.
  const { loadEnv } = require("../../../lib/env.js");

  loadEnv(options.env);

  // local imports
  const buildAll = require("../../../lib/build-all.js");
  const clean = require("../../../lib/clean.js");

  try {
    await clean(true);
    await buildAll();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = buildCommand;
