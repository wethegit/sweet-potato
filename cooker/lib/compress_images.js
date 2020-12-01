// The purpose os this function is to copy and compress files
// inside the src/website/assets/ folder, it will ignore .scss and .js files
// as those will be compiled separately.
// While in development, it will just copy files, but in production it will
// compress the images first. Feel free to tweak the quality values in here.
"use strict";

const path = require("path");
const fse = require("fs-extra");

const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");
const imageminGifsicle = require("imagemin-gifsicle");

const md5File = require("md5-file");

// local imports
const CONSTS = require("./consts.js");
const logger = require("./logger.js");
const helpers = require("./helpers.js");

// consts
const toCompress = [".jpg", ".jpeg", ".png", ".svg"];

// The cache file that shows what images have already been compressed and records their current size
const images = fse.pathExistsSync("./images.json")
  ? fse.readJsonSync("./images.json")
  : {};

let totalSavings = 0;
const imageminCompression = async (file, outFile, fileInfo) => {
  const stats = fse.statSync(file);
  const fileSizeInBytes = stats["size"];
  const fileSizeInKb = Math.floor(fileSizeInBytes / 1000);

  // If a record exists in the images cache and the difference in file sizes is less than a KB, just resolve straight away
  // Don't recompress
  if (images[`${outFile}${fileInfo.base}`]) {
    const hash = md5File.sync(file);
    if (hash === images[`${outFile}${fileInfo.base}`]) {
      logger.announce([`${outFile}${fileInfo.base} was not compressed`]);
    }
  } else {
    await imagemin([file], {
      destination: outFile,
      plugins: [
        imageminMozjpeg({
          quality: 70,
        }),
        imageminPngquant({
          quality: [0.65, 0.95],
          speed: 1,
        }),
        imageminGifsicle(),
        imageminSvgo({
          plugins: [{ removeViewBox: false }],
          multipass: true,
        }),
      ],
    });
    const outStats = fse.statSync(`${outFile}/${fileInfo.base}`);
    const outFileSizeInBytes = outStats["size"];
    const outFileSizeInKb = Math.floor(outFileSizeInBytes / 1000);
    const savings =
      ((fileSizeInBytes - outFileSizeInBytes) / fileSizeInBytes) * 100;
    const hash = md5File.sync(file);

    images[`${outFile}${fileInfo.base}`] = hash;
    totalSavings += savings;

    logger.success([
      `${outFile}${fileInfo.base}`,
      `Compressed ${Math.floor(savings)}%`,
      `${fileSizeInKb}kb | ${outFileSizeInKb}kb`,
    ]);
  }
};

async function compress(event, file) {
  if (file && !fse.pathExistsSync(file)) return; // if file for some reason got removed

  logger.start("Started assets compression");

  // if a file is passed use it instead of querying for all
  let assets = file
    ? [file]
    : await helpers.getFiles(
        `${CONSTS.SOURCE_WEBSITE_ASSETS_FOLDER}/**/!(css|js)/*`
      );

  // gonna save all promises here to callback completion
  let promises = [];

  // go through files
  for (const file of assets) {
    const fileInfo = path.parse(file);

    // If the file is an image, compress it.
    if (toCompress.indexOf(fileInfo.ext) > -1) {
      promises.push(imageminCompression(file, path.dirname(file), fileInfo));
    }
  }

  await Promise.all(promises);

  fse.writeJsonSync("./images.json", images);

  // done 🎉
  logger.success([
    "Finished compressing all images.",
    `Total compressed ${Math.floor(totalSavings)}%`,
  ]);
}

compress();
