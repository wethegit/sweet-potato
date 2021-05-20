// The purpose of this function is to copy files
// Compression should be done separately
"use strict";

const fse = require("fs-extra");
const path = require("path");
const { config, logger } = require("@wethegit/sweet-potato-utensils");

/**
 * assets
 *
 * Copy on or many files to the build directory
 *
 * @param {string} file
 * @returns {Promise} Resolves to object with to,from information
 */
async function assets(file) {
  if (file && !fse.pathExistsSync(file)) return;

  let from = config.PUBLIC_DIRECTORY;
  let to = config.BUILD_DIRECTORY;

  if (file) {
    const fileInfo = path.parse(file);

    from = file;
    to = path.join(config.BUILD_DIRECTORY, fileInfo.base);
  }

  if (!fse.pathExistsSync(from)) return;

  logger.start("Copying assets");
  logger.announce(
    `Copying assets from: ${path.relative(
      config.CWD,
      from
    )} -> to: ${path.relative(config.CWD, to)}`
  );

  try {
    fse.ensureDirSync(config.BUILD_DIRECTORY);

    return fse
      .copy(from, to, { overwrite: true, preserveTimestamps: true })
      .then(() => {
        logger.finish("Done copying assets");
        return { from, to };
      });
  } catch (error) {
    logger.error("Failed to copy assets", error);
  }
}

module.exports = assets;
