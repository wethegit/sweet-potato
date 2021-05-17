# sweet-potato-utensils 🥣

Shared utility functions and variables used across the sweet-potato packages.

## Usage

```sh
npm install @wethegit/sweet-potato-utensils
```

### config

Contains all the common paths and most importantly the **user's options**.

```js
const { config } = require("@wethegit/sweet-potato-utensils");

// get projects builld directory
config.OPTIONS.buildDirectory;
```

### getFiles

Small wrapper around the `glob` package to promisify it.

```js
const { getFiles, config } = require("@wethegit/sweet-potato-utensils");

async function getAllJPGsOnProject() {
  const jpgs = await getFiles(
    path.join(config.PUBLIC_DIRECTORY, "**", "*.jpg")
  );
  // do something with jpgs
}
```

### logger

Function that helps standardize all the logs across all packages.

```js
const { logger } = require("@wethegit/sweet-potato-utensils");

// Simple string
logger.announce("Config parsed");

// You can also pass a second argument for .error
// The logger will try its best to display the propper error message
logger.error("Couldn't compile", error);

// Pass in an array and logger will concat messages with an arrow ->
// The result of this call will be
// SUCCESS:: File saved with success -> /build/file.html
logger.success(["File saved with success", file]);

// other types of messages
logger.warning("Deprecated on next version");
logger.start("Stated compiling pages");
logger.finish("Finished compiling pages");
```
