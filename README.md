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
TODO: write about the public/ folder and compressing images

## Environment variables
This project uses [dotenv](https://github.com/motdotla/dotenv) and accepts standard `.env` files.  
In addition to passing these values to [javascript files](https://esbuild.github.io/api/#define), it also passes them to your pug template files as part of the `globals` variables.  

## Customization
Under the hood, sweet-potato uses [sweet-potato-cooker](https://github.com/wethegit/sweet-potato/tree/main/cooker) to serve, bundle and optimize assets.  
For a list of all the available options check the [docs](https://github.com/wethegit/sweet-potato/tree/main/cooker#config).
