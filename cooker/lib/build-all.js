// local imports
const spinners = require("../utils/spinners.js");

const pages = require("./pages.js");
const styles = require("./styles.js");
const javascripts = require("./javascripts.js");
const assets = require("./assets.js");
const sitemap = require("./sitemap.js");

async function buildAll() {
  spinners.add("build", { text: "Generating production build" });

  const allPromises = [assets(), styles(), javascripts()];
  const pagesPromise = pages();

  // sitemap is generated after templates
  await pagesPromise;
  allPromises.push(sitemap());

  return Promise.all(allPromises).then(() => {
    spinners.succeed("build", {
      text: `Done generating production build`,
    });
  });
}

module.exports = buildAll;
