const { extendDefaultPlugins } = require("svgo");
const path = require("path");
const fse = require("fs-extra");

const CWD = process.cwd();

// load config file
const CONFIG_PATH = path.join(CWD, "sweet-potato.config.js");
let CONFIG = {
  verbose: true,
  buildDirectory: "build",
  sourceDirectory: ".",
  locales: {
    directoryName: "locales",
    defaultName: "default",
    markdownVariableName: "markdownContent",
  },
  sassOptions: () => {
    return {};
  },
  sitemap: false,
  compress: {
    imageminMozjpeg: {
      quality: 70,
    },
    imageminPngquant: {
      quality: [0.65, 0.95],
      speed: 1,
    },
    imageminGifsicle: {},
    imageminSvgo: {
      plugins: extendDefaultPlugins([{ name: "removeViewBox", active: false }]),
    },
  },
  breakpoints: false,
  plugins: [],
};

if (fse.pathExistsSync(CONFIG_PATH)) {
  const USER_CONFIG = require(CONFIG_PATH);
  CONFIG = Object.assign(CONFIG, USER_CONFIG);
}

const BUILD_DIRECTORY = path.join(CWD, CONFIG.buildDirectory);
const CACHE_DIRECTORY = path.join(CWD, ".cache", "sweet-potato");

const SOURCE_DIRECTORY = path.join(CWD, CONFIG.sourceDirectory);
const PAGES_DIRECTORY = path.join(SOURCE_DIRECTORY, "pages");
const PUBLIC_DIRECTORY = path.join(SOURCE_DIRECTORY, "public");
const GLOBAL_LOCALES_DIRECTORY = path.join(
  SOURCE_DIRECTORY,
  CONFIG.locales.directoryName
);

module.exports = {
  CWD,
  OPTIONS: CONFIG,
  BUILD_DIRECTORY,
  CACHE_DIRECTORY,
  SOURCE_DIRECTORY,
  PAGES_DIRECTORY,
  PUBLIC_DIRECTORY,
  GLOBAL_LOCALES_DIRECTORY,
};
