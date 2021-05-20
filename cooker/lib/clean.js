// This is as simple as it looks, it deletes the build/ and .cache directories so we don't get leftovers
"use strict";

// Imports
const fse = require("fs-extra");
const path = require("path");
const { config, logger } = require("@wethegit/sweet-potato-utensils");

async function clean(shouldDeleteCache = false) {
  let promises = [];

  logger.start(`Cleaning output directories`);

  // deletes build/
  promises.push(
    fse.remove(config.BUILD_DIRECTORY).then(() => {
      logger.success(
        `Cleaned build directory`,
        path.relative(config.CWD, config.BUILD_DIRECTORY)
      );
    })
  );

  if (shouldDeleteCache) {
    // deletes .cache
    promises.push(
      fse.remove(config.CACHE_DIRECTORY).then(() => {
        logger.success(
          `Cleaned cache directory`,
          path.relative(config.CWD, config.CACHE_DIRECTORY)
        );
      })
    );
  }

  return Promise.all(promises).then(() => {
    logger.finish("Cleaning output directories");
  });
}

module.exports = clean;
