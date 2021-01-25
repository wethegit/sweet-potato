// local imports
const clean = require("./clean.js");
const pages = require("./pages.js");
const styles = require("./styles.js");
// const javascripts = require("./javascripts.js");
const assets = require("./assets.js");
const favicons = require("./favicons.js");
// const sitemap = require("./sitemap.js");

async function buildAll() {
  await clean();
  await assets();

  return Promise.all([pages(), styles(), favicons()]);

  // sitemap is generated after templates
  // return sitemap();
}

module.exports = buildAll;
