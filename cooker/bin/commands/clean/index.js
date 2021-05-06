// The purpose os this command is to clean the build folder and cache folder
"use strict";

async function cleanCommand(options) {
  const clean = require("../../../lib/clean.js");

  try {
    await clean(options.cache);
  } catch (error) {
    process.exit(1);
  }
}

module.exports = cleanCommand;
