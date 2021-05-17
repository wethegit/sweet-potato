const path = require("path");
const yargs = require("yargs-parser");

const exitWithError = require("./exitWithError");
const hasPmInstalled = require("./hasPmInstalled");

function validateArgs(args) {
  const { template, useYarn, usePnpm, target, install, _ } = yargs(args);
  const toInstall = install !== undefined ? install : true;

  if (useYarn && usePnpm)
    exitWithError("You can not use Yarn and pnpm at the same time.");

  if (useYarn && !hasPmInstalled("yarn"))
    exitWithError(`Yarn doesn't seem to be installed.`);

  if (usePnpm && !hasPmInstalled("pnpm"))
    exitWithError(`pnpm doesn't seem to be installed.`);

  if (!target && _.length === 2) exitWithError("Missing --target directory.");

  if (_.length > 3) exitWithError("Unexpected extra arguments.");

  const targetDirectoryRelative = target || _[2];
  const targetDirectory = path.resolve(process.cwd(), targetDirectoryRelative);

  return {
    template: template || "default",
    useYarn,
    usePnpm,
    targetDirectoryRelative,
    targetDirectory,
    toInstall,
  };
}

module.exports = validateArgs;
