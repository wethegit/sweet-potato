# sweet-potato-masher 🗜

Optmizes and compresses all images on a sweet-potato project.

> `sweet-potato-peeler` is part of the `sweet-potato` suite of tools. For information on how to structure a project check the [sweet-potato docs](https://github.com/wethegit/sweet-potato).


## Usage

```sh
npx @wethegit/sweet-potato-masher [--directory]
```

`directory` is optional and the default is the projects `public/` folder.  
After running the masher, it will create a cache file named `sweet-potato-masher.cache.json` on the root of the project.  
That file should be commited with your project so you avoid recompressing the same files.

## Options

Granular compression options can be set by creating a file named `sweet-potato.config.js` on the root of the project.  
The same file used by the [`sweet-potato-cooker`](https://github.com/wethegit/sweet-potato/tree/main/cooker#config).

```js
// sweet-potato.config.js
module.exports = {
  compress: {
    imageminMozjpeg: {
      quality: 70,
    },
    imageminPngquant: {
      quality: [0.65, 0.95],
      speed: 1
    },
    imageminGifsicle: {},
    imageminSvgo: {
      plugins: extendDefaultPlugins([{ name: "removeViewBox", active: false }]),
    },
  }
}
```

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
