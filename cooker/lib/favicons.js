// The purpose of this function is to compile our scss files, simple as that
"use strict";

const fse = require("fs-extra");
const generator = require("favicons");
const path = require("path");

// local imports
const logger = require("../utils/logger.js");
const getClientEnvironment = require("./env.js");
const CONSTS = require("../utils/consts.js");

// consts
const env = getClientEnvironment();
const FAVICON_CONFIG = CONSTS.CONFIG.favicon;

// build destination and options
const FAVICONS_DIRECTORY = path.join(
  CONSTS.BUILD_DIRECTORY,
  FAVICON_CONFIG.destination ? FAVICON_CONFIG.destination : "favicons"
);
const FAVICONS_CACHE = path.join(CONSTS.CACHE_DIRECTORY, "favicons.json");

const GENERATOR_CONFIG = Object.assign(
  {},
  {
    // Path for overriding default icons path. `string`
    path: `${env.raw.PUBLIC_URL}${FAVICONS_DIRECTORY}`,
    // Your application's name. `string`
    appName: "Your App Name",
    // Your application's short_name. `string`. Optional. If not set, appName will be used
    appShortName: "Short App Name",
    // Your application's description. `string`
    appDescription:
      "Mollit consequat velit nostrud tempor amet in ad cupidatat aliquip culpa tempor in aliqua.",
    // Your (or your developer's) name. `string`
    developerName: "we { the collective }",
    // Your (or your developer's) URL. `string`
    developerURL: "http://www.wethecollective.com",
    // Background colour for flattened icons. `string`
    background: "#fff",
    // Theme color user for example in Android's task switcher. `string`
    theme_color: "#fff",
  },
  FAVICON_CONFIG.generatorOptions
);

const writeFiles = async function (response) {
  let promises = [];

  // Array of { name: string, contents: <string> }
  for (let file of response.files)
    promises.push(
      fse.outputFile(path.joins(FAVICONS_DIRECTORY, file.name), file.contents)
    );

  // Array of strings (html elements)
  if (FAVICON_CONFIG.outputTags) {
    const htmlResponse = response.html.join("\n");

    if (FAVICON_CONFIG.outputTags === "log") {
      logger.announce("Favicons output tags");
      console.log(htmlResponse);
    } else
      promises.push(
        fse.outputFile(
          path.join(
            CONSTS.BUILD_DIRECTORY,
            FAVICON_CONFIG.outputTags,
            "favicons.html"
          ),
          htmlResponse
        )
      );
  }

  // Array of { name: string, contents: <buffer> }
  for (let image of response.images)
    promises.push(
      fse.outputFile(path.joins(FAVICONS_DIRECTORY, image.name), image.contents)
    );

  return promises;
};

async function favicons(event, file) {
  // check existance of favicon config
  if (!FAVICON_CONFIG) return;

  // check if file was passed and exists
  const SOURCE_FILE = FAVICON_CONFIG.sourceFile;

  if (!SOURCE_FILE) return;

  if (!fse.pathExistsSync(SOURCE_FILE)) {
    logger.error(`Couldn't find favicon source: ${SOURCE_FILE}`);
    return;
  }

  const source = file ? file : SOURCE_FILE;

  // if file for some reason got removed or we don't have a main.png
  if (source && !fse.pathExistsSync(source)) return;

  logger.start("Started favicons generation");

  // get the last modified date from the file and create cache json
  const { mtimeMs } = await fse.stat(source);
  const current = { ...config, mtimeMs };

  if (fse.pathExistsSync(FAVICONS_CACHE)) {
    // compare to our cache
    const cache = await fse.readJson(FAVICONS_CACHE);
    const cacheKeys = Object.keys(cache);
    let didChange = false;

    for (let i = 0; i < cacheKeys.length; i++) {
      const key = cacheKeys[i];
      if (current[key] !== cache[key]) {
        didChange = true;
        break;
      }
    }

    // if it's the same, we skip
    if (!didChange) {
      logger.finish(["Ended favicons generation.", "No Change"]);
      return;
    }
  } else {
    // save modified date and config
    await fse.outputJson(FAVICONS_CACHE, current);
  }

  return new Promise(function (resolve, reject) {
    generator(source, GENERATOR_CONFIG, async function (error, response) {
      // Error description e.g. "An unknown error has occurred"
      if (error) logger.error("Error generating favicons", error.message);

      try {
        await writeFiles(response);
        logger.success(`Favicons generated`);
        resolve(logger.finish("Ended favicons generation"));
      } catch (error) {
        logger.error("Error saving favicons to disk", error.message);
      }
    });
  });
}

module.exports = favicons;
