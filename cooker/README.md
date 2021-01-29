# sweet-potato-cooker 🍠👩‍🍳

An opinionated static site generator that uses [Pug](https://pugjs.org/api/getting-started.html) as a template engine with `yaml` files for localization and [Sass](https://sass-lang.com/) for styles.  
For information on how to structure the project check the [sweet-potato docs](https://github.com/wethegit/sweet-potato).

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

### Serve your project locally

This builds a local version of the website into a `build/` directory, serves it and watches for changes on the project.

```sh
npx sweet-potato-cooker start
```

### Build your project

This builds your project into a static `build/` directory that you can deploy anywhere.

```sh
npx sweet-potato-cooker build
```

Note: for a quicker setup it's recommended to add these scripts to `package.json`.

```js
"scripts": {
  "start": "sweet-potato-cooker dev",
  "build": "sweet-potato-cooker build"
}
```

Then just run `npm start/build`

### Compressing and optimizing assets

⚠️ This command is destructive and will overwrite the original files.  
This compresses and optimizes all `.jpg`, `.png`, `.svg`, `.gif` files in a given directory, default is `public/`.  

```sh
npx sweet-potato-cooker compress
```

## See all commands & options

```sh
npx sweet-potato-cooker --help
```

## Config

The cooker can be customized to an extent.
Create a `sweet-potato-cooker.config.js` in the root of the project, same level as `package.json`.

```js
module.exports = {
  // Options
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

### favicon

**Type:** `object`  
**Default:**

```js
{
  sourceFile: "",
  destination: "favicons",
  outputTags: "log",
  generatorOptions: {
    appName: "Your App Name",
    appShortName: "Short App Name",
    appDescription:
      "Mollit consequat velit nostrud tempor amet in ad cupidatat aliquip culpa tempor in aliqua.",
    developerName: "we { the collective }",
    developerURL: "http://www.wethecollective.com",
    background: "#fff",
    theme_color: "#fff",
  }
}
```

Given a `sourceFile` all modern and standard favicon images will be generated into the given `destination` directory inside the `buildDirectory` provided above.

#### favicon.sourceFile

**Type:** `string`  
**Default:** `''`  
A PNG with the minimum of 512x512px dimension.

#### favicon.destination

**Type:** `string`  
**Default:** `favicons`  
The directory inside the `buildDirectory` to save the generated images to.

#### favicon.outputTags

**Type:** `string`  
**Default:** `log`  
If provided a path to a directory, it will save a `favicons.html` file with all the meta tags from the output.  
`log` will output the tags to terminal.

#### favicon.generatorOptions

**Type:** `object`  
**Default:**

```js
{
  appName: "Your App Name",
  appShortName: "Short App Name",
  appDescription:
    "Mollit consequat velit nostrud tempor amet in ad cupidatat aliquip culpa tempor in aliqua.",
  developerName: "we { the collective }",
  developerURL: "http://www.wethecollective.com",
  background: "#fff",
  theme_color: "#fff",
}
```

A list of valid [favicons](https://www.npmjs.com/package/favicons) options.

### sitemap

**Type:** `string|boolean`  
**Default:** `false`  
If set, will generate a `sitemap.xml` during the production build.  
If `true`, will use the `PUBLIC_URL` value from the `.env` file.

### compress

**Type:** `object`  
**Default:**

```js
{
  imageminMozjpeg: {
    quality: 70,
  },
  imageminPngquant: {
    quality: [0.65, 0.95],
    speed: 1
  },
  imageminGifsicle: {},
  imageminSvgo: {
    plugins: [{ removeViewBox: false }],
    multipass: true,
  }
}
```

Contains all the options to be passed to their respective compressing modules. This is used with the `compress` command.

#### compress.imageminMozjpeg

**Type:** `object`  
**Default:**

```js
{
  quality: 70,
}
```

A list of valid [imagemin-mozjpeg](https://www.npmjs.com/package/imagemin-mozjpeg) options.

#### compress.imageminPngquant

**Type:** `object`  
**Default:**

```js
{
  quality: [0.65, 0.95],
  speed: 1
}
```

A list of valid [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) options.

#### compress.imageminGifsicle

**Type:** `object`  
**Default:** `{}`
A list of valid [imagemin-gifsicle](https://www.npmjs.com/package/imagemin-gifsicle) options.

#### compress.imageminSvgo

**Type:** `object`  
**Default:**

```js
{
  plugins: [{ removeViewBox: false }],
  multipass: true,
}
```

A list of valid [imagemin-svgo](https://www.npmjs.com/package/imagemin-svgo) options.
