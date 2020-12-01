// This is as simple as it looks, it deletes the build/ folder so we don't get leftovers
"use strict";

// Imports
const del = require("del");

// Locals
const CONSTS = require("./consts.js");

async function clean() {
  return await del(CONSTS.BUILD_FOLDER);
}

module.exports = clean;
