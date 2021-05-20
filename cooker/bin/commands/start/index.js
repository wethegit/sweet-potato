// This file makes sure that the environment variables are set
// to development and run the functions to build a local version
// of the website, it then sets the watch function to watch for changes
// and also fires a local server.
"use strict";

async function startCommand(options) {
  // Do this as the first thing so that any code reading it knows the right env.
  process.env.BABEL_ENV = "development";
  process.env.NODE_ENV = "development";

  // Makes the script crash on unhandled rejections instead of silently
  // ignoring them. In the future, promise rejections that are not handled will
  // terminate the Node.js process with a non-zero exit code.
  process.on("unhandledRejection", (err) => {
    throw err;
  });

  process.on("SIGINT", function () {
    console.log(` `);
    console.log("Gracefully shutting down from SIGINT (Ctrl-C)");
    process.exit(0);
  });

  // Ensure environment variables are read.
  const { loadEnv } = require("../../../lib/env.js");

  loadEnv();

  const http = require("http");
  const express = require("express");
  const { config, logger } = require("@wethegit/sweet-potato-utensils");

  const watch = require("./watch.js");
  const requestListener = require("./request-listener.js");

  // Start express app
  const app = express();

  app.use(express.static(config.PUBLIC_DIRECTORY));
  app.get("*", requestListener);

  // Create our server and socket instance
  const server = http.createServer(app);
  const io = require("socket.io")(server);

  const host = options.host || "localhost";
  const port = options.port || 8080;

  // watch for changes
  let debouncer;
  watch(() => {
    clearTimeout(debouncer);

    debouncer = setTimeout(() => {
      io.sockets.emit("browserReload");
      logger.announce("Browser reloaded");
    }, 300);
  });

  // listen to hits on the host
  server.listen(port, host, () => {
    logger.start(`Server is running on http://${host}:${port}`);
    logger.announce("Watching for changes...");
  });
}

module.exports = startCommand;
