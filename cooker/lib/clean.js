// This is as simple as it looks, it deletes the build/ folder so we don't get leftovers
"use strict";

// Imports
const fse = require("fs-extra");

// Locals
const CONSTS = require("../utils/consts.js");

async function clean() {
  return fse.remove(CONSTS.BUILD_DIRECTORY);
}

module.exports = clean;
