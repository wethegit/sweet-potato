// This file makes sure that the environment variables are set
// to development and run the functions to build a local version
// of the website, it then sets the watch function to watch for changes
// and also fires a local server.
"use strict";

async function start(options) {
  // Do this as the first thing so that any code reading it knows the right env.
  process.env.BABEL_ENV = "development";
  process.env.NODE_ENV = "development";

  // Makes the script crash on unhandled rejections instead of silently
  // ignoring them. In the future, promise rejections that are not handled will
  // terminate the Node.js process with a non-zero exit code.
  process.on("unhandledRejection", (err) => {
    throw err;
  });

  // Ensure environment variables are read.
  require("../../../lib/env.js");

  const http = require("http");
  const express = require("express");

  const CONSTS = require("../../../utils/consts");
  const assets = require("../../../lib/assets.js");
  const clean = require("../../../lib/clean.js");
  const watch = require("./watch.js");
  const requestListener = require("./request-listener.js");

  const app = express();

  app.use(express.static(CONSTS.PUBLIC_DIRECTORY));
  app.get("*", requestListener);

  const server = http.createServer(app);
  const io = require("socket.io")(server);

  const host = options.host || "localhost";
  const port = options.port || 8080;

  if (options.clean) {
    await clean();
    await assets();
  }

  watch(() => {
    io.sockets.emit("browserReload");
  });

  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
}

module.exports = start;
