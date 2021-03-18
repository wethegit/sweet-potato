// The main purpose of this function is to transpile our
// ES6 JS files with babel and webpack. It will also generate
// a extra file for older browsers that don't support modules,
// it will be suffixed with .es5.
"use strict";

const path = require("path");
const fse = require("fs-extra");
const esbuild = require("esbuild");
const { ESLint } = require("eslint");

// local imports
const helpers = require("./helpers.js");
const getClientEnvironment = require("./env.js");
const logger = require("../utils/logger.js");
const CONSTS = require("../utils/consts.js");

// local consts
const env = getClientEnvironment();
const isProduction = process.env.NODE_ENV == "production";
let breakpointsInjectFile;

if (CONSTS.CONFIG.breakpoints) {
  breakpointsInjectFile = path.join(CONSTS.CACHE_DIRECTORY, "breakpoints.js");

  fse.outputFileSync(
    breakpointsInjectFile,
    `export let SWEET_POTATO_BREAKPOINTS = ${JSON.stringify(
      CONSTS.CONFIG.breakpoints
    )};`
  );
}

async function lint(file, instance) {
  // 2. Lint files. This doesn't modify target files.
  const results = await instance.lintFiles([file]);

  // 3. Modify the files with the fixed code.
  await ESLint.outputFixes(results);

  // 4. Format the results.
  const formatter = await instance.loadFormatter("stylish");
  const resultText = formatter.format(results);

  // 5. Output it.
  if (resultText) console.log(resultText);
  return !!resultText;
}

async function javascripts(file) {
  if (file && !fse.pathExistsSync(file)) return; // if file for some reason got removed

  // 1. Create an instance with the `fix` option.
  const eslint = new ESLint({
    fix: true,
    cwd: CONSTS.CWD,
    cacheLocation: path.join(CONSTS.CACHE_DIRECTORY, ".eslintcache"),
    overrideConfigFile: path.join(CONSTS.ROOT_DIRECTORY, ".eslintrc.yaml"),
  });

  if (file) {
    if (path.parse(file).base === "sweet-potato-cooker.config.js") return;

    // If we pass a file and it's outside website, we still need to prettify
    if (!file.includes(CONSTS.PAGES_DIRECTORY)) {
      const prettified = await helpers.prettify(file, { parser: "babel" });

      // if it had linting issues we don't continue and let the
      // updates to the file trigger a new event
      if (prettified === true) return;

      const linted = await lint(file, eslint);

      if (linted === true) return;

      file = null;
    }
  }

  let jsFiles = file
    ? [file]
    : await helpers.getFiles(path.join(CONSTS.PAGES_DIRECTORY, "**", "*.js"));

  if (jsFiles.length <= 0) return;

  logger.start("Started javascripts bundling");

  let promises = [];
  let service = await esbuild.startService();
  try {
    for (let file of jsFiles) {
      const prettified = await helpers.prettify(file, { parser: "babel" });
      // we prettified the file and wrote it on disk again,
      // that will trigger another update for this file, not with proper coding style
      // so we skip it here at this moment, and compile it on the second trigger
      if (prettified === true) continue;

      const linted = await lint(file, eslint);

      if (linted === true) continue;

      const fileInfo = path.parse(file);

      const DEST = path.join(
        CONSTS.BUILD_DIRECTORY,
        fileInfo.dir.replace(CONSTS.PAGES_DIRECTORY, ""),
        fileInfo.base
      );

      let DEFINE_VALUES = {
        SWEET_POTATO_RELATIVE_ROOT: `"${path.relative(
          DEST,
          CONSTS.BUILD_DIRECTORY
        )}"`,
      };

      for (const [key, value] of Object.entries(env.raw)) {
        DEFINE_VALUES[key] = typeof value === "string" ? `"${value}"` : value;
      }

      promises.push(
        service
          .build({
            entryPoints: [file],
            bundle: true,
            outfile: DEST,
            minify: isProduction,
            sourcemap: !isProduction ? "inline" : false,
            target: ["es2020"],
            format: "esm",
            define: DEFINE_VALUES,
            inject: breakpointsInjectFile ? [breakpointsInjectFile] : [],
          })
          .then(() => fse.readFile(DEST, "utf8"))
          .then((data) => {
            if (CONSTS.CONFIG.verbose) logger.success([DEST, "Bundled"]);
            return { destination: DEST, js: data };
          })
      );
    }
  } catch (error) {
    logger.error("Failed to save bundle javascript file", error);
  }

  // create promise and render both versions of file
  return Promise.all(promises).then((res) => {
    // done 🎉
    service.stop();
    logger.finish("Ended javascript bundling");
    return res;
  });
}

module.exports = javascripts;
