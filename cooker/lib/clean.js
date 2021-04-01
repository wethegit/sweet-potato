// This is as simple as it looks, it deletes the build/ folder so we don't get leftovers
"use strict";

// Imports
const fse = require("fs-extra");
const spinners = require("../utils/spinners.js");

// Locals
const CONSTS = require("../utils/consts.js");

async function clean(shouldDeleteCache = false) {
  let promises = [];

  spinners.add("clean-build", { text: "Deleting build directory", indent: 2 });

  promises.push(
    fse.remove(CONSTS.BUILD_DIRECTORY).then(() => {
      spinners.succeed("clean-build", {
        text: "Done deleting build directory",
      });
    })
  );

  if (shouldDeleteCache) {
    spinners.add("clean-cache", {
      text: "Deleting build directory",
      indent: 2,
    });

    promises.push(
      fse.remove(CONSTS.CACHE_DIRECTORY).then(() => {
        spinners.succeed("clean-cache", {
          text: "Done deleting cache directory",
        });
      })
    );
  }

  return promises;
}

module.exports = clean;
