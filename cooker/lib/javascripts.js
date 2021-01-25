// The main purpose of this function is to transpile our
// ES6 JS files with babel and webpack. It will also generate
// a extra file for older browsers that don't support modules,
// it will be suffixed with .es5.
"use strict";

const path = require("path");
const fse = require("fs-extra");
const webpack = require("webpack");
const cloneDeep = require("clone-deep");

// local imports
const helpers = require("./helpers.js");
const getClientEnvironment = require("./env.js");
const logger = require("./logger.js");
const CONSTS = require("./consts.js");

// local consts
const env = getClientEnvironment();
const isProduction = process.env.NODE_ENV == "production";

async function javascripts(event, file) {
  if (event && event == "add") return; // don't do anything for newly added files just yet

  if (file && !fse.pathExistsSync(file)) return; // if file for some reason got removed

  logger.start("Started javascripts transpilation");

  // If we pass a file and it's outside website, we still need to prettyfy
  if (file && !file.includes(`${CONSTS.SOURCE_WEBSITE_FOLDER}/`)) {
    const prettified = await helpers.prettify(file, { parser: "babel" });

    if (prettified === true) {
      logger.finish("Ended javascript transpilation");
      return;
    }
  }

  let jsFiles = await helpers.getFiles(
    `${CONSTS.SOURCE_WEBSITE_ASSETS_FOLDER}/js/**/*.js`
  );
  if (jsFiles.length <= 0) return;

  let entries = {};
  // go through files
  let shouldSkip = false;
  for (const file of jsFiles) {
    const prettified = await helpers.prettify(file, { parser: "babel" });
    // we prettified the file and wrote it on disk again,
    // that will trigger another update for this file, not with proper coding style
    // so we skip it here at this moment, and compile it on the second trigger
    if (prettified === true) shouldSkip = true;

    const fileInfo = path.parse(file);
    entries[fileInfo.name] = `./${file}`;
  }

  if (Object.keys(entries).length <= 0) return;
  if (shouldSkip && event) {
    logger.finish("Ended javascript transpilation");
    return;
  }

  const dest = `${CONSTS.BUILD_ASSETS_FOLDER}/js/`;
  // get relative path of the final output and pass to environment variables
  const rel = path.relative(dest, CONSTS.BUILD_DIRECTORY);
  env.stringified["process.env"].WTC_RELROOT = rel
    ? JSON.stringify(rel)
    : '"."';

  // base webpack configuration
  let webpackOptions = {
    entry: entries,
    mode: isProduction ? "production" : "development",
    output: {
      filename: "[name].js",
      path: path.resolve(".", dest),
    },
    optimization: {
      runtimeChunk: "single",
      usedExports: true,
      sideEffects: true,
      splitChunks: {
        chunks: "async",
      },
    },
    module: {
      rules: [
        // First, run the linter.
        // It's important to do this before Babel processes the JS.
        {
          test: /\.m?js$/,
          enforce: "pre",
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "eslint-loader",
            options: {
              failOnError: true,
              fix: true,
            },
          },
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              sourceMaps: isProduction ? false : "inline",
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: { esmodules: true },
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-runtime",
              ],
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              cacheCompression: isProduction,
              compact: isProduction,
            },
          },
        },
      ],
    },
    plugins: [new webpack.DefinePlugin(env.stringified)],
  };

  // here we make a copy of the base configuration and change it to use
  // a browserlist configuration, this file will be suffixed with .es5
  // and will be used by older browsers that don't support modules
  let webpackOptionsEs5 = cloneDeep(webpackOptions);
  webpackOptionsEs5.output.filename = "[name].es5.js";
  webpackOptionsEs5.module.rules[0] = {};
  webpackOptionsEs5.module.rules[1].use.options.presets[0][1].targets = [
    "last 2 version",
    "> 1%",
    "not dead",
  ];

  // create promise and render both versions of file
  return new Promise(function (resolve, reject) {
    webpack([webpackOptions, webpackOptionsEs5], function (error, stats) {
      // const final = `${dest}${fileInfo.base}`;
      // const final = `JS`;

      // Deal with breaking errors
      if (error) {
        logger.error([jsFiles, error.stack || err], err.details);
        resolve(null);
      }

      // show any warnings
      const { warnings, errors } = stats.toJson();

      if (stats.hasWarnings()) {
        for (let warning of warnings) {
          logger.warning([jsFiles, warning]);
        }
      }

      // show any error, like linting ones
      if (stats.hasErrors()) {
        for (let error of errors) {
          logger.error([jsFiles, "Contains errors"], error);
        }
      } else {
        // Compiled
        logger.success([jsFiles, "Transpiled"]);
        resolve(logger.finish("Ended javascript transpilation"));
      }
    });
  });
}

module.exports = javascripts;
