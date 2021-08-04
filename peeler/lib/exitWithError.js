const { logger } = require("@wethegit/sweet-potato-utensils");

function exitWithError(message, opts) {
  logger.error(message, opts);
  console.error("Cannot continue safely. Exiting...");
  process.exit(1);
}

module.exports = exitWithError;
