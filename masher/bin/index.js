#!/usr/bin/env node
// The purpose os this command is to compress all images on a given directory
// NOTE: This is destructive, it will overwrite the original file.
"use strict";

const deepObjectKeysCheck = function (origin, toCompare) {
  let didOriginChange = false;
  const originKeys = Object.keys(origin);

  for (let i = 0; i < originKeys.length; i++) {
    const key = originKeys[i];
    const originValue = origin[key];
    const compareValue = toCompare[key];

    if (originValue instanceof Object && compareValue instanceof Object) {
      didOriginChange = deepObjectKeysCheck(originValue, compareValue);
    } else if (origin[key] !== toCompare[key]) {
      didOriginChange = true;
    }

    if (didOriginChange) break;
  }

  return didOriginChange;
};

(async () => {
  // Makes the script crash on unhandled rejections instead of silently
  // ignoring them. In the future, promise rejections that are not handled will
  // terminate the Node.js process with a non-zero exit code.
  process.on("unhandledRejection", (err) => {
    throw err;
  });

  process.on("SIGINT", function () {
    console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
    // some other closing procedures go here
    process.exit(1);
  });

  const path = require("path");
  const fse = require("fs-extra");
  const yargs = require("yargs-parser");
  const imagemin = require("imagemin");
  const imageminMozjpeg = require("imagemin-mozjpeg");
  const imageminPngquant = require("imagemin-pngquant");
  const imageminSvgo = require("imagemin-svgo");
  const imageminGifsicle = require("imagemin-gifsicle");
  const md5File = require("md5-file");
  const {
    getFiles,
    config,
    logger,
  } = require("@wethegit/sweet-potato-utensils");
  const pkg = require(path.join(__dirname, "..", "package.json"));

  if (config.OPTIONS.verbose)
    logger.announce(`sweet-potato-masher v${pkg.version}`);

  // consts
  const ALLOWED_EXTENSIONS = ".jpg, .jpeg, .png, .svg, .gif";

  // set the directory to traverse
  let { directory } = yargs(process.argv);
  if (directory) directory = path.join(config.CWD, directory);
  else directory = config.PUBLIC_DIRECTORY;
  directory = path.join(directory, "**", `*{${ALLOWED_EXTENSIONS}}`);

  // get all assets from directory
  const ASSETS = await getFiles(directory);
  const TOTAL_ASSETS = ASSETS.length;

  if (TOTAL_ASSETS <= 0) {
    logger.announce(
      `No files with extensions ${ALLOWED_EXTENSIONS} were found at ${directory}.`
    );

    process.exit(1);
  }

  // The cache file that shows what images have already been compressed and records their current size, it needs to be added to git
  const CACHE_FILE = path.join(config.CWD, "sweet-potato-masher.cache.json");
  let DID_OPTIONS_CHANGE = false;
  let COMPRESSED = [];

  if (fse.pathExistsSync(CACHE_FILE)) {
    const { items = [], options = {} } = fse.readJsonSync(CACHE_FILE);
    DID_OPTIONS_CHANGE = deepObjectKeysCheck(config.OPTIONS.compress, options);
    COMPRESSED = items;
  }

  let totalSavings = 0;
  let totalFilesCompressed = 0;
  const compressFile = async (file, outFile) => {
    const fileInfo = path.parse(file);
    const stats = fse.statSync(file);
    const fileSizeInBytes = stats["size"];
    const fileSizeInKb = Math.floor(fileSizeInBytes / 1000);
    let ID = md5File.sync(file);
    const PRETTY_PATH = fileInfo.dir.replace(config.CWD, "") + fileInfo.base;
    const COMPRESSION_OPTIONS = config.OPTIONS.compress;

    // If a record exists in the images cache and the difference in file sizes is less than a KB, just resolve straight away
    // Don't recompress
    if (COMPRESSED.includes(ID) && !DID_OPTIONS_CHANGE) {
      logger.announce(["Already optmized", PRETTY_PATH, `${fileSizeInKb}kb`]);
      return;
    }

    totalFilesCompressed++;

    await imagemin([file], {
      destination: outFile,
      plugins: [
        imageminMozjpeg(COMPRESSION_OPTIONS.imageminMozjpeg),
        imageminPngquant(COMPRESSION_OPTIONS.imageminPngquant),
        imageminGifsicle(COMPRESSION_OPTIONS.imageminGifsicle),
        imageminSvgo(COMPRESSION_OPTIONS.imageminSvgo),
      ],
    });

    const out = path.join(outFile, fileInfo.base);
    const outStats = fse.statSync(out);
    const outFileSizeInBytes = outStats["size"];
    const outFileSizeInKb = Math.floor(outFileSizeInBytes / 1000);
    const savings =
      ((fileSizeInBytes - outFileSizeInBytes) / fileSizeInBytes) * 100;

    ID = md5File.sync(out);
    COMPRESSED.push(ID);
    totalSavings += savings;

    if (config.OPTIONS.verbose)
      logger.success([
        PRETTY_PATH,
        `${Math.floor(savings)}% - ${fileSizeInKb}kb | ${outFileSizeInKb}kb`,
      ]);
  };

  // Start compressing
  logger.start(`Compressing ${TOTAL_ASSETS} file${TOTAL_ASSETS > 1 && "s"}`);

  // go through files and compress each, adding to the array of promises
  const PROMISES = ASSETS.map(function (file) {
    return compressFile(file, path.dirname(file));
  });

  await Promise.all(PROMISES);

  await fse.outputJson(CACHE_FILE, {
    items: COMPRESSED,
    options: config.OPTIONS.compress,
  });

  // done 🎉
  if (totalFilesCompressed > 0)
    logger.finish(
      `\nFiles compressed: ${totalFilesCompressed}\nTotal savings: ${Math.floor(
        totalSavings
      )}%\nFiles skipped: ${TOTAL_ASSETS - totalFilesCompressed}`
    );
  else logger.finish(`All files previously compressed`);
})();
