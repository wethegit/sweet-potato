// The purpose os this command is to clean the build folder and cache folder
"use strict";

const spinners = require("../../../utils/spinners.js");
const clean = require("../../../lib/clean");

async function cleanCommand() {
  spinners.add("clean", { text: "Deleting files" });

  try {
    await clean(true);
    spinners.succeed("clean", { text: "Finished deleting all files." });
  } catch (error) {
    spinners.fail("clean", {
      text: `Failed to clean folders\n${error.message}`,
    });
    process.exit(1);
  }
}

module.exports = cleanCommand;
