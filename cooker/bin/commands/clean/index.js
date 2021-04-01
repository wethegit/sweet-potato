// The purpose os this command is to clean the build folder and cache folder
"use strict";

const spinners = require("../../../utils/spinners.js");
const clean = require("../../../lib/clean");

async function cleanCommand() {
  try {
    await clean(true);
  } catch (error) {
    process.exit(1);
  }
}

module.exports = cleanCommand;
