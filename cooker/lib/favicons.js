// The purpose of this function is to compile our scss files, simple as that
"use strict";

const fse = require("fs-extra");
const generator = require("favicons");
const path = require("path");

// local imports
const spinners = require("../utils/spinners.js");
const CONSTS = require("../utils/consts.js");

// consts
const FAVICON_CONFIG = CONSTS.CONFIG.favicon;

// build destination and options
const FAVICONS_DIRECTORY = path.join(
  CONSTS.BUILD_DIRECTORY,
  FAVICON_CONFIG.destination ? FAVICON_CONFIG.destination : "favicons"
);
const FAVICONS_CACHE = path.join(CONSTS.CACHE_DIRECTORY, "favicons.json");
const GENERATOR_CONFIG = FAVICON_CONFIG.generatorOptions || {};

const writeFiles = async function (response) {
  let promises = [];

  // Array of { name: string, contents: <string> }
  for (let file of response.files)
    promises.push(
      fse.outputFile(path.join(FAVICONS_DIRECTORY, file.name), file.contents)
    );

  // Array of strings (html elements)
  if (FAVICON_CONFIG.outputTags) {
    const htmlResponse = response.html.join("\n");

    if (FAVICON_CONFIG.outputTags === "log") {
      spinners.add("favicons-output", {
        text: `Favicons output tags\n${htmlResponse}`,
        status: "non-spinnable",
      });
    } else
      promises.push(
        fse.outputFile(
          path.join(CONSTS.CWD, FAVICON_CONFIG.outputTags, "favicons.html"),
          htmlResponse
        )
      );
  }

  // Array of { name: string, contents: <buffer> }
  for (let image of response.images)
    promises.push(
      fse.outputFile(path.join(FAVICONS_DIRECTORY, image.name), image.contents)
    );

  return promises;
};

const deepObjectKeysCheck = function (origin, toCompare) {
  let didOriginChange = false;
  const originKeys = Object.keys(origin);

  for (let i = 0; i < originKeys.length; i++) {
    const key = originKeys[i];
    const originValue = origin[key];
    const compareValue = toCompare[key];

    if (originValue instanceof Object && compareValue instanceof Object) {
      didOriginChange = deepObjectKeysCheck(originValue, compareValue);
    } else if (origin[key] !== toCompare[key]) {
      didOriginChange = true;
    }

    if (didOriginChange) break;
  }

  return didOriginChange;
};

async function favicons(file) {
  // check existance of favicon config
  if (!FAVICON_CONFIG) return;

  const source = file ? file : FAVICON_CONFIG.sourceFile;

  spinners.add("favicons", { text: "Generating favicons", indent: 2 });

  if (!source || !fse.pathExistsSync(source)) {
    spinners.fail("favicons", {
      text: `Couldn't find favicon source: ${source}`,
    });
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    // get the last modified date from the file and create cache json
    const { mtimeMs } = await fse.stat(source);
    const current = { ...FAVICON_CONFIG, mtimeMs };

    if (fse.pathExistsSync(FAVICONS_CACHE)) {
      // compare to our cache
      const cache = await fse.readJson(FAVICONS_CACHE);
      const didChange = deepObjectKeysCheck(current, cache);

      // if it's the same, we skip
      if (!didChange) {
        spinners.succeed("favicons", { text: "Done generating favicons" });
        return;
      }

      await fse.outputJson(FAVICONS_CACHE, current);
    } else {
      // save modified date and config
      await fse.outputJson(FAVICONS_CACHE, current);
    }
  }

  // Path for overriding default icons path. `string`
  GENERATOR_CONFIG.path = "./";

  return new Promise(function (resolve, reject) {
    generator(source, GENERATOR_CONFIG, async function (error, response) {
      // Error description e.g. "An unknown error has occurred"
      if (error)
        spinners.fail("favicons", {
          text: `Failed to generate favicons ${error.message}`,
        });

      try {
        const all = await writeFiles(response);
        spinners.succeed("favicons", { text: "Done generating favicons" });
        resolve(all);
      } catch (error) {
        spinners.fail("favicons", {
          text: `Failed saving favicons to disk ${error.message}`,
        });
        reject(error);
      }
    });
  });
}

module.exports = favicons;
