---
template: _page.pug
title: "Sweet Potato: Javascript"
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 4
name: Javascript
---

# Javascript

All .js files will be transpiled and bundled with esbuild with the assumption that you are supporting modern browsers that have support for ESM.

Files outside the pages/ folder won't generate an output.
Vendor and any other scripts that don't require bundling should be placed inside public/ in the root of the project.

## Usage

Always append your scripts to the javascript block, like so:

```pug
block append scripts
  +script({ src: `${globals.RELATIVE_ROOT}/home.js` })
```

```
components/
  |-- navigation/
    |-- _navigation.pug
    |-- navigation.js
pages/
  |-- index.js
  |-- index.pug
```

```js
// index.js
import Navigation from "../components/navigation/navigation.js";
```

This will be the output:

```
build/
  |-- index.html
  |-- index.js
```

## Environment variables

When writing javascript, you'll sometimes want access to environment variables. There are two environment variables that are supplied by the build process and the others come from the .env files. You can access environment variables from any javascript file.

The default env variables supplied are:

- process.env.RELATIVE_ROOT

  The root of the website relative to the compiled javascript file.

- process.env.PUBLIC_URL

  The public full URL of the website.

- process.env.BREAKPOINTS[""]

  A series of brackpoints as defined by the sweet potato config.

In addition to the above, it's also possible to provide additional environment variables to javascript via the various .env files.

### Note

Even though the syntax of the variables look like an object within javascript, these variables are being generated using a simple regex syntax at compile time. As such, trying to access the object structure itself will yield an error. For example:

```js
console.log(process.env.RELATIVE_ROOT); // '..'
console.log(process.env); // Uncaught ReferenceError: process is not defined
```
