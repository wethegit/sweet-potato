const path = require("path");
const fse = require("fs-extra");

const CWD = process.cwd();

// load config file
const CONFIG_PATH = path.join(CWD, "sweet-potato-cooker.config.js");
let CONFIG = {
  sourceFolder: "",
};

if (fse.pathExistsSync(CONFIG_PATH)) {
  const USER_CONFIG = require(CONFIG_PATH);
  CONFIG = Object.assign(CONFIG, USER_CONFIG);
}

const BUILD_FOLDER = path.join(CWD, CONFIG.sourceFolder, "build");
const PAGES_FOLDER = path.join(CWD, CONFIG.sourceFolder, "pages");
const PUBLIC_FOLDER = path.join(CWD, CONFIG.sourceFolder, "public");

const ROOT = path.join(__dirname, "/", "..");
const BIN_FOLDER = path.join(__dirname, "/", "..", "/", "bin"); // internal folders
const LIB_FOLDER = path.join(__dirname, "/", "..", "/", "lib"); // internal folders
const MODULES_FOLDER = path.join(__dirname, "/", "..", "/", "node_modules");

module.exports = {
  CWD,
  ROOT,
  BUILD_FOLDER,
  PAGES_FOLDER,
  PUBLIC_FOLDER,
  BIN_FOLDER,
  LIB_FOLDER,
  MODULES_FOLDER,
};
