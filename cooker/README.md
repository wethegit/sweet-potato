# sweet-potato-cooker 👩‍🍳

An opinionated static site generator that uses [Pug](https://pugjs.org/api/getting-started.html) as a template engine with `yaml` files for localization and [Sass](https://sass-lang.com/) for styles.

> `sweet-potato-cooker` is part of the `sweet-potato` suite of tools. For information on how to structure the project check the [sweet-potato docs](https://github.com/wethegit/sweet-potato).

## Usage

Initiate a new project with npm and install.

```sh
npm init
npm install --save-dev @wethegit/sweet-potato-cooker
```

Create a `pages/` folder and an `index.pug` file.

```sh
mkdir pages
touch pages/index.pug
```

You are all set!

### 🍽 Development

Serves it and watches for changes on the project:

```sh
npx sweet-potato-cooker start
```

### 👷‍♀️ Production

This builds your project into a directory named `build/` that you can deploy to your edge of choice.

```sh
npx sweet-potato-cooker build
```

Note: for a quicker setup it's recommended to add these scripts to `package.json`.

```js
"scripts": {
  "start": "sweet-potato-cooker start",
  "build": "sweet-potato-cooker build"
}
```

## See all commands & options

```sh
npx sweet-potato-cooker --help
```

## Config

Create a `sweet-potato.config.js` in the root of the project same level as `package.json` and export a config object.

```js
module.exports = {
  // Options
  buildDirectory: "dist/",
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
- ".vscode"
- "package.json"
- "package-lock.json"
- "yarn-lock.json"

#### Example

```js
{
  ignoreOnWatch: ["Dockerfile", "server/"];
}
```
