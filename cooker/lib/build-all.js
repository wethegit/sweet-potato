// local imports
const clean = require("./clean.js");
const pages = require("./pages.js");
const styles = require("./styles.js");
const javascripts = require("./javascripts.js");
const assets = require("./assets.js");
const favicons = require("./favicons.js");
const sitemap = require("./sitemap.js");

async function buildAll(env) {
  await clean();
  await assets();

  let processes = Promise.all([pages(), styles(), javascripts(), favicons()]);

  // sitemap is generated after templates
  if (env === "production") {
    await processes;
    return sitemap();
  }

  return processes;
}

module.exports = buildAll;
