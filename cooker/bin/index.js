#!/usr/bin/env node
const sade = require("sade");
const path = require("path");
const commands = require("./commands");

const pkg = require(path.join(__dirname, "..", "package.json"));

const prog = sade("wtc-bootstrap");
prog.version(pkg.version);
prog
  .command("build")
  .describe("Create a production build")
  .action(commands.build);
prog
  .command("start")
  .describe("Start a development server")
  .action(commands.start);
prog.parse(process.argv);
