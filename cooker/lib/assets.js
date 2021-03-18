// The purpose of this function is to copy files
// Compression should be done separately by running npm run compress
"use strict";

const fse = require("fs-extra");
const path = require("path");

// local imports
const CONSTS = require("../utils/consts.js");
const logger = require("../utils/logger.js");

async function assets(file) {
  if (file && !fse.pathExistsSync(file)) return; // if file for some reason got removed

  logger.start("Started assets transfer");

  let from = CONSTS.PUBLIC_DIRECTORY;
  let to = CONSTS.BUILD_DIRECTORY;

  if (file) {
    const fileInfo = path.parse(file);

    from = file;
    to = path.join(CONSTS.BUILD_DIRECTORY, fileInfo.base);
  }

  if (!fse.pathExistsSync(from)) return;

  try {
    return fse.copy(from, to).then(() => {
      logger.finish("Ended assets transfer");
      return { from, to };
    });
  } catch (error) {
    logger.error("Failed to copy assets", error);
  }
}

module.exports = assets;
