// The purpose of this function is to generate a sitemap file
// based on all of the compiled .html inside the build folder
"use strict";

// imports
const { SitemapStream, streamToPromise } = require("sitemap");
const path = require("path");
const fse = require("fs-extra");

// local imports
const spinners = require("../utils/spinners.js");
const helpers = require("./helpers.js");
const { getClientEnvironment } = require("./env.js");
const CONSTS = require("../utils/consts.js");
const logger = require("../utils/logger");

const ISVERBOSE = CONSTS.CONFIG.verbose;

// consts
const env = getClientEnvironment();

async function sitemap() {
  if (!CONSTS.CONFIG.sitemap) return;

  if (ISVERBOSE) logger.start("Generating sitemap");
  else spinners.add("sitemap", { text: "Generating sitemap", indent: 2 });

  let publicUrl;
  if (typeof CONSTS.CONFIG.sitemap === "string")
    publicUrl = CONSTS.CONFIG.sitemap;
  else if (env.raw.PUBLIC_URL) {
    publicUrl = env.raw.PUBLIC_URL;

    // removes forward slash at the end
    if (publicUrl.charAt(publicUrl.length - 1) === "/")
      publicUrl = publicUrl.substring(0, publicUrl.length - 1);
  }

  if (!publicUrl) {
    if (ISVERBOSE)
      logger.error(
        "Failed to generate sitemap.xml, missing `public url`.\nhttps://github.com/wethegit/sweet-potato/tree/main/cooker#sitemap"
      );
    else
      spinners.fail("sitemap", {
        text:
          "Failed to generate sitemap.xml, missing `public url`.\nhttps://github.com/wethegit/sweet-potato/tree/main/cooker#sitemap",
      });
    return;
  }

  // Get all html files
  const htmlFiles = await helpers.getFiles(
    path.join(CONSTS.BUILD_DIRECTORY, "**", "*.html")
  );

  if (htmlFiles.length <= 0) return;

  // Creates a sitemap object given the input configuration with URLs
  const sitemap = new SitemapStream({ hostname: publicUrl });
  const lastmod = new Date().toISOString();

  // go throught all of them
  for (const file of htmlFiles) {
    const fileInfo = path.parse(file);
    let dir = fileInfo.dir.replace(CONSTS.BUILD_DIRECTORY, "");

    if (dir === "") dir += "/";

    sitemap.write({ url: `${publicUrl}${dir}`, lastmod });
  }

  sitemap.end();

  try {
    const sitemapData = await streamToPromise(sitemap);
    const dest = path.join(CONSTS.BUILD_DIRECTORY, "sitemap.xml");

    return fse.outputFile(dest, sitemapData.toString()).then(() => {
      // done 🎉
      if (ISVERBOSE) logger.finish("Done generating sitemap");
      else spinners.succeed("sitemap", { text: `Done generating sitemap` });
      return dest;
    });
  } catch (err) {
    if (ISVERBOSE) logger.error("Failed generating sitemap", err);
    else
      spinners.fail("sitemap", {
        text: `Failed generating sitemap\n${err.message}`,
      });
  }
}

module.exports = sitemap;
