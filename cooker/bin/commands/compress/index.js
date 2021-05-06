// The purpose os this command is to compress all images on a given directory
// NOTE: This is destructive, it will overwrite the original file.
"use strict";

async function compressCommand(options) {
  // Makes the script crash on unhandled rejections instead of silently
  // ignoring them. In the future, promise rejections that are not handled will
  // terminate the Node.js process with a non-zero exit code.
  process.on("unhandledRejection", (err) => {
    throw err;
  });

  const path = require("path");
  const fse = require("fs-extra");

  const imagemin = require("imagemin");
  const imageminMozjpeg = require("imagemin-mozjpeg");
  const imageminPngquant = require("imagemin-pngquant");
  const imageminSvgo = require("imagemin-svgo");
  const imageminGifsicle = require("imagemin-gifsicle");

  const md5File = require("md5-file");

  // local imports
  const spinners = require("../../../utils/spinners.js");
  const CONSTS = require("../../../utils/consts.js");
  const helpers = require("../../../lib/helpers.js");

  // consts
  const toCompress = [".jpg", ".jpeg", ".png", ".svg", ".gif"];

  // The cache file that shows what images have already been compressed and records their current size
  const CACHE_FILE = path.join(CONSTS.CWD, "sweet-potato-compression.cache.json");
  const images = fse.pathExistsSync(CACHE_FILE)
    ? fse.readJsonSync(CACHE_FILE)
    : {};

  let totalSavings = 0;
  const compressFile = async (file, outFile, fileInfo) => {
    const stats = fse.statSync(file);
    const fileSizeInBytes = stats["size"];
    const fileSizeInKb = Math.floor(fileSizeInBytes / 1000);
    const ID = `${outFile}${fileInfo.base}`;

    // If a record exists in the images cache and the difference in file sizes is less than a KB, just resolve straight away
    // Don't recompress
    if (images[ID]) {
      const hash = md5File.sync(file);
      if (hash === images[ID]) return;
    }

    const COMPRESSION_OPTIONS = CONSTS.CONFIG.compress;

    spinners.add(`compress-${ID}`, {
      text: `Compressing ${file}`,
      indent: 2,
    });

    await imagemin([file], {
      destination: outFile,
      plugins: [
        imageminMozjpeg(COMPRESSION_OPTIONS.imageminMozjpeg),
        imageminPngquant(COMPRESSION_OPTIONS.imageminPngquant),
        imageminGifsicle(COMPRESSION_OPTIONS.imageminGifsicle),
        imageminSvgo(COMPRESSION_OPTIONS.imageminSvgo),
      ],
    });

    const outStats = fse.statSync(path.join(outFile, fileInfo.base));
    const outFileSizeInBytes = outStats["size"];
    const outFileSizeInKb = Math.floor(outFileSizeInBytes / 1000);
    const savings =
      ((fileSizeInBytes - outFileSizeInBytes) / fileSizeInBytes) * 100;
    const hash = md5File.sync(file);

    images[ID] = hash;
    totalSavings += savings;

    spinners.succeed(`compress-${ID}`, {
      text: `Compressed ${file}\n${Math.floor(
        savings
      )}% - ${fileSizeInKb}kb | ${outFileSizeInKb}kb`,
      indent: 2,
    });
  };

  spinners.add("compress", { text: "Compressing assets" });

  // if a file is passed use it instead of querying for all
  const ASSETS = await helpers.getFiles(
    options["directory"]
      ? path.join(CONSTS.CWD, options["directory"], "**", "*")
      : path.join(CONSTS.PUBLIC_DIRECTORY, "**", "*")
  );

  // save all promises here to callback completion
  let promises = [];

  // go through files
  for (const file of ASSETS) {
    const fileInfo = path.parse(file);

    // If the file is an image, compress it.
    if (toCompress.indexOf(fileInfo.ext) > -1)
      promises.push(compressFile(file, path.dirname(file), fileInfo));
  }

  await Promise.all(promises);

  fse.outputJsonSync(CACHE_FILE, images);

  // done 🎉
  spinners.succeed("compress", {
    text: `Done compressing assets\nTotal compressed: ${Math.floor(
      totalSavings
    )}%`,
  });
}

module.exports = compressCommand;
