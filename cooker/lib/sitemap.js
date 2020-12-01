// The purpose of this function is to generate a sitemap file
// based on all of the compiled .html inside the build folder
"use strict";

// imports
const { SitemapStream, streamToPromise } = require("sitemap");
const path = require("path");
const fse = require("fs-extra");

// local imports
const logger = require("./logger.js");
const helpers = require("./helpers.js");
const getClientEnvironment = require("./env.js");
const CONSTS = require("./consts.js");

// consts
const env = getClientEnvironment();

async function sitemap() {
  // Get all html files
  const htmlFiles = await helpers.getFiles(`${CONSTS.BUILD_FOLDER}/**/*.html`);
  if (htmlFiles.length <= 0) return;

  logger.start("Started sitemap generation");

  // Creates a sitemap object given the input configuration with URLs
  const sitemap = new SitemapStream({ hostname: env.raw.WTC_TLDN });
  const lastmod = new Date().toISOString();

  // go throught all of them
  for (const file of htmlFiles) {
    const fileInfo = path.parse(file);
    let dir = fileInfo.dir.replace(`${CONSTS.BUILD_FOLDER}/`, "");

    if (dir === "build") dir = "";
    else dir += "/";

    sitemap.write({ url: `${env.raw.WTC_PUBLIC_URL}${dir}`, lastmod });
  }

  sitemap.end();

  try {
    const sitemapData = await streamToPromise(sitemap);
    const dest = `${CONSTS.BUILD_FOLDER}/sitemap.xml`;

    return fse.outputFile(dest, sitemapData.toString()).then(() => {
      logger.success([dest, "Compiled"]);

      // done 🎉
      logger.finish("Ended sitemap generation");
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = sitemap;
