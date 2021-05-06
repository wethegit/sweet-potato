function watch(cb) {
  if (!cb) throw Error("watch function requires a callback");

  const path = require("path");
  const chokidar = require("chokidar");

  const CONSTS = require("../../../utils/consts.js");
  const logger = require("../../../utils/logger.js");

  let pathsToIgnore = [
    path.join(CONSTS.CWD, "node_modules"),
    path.join(CONSTS.CWD, ".git"),
    path.join(CONSTS.CWD, "build"),
    path.join(CONSTS.CWD, ".vscode"),
    path.join(CONSTS.CWD, "package.json"),
    path.join(CONSTS.CWD, "package-lock.json"),
    path.join(CONSTS.CWD, "yarn-lock.json"),
    path.join(CONSTS.BUILD_DIRECTORY),
    path.join(CONSTS.CACHE_DIRECTORY),
  ];

  if (CONSTS.CONFIG.ignoreOnWatch) {
    for (let path of CONSTS.CONFIG.ignoreOnWatch)
      pathsToIgnore.push(path.join(path));
  }

  const options = {
    persistent: true,
    ignoreInitial: true,
    ignored: pathsToIgnore,
  };

  // watch for pages
  chokidar.watch(path.join(CONSTS.CWD, "**", "*.pug"), options).on("all", cb);

  chokidar.watch(path.join(CONSTS.CWD, "**", "*.yaml"), options).on("all", cb);

  // watch for styles
  chokidar.watch(path.join(CONSTS.CWD, "**", "*.scss"), options).on("all", cb);

  // watch for javascripts
  chokidar.watch(path.join(CONSTS.CWD, "**", "*.js"), options).on("all", cb);

  // watch for assets
  chokidar
    .watch(path.join(CONSTS.PUBLIC_DIRECTORY, "**", "*"), options)
    .on("all", cb);

  // watch for the config file
  chokidar
    .watch(path.join(CONSTS.CWD, "sweet-potato-cooker.config.js"), options)
    .on("all", () => {
      logger.warning("Detected changes to config. Please restart.");
    });
}

module.exports = watch;
