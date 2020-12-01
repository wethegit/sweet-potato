// The purpose of this function is to compile our scss files, simple as that
"use strict";

const fse = require("fs-extra");
const generator = require("favicons");

// local imports
const logger = require("./logger.js");
const getClientEnvironment = require("./env.js");
const CONSTS = require("./consts.js");

// consts
const env = getClientEnvironment();
const dest = `${CONSTS.BUILD_ASSETS_FOLDER}/favicons/`;
const config = {
  // Path for overriding default icons path. `string`
  path: `${env.raw.WTC_PUBLIC_URL}assets/favicons`,
  // Your application's name. `string`
  appName: "Bootstrap",
  // Your application's short_name. `string`. Optional. If not set, appName will be used
  appShortName: "Bootstrap",
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
};

const FAVICONS_FOLDER = `${CONSTS.SOURCE_FOLDER}/favicons`;
const FAVICONS_MAIN = `${FAVICONS_FOLDER}/main.png`;
const FAVICONS_CACHE = ".cache/favicons.json";

const writeFiles = async function (response) {
  let promises = [];

  // Array of { name: string, contents: <string> }
  for (let file of response.files) {
    promises.push(fse.outputFile(dest + file.name, file.contents));
  }

  // Array of strings (html elements)
  promises.push(
    fse.outputFile(`${FAVICONS_FOLDER}/favicons.pug`, response.html.join("\n"))
  );

  // Array of { name: string, contents: <buffer> }
  for (let image of response.images) {
    promises.push(fse.outputFile(dest + image.name, image.contents));
  }

  return promises;
};

async function favicons(event, file) {
  const source = file ? file : FAVICONS_MAIN;

  // if file for some reason got removed or we don't have a main.png
  if (!fse.pathExistsSync(source)) return;

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
    generator(source, config, async function (error, response) {
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
