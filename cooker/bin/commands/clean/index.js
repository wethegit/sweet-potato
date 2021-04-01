// The purpose os this command is to clean the build folder and cache folder
"use strict";

const spinners = require("../../../utils/spinners.js");

async function clean() {
  spinners.add("clean", { text: "Deleting files" });

  try {
    await Promise.all([clean(), fse.remove(CONSTS.CACHE_DIRECTORY)]);
    spinners.succeed("clean", { text: "Finished deleting all files." });
  } catch (error) {
    spinners.fail("clean", {
      text: `Failed to clean folders\n${error.message}`,
    });
    process.exit(1);
  }
}

module.exports = clean;
