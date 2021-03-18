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
  if (!CONSTS.CONFIG.sitemap) return;

  let publicUrl;
  if (typeof CONSTS.CONFIG.sitemap === "string")
    publicUrl = CONSTS.CONFIG.sitemap;
  else if (env.raw.PUBLIC_URL) {
    publicUrl = env.raw.PUBLIC_URL;

    if (publicUrl.charAt(publicUrl.length - 1) === "/")
      publicUrl = publicUrl.substring(0, publicUrl.length - 1);
  }

  if (!publicUrl) {
    logger.error("Tried to generate sitemap.xml but no public url was set.", {
      message:
        "https://github.com/wethegit/sweet-potato/tree/main/cooker#sitemap",
    });
    return;
  }

  // Get all html files
  const htmlFiles = await helpers.getFiles(
    path.join(CONSTS.BUILD_DIRECTORY, "**", "*.html")
  );

  if (htmlFiles.length <= 0) return;

  logger.start("Started sitemap generation");

  // Creates a sitemap object given the input configuration with URLs
  const sitemap = new SitemapStream({ hostname: publicUrl });
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
      if (CONSTS.CONFIG.verbose) logger.success([dest, "Sitemap compiled"]);

      // done 🎉
      logger.finish("Ended sitemap generation");
      return dest;
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = sitemap;
