const path = require("path");
const fse = require("fs-extra");

const CWD = process.cwd();

// load config file
const CONFIG_PATH = path.join(CWD, "sweet-potato-cooker.config.js");
let CONFIG = {
  buildDirectory: "build/",
  sourceDirectory: ".",
  sassOptions: () => { return {}  },
  favicon: {
    sourceFile: '',
    destination: 'favicons/',
    outputTags: 'log'
  },
  sitemap: true,
  compress: {
    imageminMozjpeg: {
       quality: 70,
    },
    imageminPngquant: {
      quality: [0.65, 0.95],
      speed: 1
    },
    imageminGifsicle: {},
    imageminSvgo: {
      plugins: [{ removeViewBox: false }],
      multipass: true,
    }
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
