const path = require("path");
const fse = require("fs-extra");
const md5File = require("md5-file");
const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");
const imageminGifsicle = require("imagemin-gifsicle");

const compressFile = async function (file, outPath, options) {
  const FILE_INFO = path.parse(file);
  const STATS = fse.statSync(file);
  const FILE_SIZE_BYTES = STATS.size;
  const FILE_SIZE_KB = Math.floor(FILE_SIZE_BYTES / 1000);

  await imagemin([file], {
    destination: outPath,
    plugins: [
      imageminMozjpeg(options.imageminMozjpeg),
      imageminPngquant(options.imageminPngquant),
      imageminGifsicle(options.imageminGifsicle),
      imageminSvgo(options.imageminSvgo),
    ],
  });

  const OUT_FILE = path.join(outPath, FILE_INFO.base);
  const OUT_STATS = fse.statSync(OUT_FILE);
  const OUT_FILE_SIZE_BYTES = OUT_STATS.size;
  const OUT_FILE_SIZE_KB = Math.floor(OUT_FILE_SIZE_BYTES / 1000);
  const SAVINGS =
    ((FILE_SIZE_BYTES - OUT_FILE_SIZE_BYTES) / FILE_SIZE_BYTES) * 100;

  const HASH = md5File.sync(OUT_FILE);

  return {
    file,
    percentage: SAVINGS,
    before: FILE_SIZE_KB,
    after: OUT_FILE_SIZE_KB,
    hash: HASH,
  };
};

module.exports = compressFile;
