#!/usr/bin/env node
"use strict";
const sade = require("sade");
const path = require("path");
const commands = require("./commands");

const pkg = require(path.join(__dirname, "..", "package.json"));

const prog = sade("sweet-potato-cooker");

prog.version(pkg.version);

prog
  .command("build")
  .describe("Generates a production build")
  .option("--env", ".env file to use", "process")
  .action(commands.build);

prog
  .command("start")
  .describe("Build a local version and start a development server")
  .option(
    "--asset-logger",
    "Store and logs a list of potential extraneous assets on the project",
    false
  )
  .option("--port", "Port to bind", 8080)
  .option("--host", "Hostname to bind", "localhost")
  .option("--open", "Automatic web browser launching", false)
  .action(commands.start);

prog
  .command("compress")
  .describe(
    "Overwrites all images in a directory with their compressed and optimized versions"
  )
  .option("--directory", "Directory to look for images", "/public")
  .action(commands.compress);

prog
  .command("clean")
  .describe("Deletes all cache and output folders")
  .option("--cache", "Deletes cache", true)
  .action(commands.clean);

prog.parse(process.argv);
