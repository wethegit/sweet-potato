#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const execa = require("execa");
const yargs = require("yargs-parser");
const { copy, remove } = require("fs-extra");
const colors = require("kleur");

const logError = require("../lib/logError");
const hasPmInstalled = require("../lib/hasPmInstalled");
const getRepoInfo = require("../lib/getRepoInfo");
const cleanProject = require("../lib/cleanProject");
const installProcess = require("../lib/installProcess");

function validateArgs(args) {
  const { template, useYarn, usePnpm, force, target, install, _ } = yargs(args);
  const toInstall = install !== undefined ? install : true;

  if (useYarn && usePnpm) {
    logError("You can not use Yarn and pnpm at the same time.");
  }

  if (useYarn && !hasPmInstalled("yarn")) {
    logError(`Yarn doesn't seem to be installed.`);
  }

  if (usePnpm && !hasPmInstalled("pnpm")) {
    logError(`pnpm doesn't seem to be installed.`);
  }

  if (!target && _.length === 2) {
    logError("Missing --target directory.");
  }

  if (_.length > 3) {
    logError("Unexpected extra arguments.");
  }

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

const {
  template,
  useYarn,
  usePnpm,
  toInstall,
  targetDirectoryRelative,
  targetDirectory,
} = validateArgs(process.argv);

let installer = "npm";
if (useYarn) installer = "yarn";
else if (usePnpm) installer = "pnpm";

const baseTemplatesDir = path.join(__dirname, "..", "templates");
const listOfBaseTemplates = fs
  .readdirSync(path.join(__dirname, "..", "templates"))
  .map((name) => path.join(baseTemplatesDir, name))
  .filter((file) => fs.lstatSync(file).isDirectory());

const isBaseTemplate = listOfBaseTemplates.find((file) => {
  const { name } = path.parse(file);
  return name === template;
});

(async () => {
  console.log(`Using template ${colors.cyan(template)}`);
  console.log(`Creating a new project in ${colors.cyan(targetDirectory)}`);

  // fetch from npm or GitHub if not local (which will be most of the time)
  if (!isBaseTemplate) {
    const templateInfo = await getRepoInfo(template);

    try {
      const tempPath = path.join(targetDirectoryRelative, "temp");

      await execa(
        "git",
        [
          "clone",
          "--branch",
          templateInfo.branch,
          "--single-branch",
          `git@github.com:${templateInfo.username}/${templateInfo.name}.git`,
          tempPath,
        ],
        {
          cwd: targetDirectory,
          all: true,
        }
      );

      await remove(path.join(tempPath, ".git"));

      await copy(tempPath, targetDirectory);

      await remove(tempPath);
    } catch (err) {
      // Only log output if the command failed
      console.error(err.all);
      throw err;
    }
  } else {
    // if (targetDirectoryRelative !== '.')
    fs.mkdirSync(targetDirectoryRelative, { recursive: true });

    await copy(isBaseTemplate, targetDirectory);
    await cleanProject(targetDirectory);
  }

  if (toInstall) {
    console.log(
      `Installing package dependencies. This might take a couple of minutes.\n`
    );

    const npmInstallProcess = installProcess(installer, {
      cwd: targetDirectory,
      stdio: "inherit",
    });

    npmInstallProcess.stdout && npmInstallProcess.stdout.pipe(process.stdout);
    npmInstallProcess.stderr && npmInstallProcess.stderr.pipe(process.stderr);

    await npmInstallProcess;
  } else console.log(`Skipping "${installer} install" step`);

  function formatCommand(command, description) {
    return "  " + command.padEnd(17) + colors.dim(description);
  }

  console.log(``);
  console.log(colors.bold(colors.underline(`Quickstart:`)));
  console.log(``);
  console.log(`  cd ${targetDirectoryRelative}`);
  console.log(`  ${installer} start`);
  console.log(``);
  console.log(colors.bold(colors.underline(`All Commands:`)));
  console.log(``);
  console.log(
    formatCommand(
      `${installer} install`,
      `Install your dependencies. ${
        toInstall
          ? "(We already ran this one for you!)"
          : "(You asked us to skip this step!)"
      }`
    )
  );

  console.log(
    formatCommand(`${installer} start`, "Start your development server.")
  );

  console.log(
    formatCommand(
      `${installer} run build`,
      "Build your website for production."
    )
  );

  console.log(``);
})();
