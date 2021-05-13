// This is as simple as it looks, it deletes the build/ folder so we don't get leftovers
"use strict";

// Imports
const fse = require("fs-extra");
const spinners = require("../utils/spinners.js");

// Locals
const CONSTS = require("../utils/consts.js");
const logger = require("../utils/logger");

const ISVERBOSE = CONSTS.CONFIG.verbose;

async function clean(shouldDeleteCache = false) {
  let promises = [];

  if (ISVERBOSE) logger.start("Cleaning project destination");
  else
    spinners.add("clean", { text: "Cleaning project destination", indent: 2 });

  if (ISVERBOSE) logger.start("Deleting build directory");
  else
    spinners.add("clean-build", {
      text: "Deleting build directory",
      indent: 4,
    });

  promises.push(
    fse.remove(CONSTS.BUILD_DIRECTORY).then(() => {
      if (ISVERBOSE) logger.success("Done deleting build directory");
      else
        spinners.succeed("clean-build", {
          text: "Done deleting build directory",
        });
    })
  );

  if (shouldDeleteCache) {
    if (ISVERBOSE) logger.start("Deleting cache directory");
    else
      spinners.add("clean-cache", {
        text: "Deleting cache directory",
        indent: 4,
      });

    promises.push(
      fse.remove(CONSTS.CACHE_DIRECTORY).then(() => {
        if (ISVERBOSE) logger.success("Done deleting cache directory");
        else
          spinners.succeed("clean-cache", {
            text: "Done deleting cache directory",
          });
      })
    );
  }

  return Promise.all(promises).then(() => {
    if (ISVERBOSE) logger.finish("Done cleaning project destination");
    else
      spinners.succeed("clean", {
        text: "Done cleaning project destination",
      });
  });
}

module.exports = clean;
