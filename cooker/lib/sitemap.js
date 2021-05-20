// The purpose of this function is to generate a sitemap file
// based on all of the compiled .html inside the build folder
"use strict";

// imports
const chalk = require("chalk");
const { SitemapStream, streamToPromise } = require("sitemap");
const path = require("path");
const fse = require("fs-extra");
const { config, getFiles, logger } = require("@wethegit/sweet-potato-utensils");

// local imports
const { getClientEnvironment } = require("./env.js");

// consts
const env = getClientEnvironment();

/**
 * sitemap
 *
 * Generates sitemap from the build/ folder index files.
 * Note: You must generate a build first.
 */
async function sitemap() {
  if (!config.OPTIONS.sitemap) return;

  let publicUrl;
  if (typeof config.OPTIONS.sitemap === "string")
    publicUrl = config.OPTIONS.sitemap;
  else if (env.raw.PUBLIC_URL) {
    publicUrl = env.raw.PUBLIC_URL;

    // removes forward slash at the end
    if (publicUrl.charAt(publicUrl.length - 1) === "/")
      publicUrl = publicUrl.substring(0, publicUrl.length - 1);
  }

  if (!publicUrl) {
    logger.error(
      `Failed to generate sitemap.xml, missing ${chalk.bold(
        "public url"
      )}.\nhttps://github.com/wethegit/sweet-potato/tree/main/cooker#sitemap`
    );

    return;
  }

  // Get all html files
  const htmlFiles = await getFiles(
    path.join(config.BUILD_DIRECTORY, "**", "*.html")
  );

  if (htmlFiles.length <= 0) {
    logger.announce(
      "No html files found to generate sitemap, maybe this command was ran too early or you forgot to generate a build.\nnpx sweet-potato-cooker build"
    );
    return;
  }

  logger.start("Generating sitemap");

  // Creates a sitemap object given the input configuration with URLs
  const sitemap = new SitemapStream({ hostname: publicUrl });
  const lastmod = new Date().toISOString();

  // go throught all of them
  for (const file of htmlFiles) {
    const fileInfo = path.parse(file);
    let dir = fileInfo.dir.replace(config.BUILD_DIRECTORY, "");

    if (dir === "") dir += "/";

    sitemap.write({ url: `${publicUrl}${dir}`, lastmod });
  }

  sitemap.end();

  let sitemapData;
  let finalSitemap;

  try {
    sitemapData = await streamToPromise(sitemap);
    finalSitemap = sitemapData.toString();
  } catch (err) {
    logger.error("Failed generating sitemap", err);
  }

  const dest = path.join(config.BUILD_DIRECTORY, "sitemap.xml");
  const prettyPath = path.relative(config.CWD, dest);

  return fse
    .outputFile(dest, finalSitemap)
    .then(() => {
      // done 🎉
      logger.success(["Compiled", prettyPath]);
      logger.finish("Generating sitemap");

      return { destination: dest, sitemap: finalSitemap };
    })
    .catch((err) => {
      logger.error(["Failed saving sitemap file", prettyPath], err);
    });
}

module.exports = sitemap;
