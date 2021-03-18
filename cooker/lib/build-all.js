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

  const pagesPromise = pages();
  const stylesPromise = styles();
  const javascriptsPromise = javascripts();
  const faviconsPromise = favicons();
  const allPromises = [
    pagesPromise,
    stylesPromise,
    javascriptsPromise,
    faviconsPromise,
  ];

  // sitemap is generated after templates
  if (env === "production") {
    await pagesPromise;
    allPromises.push(sitemap());
  }

  return Promise.all(allPromises);
}

module.exports = buildAll;
