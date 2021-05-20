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
  .describe("Start a development server and watches for changes")
  .option("--port", "Port to bind", 8080)
  .option("--host", "Hostname to bind", "localhost")
  .action(commands.start);

prog
  .command("clean")
  .describe("Deletes all cache and output folders")
  .option("--cache", "Deletes cache", true)
  .action(commands.clean);

prog.parse(process.argv);
