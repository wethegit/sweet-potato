// This is as simple as it looks, it deletes the build/ folder so we don't get leftovers
"use strict";

// Imports
const fse = require("fs-extra");
const spinners = require("../utils/spinners.js");

// Locals
const CONSTS = require("../utils/consts.js");

async function clean(shouldDeleteCache = false) {
  let promises = [];

  spinners.add("clean", { text: "Cleaning project destination", indent: 2 });

  spinners.add("clean-build", {
    text: "Deleting build directory",
    indent: 4,
  });

  promises.push(
    fse.remove(CONSTS.BUILD_DIRECTORY).then(() => {
      spinners.succeed("clean-build", {
        text: "Done deleting build directory",
      });
    })
  );

  if (shouldDeleteCache) {
    spinners.add("clean-cache", {
      text: "Deleting cache directory",
      indent: 4,
    });

    promises.push(
      fse.remove(CONSTS.CACHE_DIRECTORY).then(() => {
        spinners.succeed("clean-cache", {
          text: "Done deleting cache directory",
        });
      })
    );
  }

  return Promise.all(promises).then(() => {
    spinners.succeed("clean", {
      text: "Done cleaning project destination",
    });
  });
}

module.exports = clean;
