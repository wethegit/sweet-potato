# WTC Sweet Potato

Sweet Potato is We The Collective's static site generator.

## Installation

Installation is done with the Sweet Potato Peeler, see:
https://github.com/wethegit/wtc-sweet-potato-peeler

Basically, once you have that command, just create a new, empty folder for your project then type `peel-sweet-potato`.

## Requirements

- [Node](https://nodejs.org/en/) v12+
- [npm](https://www.npmjs.com/) v6+
- [JPEGOptim](https://github.com/tjko/jpegoptim) v1.4+
- [libjpeg](http://libjpeg.sourceforge.net/) v6b+ - recommend using `brew install libjpeg` if you are on a mac

To be able to edit the project you also need familiarity with the following:

- [Pug](https://pugjs.org)
- [Sass](https://sass-lang.com/) as `.scss`
- [Git](https://git-scm.com/)

Also, if you would like to customize the build scripts even further, `Node` knowledge is required.

## Usage

Install all dependencies:  
`npm i`

Build, spawn a local server and watch for changes:  
`npm run start`

Create an optimized production build:  
`npm run production`

## Demonstrations

For demonstration and documentation of features, go to:
https://wethegit.github.io/bootstrap/

The files here are compiled from Sweet Potato, so this both shows off Sweet Potatos featues as well as demonstrating how to use them. Sweet Potato 'ception!

## How does it work

The script will output the files to a folder called `build/`.  
Anything inside `src/website/` will be compiled.
The folder structure for the src is relatively loose, there are a few requirements:

- Base locale files **MUST** be at the root of `src/`
- Template locale files **MUST** be inside a `locales/` folder inside their relative **template root**
- All template files are **REQUIRED** to have at least one `default.yaml` locale
- `src/website/assets/` **MUST** be respected and not changed

## Localizing

`default.yaml` is the default locale for the website, any other `.yaml` files inside the `src/` root is considered another locale.  
The name of the `.yaml` file will be used as the folder name for the template output.  
Locale files on the `src/` root are **extended**, they don't generate templates themselves.  
Any template locale that doesn't have a root locale will extend the default one.

## First things to do after downloading the bootstrap

### Familiarize yourself with the bootstrap

- It's highly reccomended that you install all dependencies and run a local version of the bootstrap and go through ALL of the listed features.
- After that, familiarize yorself with the `_helpers`, both for templates under `src/_helpers.pug` and for styles under `src/scss/_helpers.scss`.
- Read the component pages on github, all of the imported WTC custom components have github pages with tons of information on them.

### Update the paths

- Edit the paths inside the `.env` files.
- Edit all the information for the generated `manifest.json` file inside `build_scripts/favicons.js`.
- Edit the path for the rsync server inside `package.json`.

## Environment variables

This project is set up to use [dotenv](https://github.com/motdotla/dotenv), all variables **HAVE** be prefixed with `WTC_` so they don't overlap with `NODE` environment variables.  
The variables are passed through to javascript files and templates files.

### How and where to use .env variables?

#### Templates

You can use them inside any template file simply by their names, so for example `p=WTC_TLDN` would print a paragraph with the `WTC_TLDN` value.

#### Javascript

You can use the variables inside any Javascript file by reading them from the process enviroment, for example `process.env.WTC_PUBLIC_URL`.

## Important notes

- Code will be checked with linters, [ESLint](https://eslint.org/) for `.js` files and [stylelint](https://github.com/stylelint/stylelint) for `.scss` files, and coding style will be enforced with [prettier](https://prettier.io/) for `.js`, `.scss` and `.yaml` files.
- Assets **WILL NOT** be compressed during development, only production.
- If not using the peeler to start a new project, delete the `/peeler/` folder from the root
