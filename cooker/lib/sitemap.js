// The purpose of this function is to generate a sitemap file
// based on all of the compiled .html inside the build folder
"use strict";

// imports
const { SitemapStream, streamToPromise } = require("sitemap");
const path = require("path");
const fse = require("fs-extra");

// local imports
const logger = require("../utils/logger.js");
const helpers = require("./helpers.js");
const getClientEnvironment = require("./env.js");
const CONSTS = require("../utils/consts.js");

// consts
const env = getClientEnvironment();

async function sitemap() {
  if (!CONSTS.CONFIG.sitemap || !env.raw.PUBLIC_TLDN) return;

  // Get all html files
  const htmlFiles = await helpers.getFiles(
    path.join(CONSTS.BUILD_DIRECTORY, "**", "*.html")
  );

  if (htmlFiles.length <= 0) return;

  logger.start("Started sitemap generation");

  // Creates a sitemap object given the input configuration with URLs
  let URL = env.raw.PUBLIC_TLDN;
  if (URL.charAt(URL.length - 1) === "/")
    URL = URL.substring(0, URL.length - 1);

  const sitemap = new SitemapStream({ hostname: URL });
  const lastmod = new Date().toISOString();

  // go throught all of them
  for (const file of htmlFiles) {
    const fileInfo = path.parse(file);
    let dir = fileInfo.dir.replace(CONSTS.BUILD_DIRECTORY, "");

    if (dir === "") dir += "/";

    sitemap.write({ url: `${URL}${dir}`, lastmod });
  }

  sitemap.end();

  try {
    const sitemapData = await streamToPromise(sitemap);
    const dest = path.join(CONSTS.BUILD_DIRECTORY, "sitemap.xml");

    return fse.outputFile(dest, sitemapData.toString()).then(() => {
      logger.success([dest, "Sitemap compiled"]);

      // done 🎉
      logger.finish("Ended sitemap generation");
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = sitemap;
