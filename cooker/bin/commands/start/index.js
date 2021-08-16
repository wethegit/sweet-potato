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
  // For out server, we don't wanna throw/kill the process
  // because all the logs will be output to the terminal and also
  // to the page, so you can just fix it and keep going
  process.on("unhandledRejection", (err) => {
    // throw err;
  });

  // Ensure environment variables are read.
  const { loadEnv } = require("../../../lib/env.js");

  loadEnv();

  const http = require("http");
  const express = require("express");
  const { config, logger } = require("@wethegit/sweet-potato-utensils");

  const watch = require("./watch.js");
  const requestListener = require("./request-listener.js");

  let app;
  let server;
  const servers = [];

  // Start express app
  app = express();

  app.use(express.static(config.PUBLIC_DIRECTORY));
  app.get("*", requestListener);

  const { networkInterfaces } = require("os");

  const nets = networkInterfaces();
  const netresults = Object.create(null); // Or just '{}', an empty object

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (net.family === "IPv4" && !net.internal) {
        if (!netresults[name]) {
          netresults[name] = [];
        }
        netresults[name].push(net.address);
      }
    }
  }

  // Create our servers and socket instance
  servers.push(http.createServer(app));
  for (let i in netresults) {
    if (netresults[i].length) {
      const s = http.createServer(app);
      servers.push(s);
    }
  }
  // server = http.createServer(app);

  const io = require("socket.io")(server);
  const host = options.host || "localhost";
  let port = options.port || 8080;
  let attempts = 0;
  const maxAttempts = 3;
  const start = () => {
    console.log("starting", attempts)
    attempts++;
    // listen to hits on the host
    servers[0].listen(port, host);
    let i = 1;
    for (let name in netresults) {
      if (netresults[name].length) {
        const s = servers[i++];
        s.listen(port, netresults[name][0]);
      }
    }
  };

  // watch for changes
  let debouncer;
  watch(() => {
    clearTimeout(debouncer);

    debouncer = setTimeout(() => {
      io.sockets.emit("browserReload");
      logger.announce("Browser reloaded");
    }, 300);
  });

  servers.forEach((server) => {
    server.on("error", (err) => {
      server.close();

      // Check if port is already in use
      if (err.code === "EADDRINUSE" && attempts <= maxAttempts) {
        logger.announce(
          `Port ${port} already in use, trying another (attempt ${attempts} of ${maxAttempts}) ...`
        );
        port++;
        // try again on another port
        start(port, host);
      } else {
        if (err.code === "EADDRINUSE")
          logger.error(
            `Unable to find a free port after ${maxAttempts} attempts.\nTry setting your own port using the --port flag.`
          );
        else logger.error("Server error", err);

        process.exit(1);
      }
    });

    server.on("listening", () => {
      const address = server.address();
      logger.start(`Server is running on http://${address.address}:${address.port}`);
      logger.announce("Watching for changes...");
    });
  });

  start(port, host);
}

module.exports = startCommand;
