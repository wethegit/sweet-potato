// The purpose of this function is to copy files
// Compression should be done separately by running npm run compress
"use strict";

const fse = require("fs-extra");
const path = require("path");

// local imports
const CONSTS = require("../utils/consts.js");
const logger = require("./logger.js");

async function assets(event, file) {
  if (file && !fse.pathExistsSync(file)) return; // if file for some reason got removed

  logger.start("Started assets transfer");

  let from = CONSTS.PUBLIC_FOLDER;
  let to = CONSTS.BUILD_FOLDER;

  if (file) {
    const fileInfo = path.parse(file);

    from = file;
    to = path.join(CONSTS.BUILD_FOLDER, fileInfo.base);
  }

  // if a file is passed use it instead of querying for all
  return fse
    .copy(from, to)
    .then(() => {
      logger.finish("Ended assets transfer");
    })
    .catch((error) => {
      logger.error("Failed to copy assets", error);
    });
}

module.exports = assets;
