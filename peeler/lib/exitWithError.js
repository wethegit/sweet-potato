function exitWithError(message, opts) {
  logger.error(message, opts);
  console.error("Cannot continue safely. Exiting...");
  process.exit(1);
}

module.export = exitWithError;
