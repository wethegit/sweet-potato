// This is a simple function, it uses chokidar to watch for
// changes on src files and run the relative transpiler/compiler
"use strict";

const path = require("path");
const chokidar = require("chokidar");

// local imports
const pages = require("./pages.js");
const styles = require("./styles.js");
const javascripts = require("./javascripts.js");
const assets = require("./assets.js");
const favicons = require("./favicons.js");
const CONSTS = require("../utils/consts.js");

const options = {
  persistent: true,
  interval: 300,
  ignoreInitial: true,
  ignored: ["node_modules", ".git", "build", ".vscode"],
};

function watch() {
  // watch for pages and locales
  chokidar
    .watch(
      [
        path.join(CONSTS.CWD, "**", "*.pug"),
        path.join(CONSTS.CWD, "**", "*.yaml"),
      ],
      options
    )
    .on("all", pages);

  // watch for styles
  chokidar
    .watch(path.join(CONSTS.CWD, "**", "*.scss"), options)
    .on("all", styles);

  // watch for javascripts
  chokidar
    .watch(path.join(CONSTS.CWD, "**", "*.js"), options)
    .on("all", javascripts);

  // watch for the config file
  chokidar
    .watch(path.join(CONSTS.CWD, "sweet-potato-cooker.config.js"), options)
    .on("all", function () {
      console.log("Detected changes to config. Please restart.");
    });

  // watch for the favicon
  if (CONSTS.CONFIG.favicon)
    chokidar
      .watch(path.join(CONSTS.CWD, CONSTS.CONFIG.favicon.sourceFile), options)
      .on("all", favicons);

  // watch for assets
  chokidar
    .watch(path.join(CONSTS.PUBLIC_DIRECTORY, "**", "*"), options)
    .on("all", assets);
}

module.exports = watch;
