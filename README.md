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
All files inside a `public/` directory in the root of the project are considered static and will be copied over to the `build/` directory.  
It's the perfect place to add images, videos and any other file that should be public.  
The [sweet-potato-cooker](https://github.com/wethegit/sweet-potato/blob/main/cooker/README.md#compressing-and-optimizing-assets) also offers a way to optimize your images.  

## Environment variables
This project uses [dotenv](https://github.com/motdotla/dotenv) and accepts standard `.env` files. 
Only values that start with `PUBLIC_` will be accepted. This is because these values will be part of the final compiled files and available for the public.  
In addition to passing these values to [javascript files](https://esbuild.github.io/api/#define) they will also be passed to pug template files as part of the `globals` variables.  

### Example:  
```
# .env
PUBLIC_URL=http://my-website.com
```
```js
// index.js
// notice how NODE_ENV is passed by default
if (NODE_ENV === 'development') console.log('In dev')
console.log(PUBLIC_URL)
```
```pug
//- index.pug
p=globals.PUBLIC_URL
```

## Options and customization
Under the hood, sweet-potato uses [sweet-potato-cooker](https://github.com/wethegit/sweet-potato/tree/main/cooker) to serve, bundle and optimize assets.  
For a list of all the available options check the [docs](https://github.com/wethegit/sweet-potato/tree/main/cooker#config).
