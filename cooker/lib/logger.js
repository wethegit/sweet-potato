// This is just a simple wrapper around console.log to create standardized logs
const chalk = require("chalk");

// consts
const log = console.log;

const buildMessage = function (icon, message) {
  if (typeof message == "object") message = message.join(" -> ");
  return `${icon}  ${message}`;
};

const logger = {
  announce: function (message) {
    log(chalk.gray(buildMessage("📢", message)));
  },
  error: function (message, details) {
    log(chalk.red(buildMessage("⛔️", message)));
    log(chalk.red("Details:"));
    log(details);
    log(chalk.red("----------------------------"));
  },
  success: function (message) {
    log(chalk.green(buildMessage("✅", message)));
  },
  warning: function (message) {
    log(chalk.yellow(buildMessage("⚠️", message)));
  },
  start: function (message) {
    log(chalk.cyan(buildMessage("⏩", message)));
  },
  finish: function (message) {
    log(chalk.cyan(buildMessage("⏹", message)));
  },
};

module.exports = logger;
