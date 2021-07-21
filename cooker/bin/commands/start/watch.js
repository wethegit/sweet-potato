function watch(cb) {
  if (!cb) throw Error("watch function requires a callback");

  const path = require("path");
  const chokidar = require("chokidar");
  const { config, logger } = require("@wethegit/sweet-potato-utensils");

  // list of paths that should be ignored
  let pathsToIgnore = [
    path.join(config.CWD, "node_modules"),
    path.join(config.CWD, ".git"),
    path.join(config.CWD, "build"),
    path.join(config.CWD, ".vscode"),
    path.join(config.CWD, "package.json"),
    path.join(config.CWD, "package-lock.json"),
    path.join(config.CWD, "yarn-lock.json"),
    path.join(config.CWD, ".cache"),
    path.join(config.BUILD_DIRECTORY),
    path.join(config.CACHE_DIRECTORY),
  ];

  if (config.OPTIONS.ignoreOnWatch) {
    for (let path of config.OPTIONS.ignoreOnWatch)
      pathsToIgnore.push(path.join(config.CWD, path));
  }

  const options = {
    persistent: true,
    ignoreInitial: true,
    ignored: pathsToIgnore,
  };

  // watch for pages
  chokidar.watch(path.join(config.CWD, "**", "*.pug"), options).on("all", cb);
  chokidar.watch(path.join(config.CWD, "**", "*.md"), options).on("all", cb);

  // watch for data
  chokidar.watch(path.join(config.CWD, "**", "*.yaml"), options).on("all", cb);
  chokidar.watch(path.join(config.CWD, "**", "*.json"), options).on("all", cb);

  // watch for styles
  chokidar.watch(path.join(config.CWD, "**", "*.scss"), options).on("all", cb);

  // watch for javascripts
  chokidar.watch(path.join(config.CWD, "**", "*.js"), options).on("all", cb);

  // watch for shaders
  chokidar.watch(path.join(config.CWD, "**", "*.glsl"), options).on("all", cb);

  // watch for assets
  chokidar
    .watch(path.join(config.PUBLIC_DIRECTORY, "**", "*"), options)
    .on("all", cb);

  // watch for the config file
  chokidar
    .watch(path.join(config.CWD, "sweet-potato.config.js"), options)
    .on("all", () => {
      logger.warning("Detected changes to config. Please restart.");
    });
}

module.exports = watch;
