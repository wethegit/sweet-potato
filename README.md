# sweet-potato 🍠
An opinionated and minimal static website generator.  
The goal is to be simple and allow the composing and styling of pages without getting in the way and with minimal footprint.  

🐶    [Pug](https://pugjs.org/api/getting-started.html) for templating  
🎨    [Sass](https://sass-lang.com/) for styling  
😇    and vanilla Javascript

## Quick start
Use the [swee-potato-peeler](https://github.com/wethegit/sweet-potato/tree/main/peeler) to quickly scaffold a new project and get started.
```sh
$ npx @wethegit/sweet-potato-peeler my-website
$ cd my-website
$ npm start
```

## Pages
TODO: write about the pages/ structure and globals variables

## Localization
TODO: write about localization and yaml

## Static assets
All files inside a `public/` directory in the root of the project are considered static and will be copied over to the `build/` directory. It's the perfect place to add images, videos and any other file that should be public.  
The [sweet-potato-cooker](https://github.com/wethegit/sweet-potato/blob/main/cooker/README.md#compressing-and-optimizing-assets) also offers a way to optimize your images.  

## Environment and global variables
This project uses [dotenv](https://github.com/motdotla/dotenv) and accepts standard `.env` files.  
Only values that start with `PUBLIC_` will be accepted, this is because these values will be part of the final compiled files and available for the public.  
In addition to passing these values to [javascript files](https://esbuild.github.io/api/#define) they will also be passed to Pug template files as part of the `globals` variables.  

### Globals
In addition to values from `.env` files Pug templates and Javascript files will also receive default global variables.

#### Pug
- **NODE_ENV =** current environment mode
- **RELATIVE_ROOT =** relative path to root of `build/`
- **RELATIVE_LOCALE_ROOT =** relative path to locale root
- **LOCALE_KEY =** locale key name

#### Javascript
- **NODE_ENV =** current environment mode
- **RELATIVE_ROOT =** relative path to root of `build/`

### Example:  
```
# .env
PUBLIC_URL=http://my-website.com
```
```js
// index.js
if (NODE_ENV === 'development') console.log('In dev')
console.log(PUBLIC_URL) // from .env
```
```pug
//- index.pug
link(rel="stylesheet" href=`${globals.RELATIVE_ROOT}/global.css`)
p=globals.PUBLIC_URL //- from .env
```

## Options and customization
Under the hood, sweet-potato uses [sweet-potato-cooker](https://github.com/wethegit/sweet-potato/tree/main/cooker) to serve, bundle and optimize assets.  
For a list of all the available options check the [docs](https://github.com/wethegit/sweet-potato/tree/main/cooker#config).
