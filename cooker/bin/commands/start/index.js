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

  const http = require("http");
  const express = require("express");
  const { config, logger } = require("@wethegit/sweet-potato-utensils");

  const { loadEnv } = require("../../../lib/env.js");
  const watch = require("./watch.js");
  const requestListener = require("./request-listener.js");

  // Ensure environment variables are read.
  loadEnv();

  // Start express app
  const app = express();

  app.use(express.static(config.PUBLIC_DIRECTORY));
  app.get("*", requestListener);

  // Create our server and socket instance
  const server = http.createServer(app);
  const io = require("socket.io")(server);

  const host = options.host || "localhost";
  let port = options.port || 8080;
  let attempts = 0;
  const maxAttempts = 3;

  // watch for changes
  let debouncer;
  watch(() => {
    clearTimeout(debouncer);

    debouncer = setTimeout(() => {
      io.sockets.emit("browserReload");
      logger.announce("Browser reloaded");
    }, 300);
  });


  server.on('error', err => {
    server.close();
    // Check if port is already in use
    if(err.code === 'EADDRINUSE' && attempts <= maxAttempts) {
      logger.announce(`Port ${port} already in use, trying another (attempt ${attempts} of ${maxAttempts}) ...`)
      port++
      // try again on another port
      start(port, host);
    }
    else {
      if(err.code === 'EADDRINUSE') logger.error(`Unable to find a free port after ${maxAttempts} attempts.`, `Try setting your own port using the --port flag.`);
      else console.error(err);
      process.exit(1);
    }
  });
  
  server.on('listening', () => {
    if(attempts > 1) logger.warning(`Using port ${port}. (Port ${options.port} is already in use)`);
    logger.start(`Server is running on http://${host}:${port}`);
    logger.announce("Watching for changes...");
  })

  const start = () => {
    attempts++;
    // listen to hits on the host
    server.listen(port, host);
  }
  
  start(port, host)

}

module.exports = startCommand;
