// local imports
const clean = require("./clean.js");
const pages = require("./pages.js");
const styles = require("./styles.js");
// const javascripts = require("./javascripts.js");
const assets = require("./assets.js");
// const favicons = require("./favicons.js");
// const sitemap = require("./sitemap.js");

async function buildAll() {
  await clean();
  await assets();

  return Promise.all([pages(), styles()]);

  // await for favicons because we need the generated the templates
  // await favicons();
  // await pages();
  // sitemap is genearted after templates
  // return sitemap();
}

module.exports = buildAll;
