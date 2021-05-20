// The purpose os this command is to clean the build folder and cache folder
"use strict";

async function cleanCommand(options) {
  process.on("unhandledRejection", (err) => {
    throw err;
  });

  process.on("SIGINT", function () {
    console.log(` `);
    console.log("Gracefully shutting down from SIGINT (Ctrl-C)");
    process.exit(0);
  });

  const clean = require("../../../lib/clean.js");

  try {
    await clean(options.cache);
  } catch (error) {
    process.exit(0);
  }
}

module.exports = cleanCommand;
