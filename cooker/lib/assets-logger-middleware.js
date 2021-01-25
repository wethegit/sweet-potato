const path = require("path");
const logger = require("../utils/logger.js");
const CONSTS = require("../utils/consts.js");
const helpers = require("./helpers.js");

let assetsList = {};

function getExtension(path) {
  // get extension
  let extension = path.split("/");
  extension = extension[extension.length - 1].split(".");
  extension = extension[extension.length - 1];

  return extension;
}

function addToList(list, key, val) {
  if (!list[key]) list[key] = [];
  if (!list[key].includes(val)) list[key].push(val);
}

function assetsMiddleware(req, res, next) {
  // NOTE: we could potentially just have a big list of assets here too
  // I don't see any harm in that, I am grouping by extension
  // because this is just a nicer way of visualizing it
  // We can even change this to group by page instead, something like this:
  // let currentPage = null; << outside the middleware
  // if (!extension || extension === "html") {
  //   currentPage = url;
  //    assetsList[currentPage] = [];
  // } else assetsList[currentPage].push(url);
  // or group by page AND extension, etc...
  const url = req.url;
  const extension = getExtension(url);
  if (extension) addToList(assetsList, extension, url);
  next();
}

async function assetsLogger() {
  console.log("");
  logger.start("Building list of assets");

  // get all assets on the build folder
  // everything there is public
  const publicList = await helpers.getFiles(
    path.join(CONSTS.PUBLIC_DIRECTORY, "**", "*"),
    {
      nodir: true,
    }
  );

  // order by extension, like our middleware list
  let publicListOrdered = {};
  for (let asset of publicList) {
    const extension = getExtension(asset);
    if (extension)
      addToList(
        publicListOrdered,
        extension,
        asset.replace(CONSTS.BUILD_DIRECTORY, "")
      );
  }

  // now we go through the list of public assets
  // and compare to the middleware list and build
  // a new list with all the extroneous assets
  let extraneous = {};
  let total = 0;
  for (let [key, values] of Object.entries(publicListOrdered)) {
    for (let val of values) {
      if (!assetsList[key] || !assetsList[key].includes(val)) {
        addToList(extraneous, key, val);
        total += 1;
      }
    }
  }

  if (total > 0) {
    logger.announce("This list of assets is to be used as a guide.");
    console.log("--------------------- EXTRANEOUS ASSETS --------------------");
    logger.warning(`Total: ${total}`);
    for (let key of Object.keys(extraneous)) {
      console.log(`.${key}`);
      for (let val of extraneous[key]) {
        console.log(`  ${val}`);
      }
      console.log("");
    }
    console.log("------------------------------------------------------------");
  }

  logger.finish("List complete");
}

module.exports = {
  assetsMiddleware: assetsMiddleware,
  assetsLogger: assetsLogger,
};
