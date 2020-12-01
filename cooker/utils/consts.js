const path = require("path");

const CWD = process.cwd();
const BUILD_FOLDER = path.join(CWD, "build");
const PAGES_FOLDER = path.join(CWD, "pages");
const PUBLIC_FOLDER = path.join(CWD, "public");

const BIN_FOLDER = path.join(__dirname, "/../bin"); // internal folders
const LIB_FOLDER = path.join(__dirname, "/../lib"); // internal folders
const MODULES_FOLDER = path.join(__dirname, "/../node_modules");

module.exports = {
  CWD,
  BUILD_FOLDER,
  PAGES_FOLDER,
  PUBLIC_FOLDER,
  BIN_FOLDER,
  LIB_FOLDER,
  MODULES_FOLDER,
};
