// local imports
const spinners = require("../utils/spinners.js");

const pages = require("./pages.js");
const styles = require("./styles.js");
const javascripts = require("./javascripts.js");
const assets = require("./assets.js");
const sitemap = require("./sitemap.js");

const CONSTS = require("../utils/consts.js");
const logger = require("../utils/logger");

const ISVERBOSE = CONSTS.CONFIG.verbose;

async function buildAll() {
  if (ISVERBOSE) logger.start("Generating production build");
  else spinners.add("build", { text: "Generating production build" });

  const allPromises = [assets(), styles(), javascripts()];
  const pagesPromise = pages();

  // sitemap is generated after templates
  await pagesPromise;
  allPromises.push(sitemap());

  return Promise.all(allPromises).then(() => {
    if (ISVERBOSE) logger.finish("Done generating production build");
    else
      spinners.succeed("build", {
        text: `Done generating production build`,
      });
  });
}

module.exports = buildAll;
