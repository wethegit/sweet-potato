// The purpose os this command is to clean the build folder and cache folder
"use strict";

const logger = require("../../../utils/logger.js");

async function clean() {
  try {
    await Promise.all([clean(), fse.remove(CONSTS.CACHE_DIRECTORY)]);
    logger.finish("Finished deleting all files.");
  } catch (error) {
    logger.error("Failed to clean folders", error);
    process.exit(1);
  }
}

module.exports = clean;
