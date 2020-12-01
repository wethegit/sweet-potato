// The purpose of this function is to copy files
// Compression should be done separately by running npm run compress
"use strict";

const path = require("path");
const fse = require("fs-extra");

// local imports
const CONSTS = require("./consts.js");
const logger = require("./logger.js");
const helpers = require("./helpers.js");

async function assets(event, file) {
  if (file && !fse.pathExistsSync(file)) return; // if file for some reason got removed

  logger.start("Started assets transfer");

  // if a file is passed use it instead of querying for all
  let assets = file
    ? [file]
    : await helpers.getFiles(
        `${CONSTS.SOURCE_WEBSITE_ASSETS_FOLDER}/{*,!(css|js)**/**}`,
        {
          nodir: true
        }
      );

  // gonna save all promises here to callback completion
  let promises = [];
  let filesList = [];

  // go through files
  for (const file of assets) {
    const fileInfo = path.parse(file);

    let outFile = helpers.buildDest({
      ...fileInfo
    });

    try {
      promises.push(fse.copy(file, outFile, { preserveTimestamps: true }));
      filesList.push(outFile);
    } catch (error) {
      logger.error([outFile, "Failed to be copied"], error);
    }
  }

  // done 🎉
  return Promise.all(promises).then(all => {
    for (let i = 0; i < all.length; i++) {
      logger.success([filesList[i], "Copied"]);
    }

    logger.finish("Ended assets transfer");
  });
}

module.exports = assets;
