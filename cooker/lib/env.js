// this whole file is basically a copy of the create-react-app one (they know their stuff)
// It reads .env files in the correct order and adds that
// information to process.env which we then pass on to javascript and pug files
"use strict";

const fs = require("fs");
const path = require("path");

// local imports
const CONSTS = require("../utils/consts.js");
const logger = require("../utils/logger.js");
const ENV = process.env.NODE_ENV;

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
var dotenvFiles = [
  path.join(CONSTS.CWD, `.env.${ENV}.local`),
  path.join(CONSTS.CWD, `.env.${ENV}`),
  path.join(CONSTS.CWD, ".env"),
].filter(Boolean);

// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.  Variable expansion is supported in .env files.
// https://github.com/motdotla/dotenv
// https://github.com/motdotla/dotenv-expand
dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    logger.announce(`Using ${dotenvFile}`);
    require("dotenv").config({
      path: dotenvFile,
    });
  }
});

// Grab NODE_ENV and PUBLIC_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.
// They are also injected on our PUG files!
const PUBLIC_ = /^PUBLIC_/i;

function getClientEnvironment() {
  const raw = Object.keys(process.env)
    .filter((key) => PUBLIC_.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        // Useful for determining whether we’re running in production mode.
        NODE_ENV: ENV || "production",
      }
    );
  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = {
    "process.env": Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };

  return { raw, stringified };
}

module.exports = getClientEnvironment;
