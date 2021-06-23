#!/usr/bin/env node
// The purpose os this command is to compress all images on a given directory
// NOTE: This is destructive, it will overwrite the original file.
"use strict";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", (err) => {
  throw err;
});

process.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  process.exit(1);
});

const path = require("path");
const fse = require("fs-extra");
const yargs = require("yargs-parser");

const md5File = require("md5-file");
const { getFiles, config, logger } = require("@wethegit/sweet-potato-utensils");

const deepObjectKeysCheck = require("../lib/deepObjectKeysCheck");
const compressFile = require("../lib/compressFile");

const ISVERBOSE = config.OPTIONS.verbose;
const COMPRESSION_OPTIONS = config.OPTIONS.compress;

if (ISVERBOSE) {
  const pkg = require(path.join(__dirname, "..", "package.json"));

  logger.announce(`sweet-potato-masher v${pkg.version}`);
}

// consts
const ALLOWED_EXTENSIONS = "jpg,jpeg,png,svg,gif";

// set the directory to traverse
let { directory } = yargs(process.argv);
// if the user set a directory, we just resolve it
if (directory) directory = path.resolve(config.CWD, directory);
else directory = config.PUBLIC_DIRECTORY;

(async () => {
  // get all files from the directory
  const FILES = await getFiles(
    path.join(directory, "**", `*.{${ALLOWED_EXTENSIONS}}`)
  );

  // no files, end process
  if (FILES.length <= 0) {
    logger.announce(
      `No files with extensions ${ALLOWED_EXTENSIONS} were found at ${directory}.`
    );

    return;
  }

  // The cache file contains the MD5 hash of all files and config options
  // from the previously compression run
  const CACHE_FILE = path.join(config.CWD, "sweet-potato-masher.cache.json");
  let didOptionsChange = false;
  let previouslyCompressed = [];

  // if the cache files exists
  if (fse.pathExistsSync(CACHE_FILE)) {
    const { items = [], options = {} } = fse.readJsonSync(CACHE_FILE);

    // compare the options and check if they changed
    // because even if a file has already been compressed
    // the options (level of compression, etc) might have changed
    // and we need to compress it again
    didOptionsChange = deepObjectKeysCheck(COMPRESSION_OPTIONS, options);
    previouslyCompressed = items;
  }

  // if options on the config didn't change
  // we go through the files and check if
  // we don't already have all of them compressed and cached
  let toCompress = FILES;
  if (!didOptionsChange) {
    toCompress = FILES.filter(function (file) {
      const HASH = md5File.sync(file);

      if (!previouslyCompressed.includes(HASH)) return true;
    });

    if (toCompress.length <= 0) {
      logger.finish("All files already compressed");

      return;
    }
  }

  // Start compressing
  logger.start(
    `Compressing ${toCompress.length} file${toCompress.length > 1 && "s"}`
  );

  const COMPRESSED_FILES = await Promise.all(
    toCompress.map(function (file) {
      return compressFile(file, path.dirname(file), COMPRESSION_OPTIONS);
    })
  );

  let totalSavings = 0;
  let hashes = [];
  for (let compression of COMPRESSED_FILES) {
    const { percentage, hash } = compression;

    totalSavings += percentage;
    hashes.push(hash);

    if (ISVERBOSE) {
      const { file, before, after } = compression;

      const PRETTY_PATH = path.relative(config.CWD, file);

      logger.success([
        PRETTY_PATH,
        `${Math.floor(percentage)}% - ${before}kb | ${after}kb`,
      ]);
    }
  }

  await fse.outputJson(CACHE_FILE, {
    items: previouslyCompressed.concat(hashes),
    options: COMPRESSION_OPTIONS,
  });

  // done 🎉
  logger.finish(
    `\nFiles compressed: ${toCompress.length}\nTotal savings: ${Math.floor(
      totalSavings
    )}%`
  );
})();
