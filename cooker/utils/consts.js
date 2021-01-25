const path = require("path");
const fse = require("fs-extra");

const CWD = process.cwd();

// load config file
const CONFIG_PATH = path.join(CWD, "sweet-potato-cooker.config.js");
let CONFIG = {
  buildDirectory: "build",
  sourceDirectory: "",
  sassOptions: () => {},
  favicon: {
    sourceFile: '',
    destination: 'favicons',
    outputTags: false
  },
  sitemap: true,
  compress: {
    imageminMozjpeg: {},
    imageminPngquant: {},
    imageminGifsicle: {},
    imageminSvgo: {}
  }
};

if (fse.pathExistsSync(CONFIG_PATH)) {
  const USER_CONFIG = require(CONFIG_PATH);
  CONFIG = Object.assign(CONFIG, USER_CONFIG);
}

const BUILD_DIRECTORY = path.join(CWD, CONFIG.buildDirectory);
const CACHE_DIRECTORY = path.join(CWD, ".cache", "sweet-potato-cooker");

const PAGES_DIRECTORY = path.join(CWD, CONFIG.sourceDirectory, "pages");
const PUBLIC_DIRECTORY = path.join(CWD, CONFIG.sourceDirectory, "public");

const ROOT_DIRECTORY = path.join(__dirname, "..");
const BIN_DIRECTORY = path.join(__dirname, "..", "bin"); // internal folders
const LIB_DIRECTORY = path.join(__dirname, "..", "lib"); // internal folders
const MODULES_DIRECTORY = path.join(__dirname, "..", "node_modules");

module.exports = {
  CWD,
  CONFIG,
  ROOT_DIRECTORY,
  BUILD_DIRECTORY,
  CACHE_DIRECTORY,
  PAGES_DIRECTORY,
  PUBLIC_DIRECTORY,
  BIN_DIRECTORY,
  LIB_DIRECTORY,
  MODULES_DIRECTORY,
};
