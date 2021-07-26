---
template: _page.pug
title: "Sweet Potato: Config"
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 1
name: Configuration
---

## Configuration

Create a `sweet-potato.config.js` in the root of the project same level as `package.json` and export a config object.

```js
module.exports = {
  // Options
  buildDirectory: "dist/",
  sitemap: true,
  sourceDirectory: "src",
  breakpoints,
  pagePlugins,
};
```

### buildDirectory

**Type:** `string`  
**Default:** `build`  
Specify the directory to which build the files to.

### sourceDirectory

**Type:** `string`  
**Default:** `.`  
Specify the source directory.

### locales

**Type:** `object`  
Localization configuration.

#### locales.directoryName

**Default:** `locales`  
Name of the directory where the localization `.yaml` files live.

#### locales.defaultName

**Default:** `default`  
Name of the default locale and locale file.  
🚨 Important to note that the default locale **won't** be placed inside a sub directory. For example, a `fr.yaml` locale output will be `/fr/index.html` whereas a `default.yaml` output will be `/index.html`.

<div id="pagePlugins"></div>

### pagePlugins

**Type:** `array`  
**Default:** void

Defines a list of plugin names to load. These plugins are named as per the available [Pug plugins]('./pug-plugins.html')

#### Example

```js
pagePlugins = ["imageSize"];
```

### sassOptions

**Type:** `function`  
**Default:** `null`  
A function that will receive the file and environment as parameters and must return an object with valid [node-sass options](https://www.npmjs.com/package/node-sass).  
**Example:**

```js
{
  sassOptions: (isDev, file) => { return { // all options here } }
}
```

### sitemap

**Type:** `string || boolean`  
**Default:** `false`  
If set, will generate a `sitemap.xml` during the production build.  
If a `string` is provided, will use it as the base url.  
If `true`, will use the `PUBLIC_URL` value from the `.env` file.

### breakpoints

**Type:** `object`  
**Default:** `false`

An object with key/value pair where the key is the name of the breakoint and the value is a valid **media query**.  
These will be passed to `pug`, `scss` and `js` files.

#### Example

```js
{
  breakpoints: {
    'medium-up': '(min-width: 768px)',
    'large-up': '(min-width: 1024px)',
    'medium-only': '(min-width: 768px) and (max-width: 1023px)'
  }
}
```

### ignoreOnWatch

**Type:** `array`  
**Default:** `false`

Defines files/paths to be ignored during local development.  
By default the following are ignored:

- "node_modules"
- ".git"
- "build"
