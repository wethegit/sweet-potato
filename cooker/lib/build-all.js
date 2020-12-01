// Ensure environment variables are read.
require("./env.js");

// local imports
const templates = require("./templates.js");
const clean = require("./clean.js");
const styles = require("./styles.js");
const javascripts = require("./javascripts.js");
const assets = require("./assets.js");
const favicons = require("./favicons.js");
const sitemap = require("./sitemap.js");

async function buildAll() {
  await clean();

  Promise.all([assets(), javascripts(), styles()]);
  // await for favicons because we need the generated the templates
  await favicons();
  await templates();
  // sitemap is genearted after templates
  return sitemap();
}

module.exports = buildAll;
