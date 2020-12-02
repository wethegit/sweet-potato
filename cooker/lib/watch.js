// This is a simple function, it uses chokidar to watch for
// changes on src files and run the relative transpiler/compiler
"use strict";

const path = require("path");
const chokidar = require("chokidar");

// local imports
const pages = require("./pages.js");
// const styles = require("./styles.js");
// const javascripts = require("./javascripts.js");
const assets = require("./assets.js");
// const favicons = require("./favicons.js");
const CONSTS = require("../utils/consts.js");

const options = {
  persistent: true,
  interval: 300,
  ignoreInitial: true,
};

function watch() {
  // watch for pages
  chokidar
    .watch(path.join(CONSTS.PAGES_FOLDER, "**", "*.pug"), options)
    .on("all", pages);

  // watch for locales
  chokidar
    .watch(
      [
        path.join(CONSTS.CWD, "*.yaml"),
        path.join(CONSTS.CWD, "templates", "*.pug"),
        path.join(CONSTS.PAGES_FOLDER, "**", "*.yaml"),
      ],
      options
    )
    .on("all", pages);

  // // watch for styles
  // chokidar.watch(`${CONSTS.SRC_FOLDER}/**/*.scss`, options).on("all", styles);

  // // watch for javascripts
  // chokidar
  //   .watch(`${CONSTS.SRC_FOLDER}/**/!(vendor)/*.js`, options)
  //   .on("all", javascripts);

  // // watch for the favicon
  // chokidar
  //   .watch(`${CONSTS.SRC_FOLDER}/favicons/main.png`, options)
  //   .on("all", favicons);

  // watch for assets
  chokidar.watch(CONSTS.PUBLIC_FOLDER, options).on("all", assets);
}

module.exports = watch;
