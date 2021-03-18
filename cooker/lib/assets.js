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

  if (fse.lstatSync(src).isDirectory()) {
    let dirs = fse
      .readdirSync(src)
      .map((name) => name)
      .filter((dir) => fse.lstatSync(path.join(src, dir)).isDirectory());

    for (let dir of dirs) {
      return copyRecursive(path.join(src, dir), path.join(dest, dir));
    }
  }
};

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
    return copyRecursive(from, to).then(() => {
      logger.finish("Ended assets transfer");
      return { from, to };
    });
  } catch (error) {
    logger.error("Failed to copy assets", error);
  }
}

module.exports = assets;
