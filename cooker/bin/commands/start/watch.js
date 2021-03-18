function watch(cb) {
  if (!cb) throw Error("watch function requires a callback");

  const path = require("path");
  const chokidar = require("chokidar");

  const pages = require("../../../lib/pages");
  const styles = require("../../../lib/styles");
  const javascripts = require("../../../lib/javascripts.js");
  const favicons = require("../../../lib/favicons.js");
  const assets = require("../../../lib/assets.js");
  const CONSTS = require("../../../utils/consts.js");
  const logger = require("../../../utils/logger.js");

  let pathsToIgnore = [
    path.join(CONSTS.CWD, "node_modules"),
    path.join(CONSTS.CWD, ".git"),
    path.join(CONSTS.CWD, "build"),
    path.join(CONSTS.CWD, ".vscode"),
  ];

  if (CONSTS.CONFIG.ignoreOnWatch) {
    for (let path of CONSTS.CONFIG.ignoreOnWatch)
      pathsToIgnore.push(path.join(path));
  }

  const options = {
    persistent: true,
    interval: 300,
    ignoreInitial: true,
    ignored: pathsToIgnore,
  };

  // watch for pages
  chokidar
    .watch(path.join(CONSTS.CWD, "**", "*.pug"), options)
    .on("all", async (event, file) => {
      // await pages(file);
      if (cb) cb();
    });

  chokidar
    .watch(path.join(CONSTS.CWD, "**", "*.yaml"), options)
    .on("all", async (event, file) => {
      // await pages(null, file);
      if (cb) cb();
    });

  // watch for styles
  chokidar
    .watch(path.join(CONSTS.CWD, "**", "*.scss"), options)
    .on("all", async (event, file) => {
      // await styles(file);
      if (cb) cb();
    });

  // watch for javascripts
  chokidar
    .watch(path.join(CONSTS.CWD, "**", "*.js"), options)
    .on("all", async (event, file) => {
      // await javascripts(file);
      if (cb) cb();
    });

  // watch for the config file
  chokidar
    .watch(path.join(CONSTS.CWD, "sweet-potato-cooker.config.js"), options)
    .on("all", function () {
      logger.warning("Detected changes to config. Please restart.");
    });

  // watch for the favicon
  if (CONSTS.CONFIG.favicon && CONSTS.CONFIG.favicon.SOURCE_FILE)
    chokidar
      .watch(path.join(CONSTS.CWD, CONSTS.CONFIG.favicon.sourceFile), options)
      .on("all", async (event, file) => {
        await favicons(file);
        if (cb) cb();
      });

  // watch for assets
  // chokidar
  //   .watch(path.join(CONSTS.PUBLIC_DIRECTORY, "**", "*"), options)
  //   .on("all", async (event, file) => {
  //     await assets(file);
  //     if (cb) cb();
  //   });
}

module.exports = watch;
