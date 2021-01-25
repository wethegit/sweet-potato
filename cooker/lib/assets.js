// The purpose of this function is to copy files
// Compression should be done separately by running npm run compress
"use strict";

const fse = require("fs-extra");
const path = require("path");

// local imports
const CONSTS = require("../utils/consts.js");
const logger = require("../utils/logger.js");

const copyRecursive = async function (src, dest) {
  await fse.copy(src, dest);

  if (fse.lstatSync(src).isDirectory())
    fse
      .readdirSync(src)
      .map((name) => name)
      .filter((dir) => fse.lstatSync(path.join(src, dir)).isDirectory())
      .forEach((dir) => {
        copyRecursive(path.join(src, dir), path.join(dest, dir));
      });
};

async function assets(event, file) {
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
    await copyRecursive(from, to);
    logger.finish("Ended assets transfer");
  } catch (error) {
    logger.error("Failed to copy assets", error);
  }
}

module.exports = assets;
