# sweet-potato 🍠

An opinionated and minimal static website generator.  
The goal is to be simple and allow the composing and styling of pages without getting in the way and with minimal footprint.

🐶 [Pug](https://pugjs.org/api/getting-started.html) for templating  
🎨 [Sass](https://sass-lang.com/) for styling  
😇 and vanilla Javascript

## Requirements

- [Node](https://nodejs.org/en/) v12+

## Quick start

Use the [swee-potato-peeler](https://github.com/wethegit/sweet-potato/tree/main/peeler) to quickly scaffold a new project and get started.

```sh
$ npx @wethegit/sweet-potato-peeler my-website
$ cd my-website
$ npm start
```

## Pages

Adding pages to your site is as easy as creating folders for each of them within the `pages/` directory, and placing an `index.pug` file in each. The "root" or "home" page of your site does not need to live in its own folder—it will just need an `index.pug` file at the root of `pages/`. A site with a homepage, about page, and contact page might have a `pages/` structure like this:

```
pages/
  |-- index.pug
  |-- about/
      |-- index.pug
  |-- contact/
      |-- index.pug
```

## Localization

If you're creating localized versions of your pages (different languages), you can have all your data live in YAML files, which are accessible via the Pug templates. This will allow you, for example, to have an English page and a French page; while still only using a single page template.

### Page-specific language data

To create language-specific data files, you must include a `locales/` folder for **each page** at the **same level** as the page's Pug template (`index.pug`). Within this `locales/` folder, you must then create a `default.yaml` file for the default language. Any other languages you need should be created as appropriately-named `YAML` files. For example, the file that lives at `pages/about/locales/fr.yaml` would have a final URL path of `fr/about/`. Here's a full example of file structure, with French and Spanish localizations for each page:

```
pages/
  |-- index.pug
  |-- locales/
      |-- default.yaml
      |-- fr.yaml
      |-- es.yaml
  |-- about/
      |-- index.pug
      |-- locales/
          |-- default.yaml
          |-- fr.yaml
          |-- es.yaml
  |-- contact/
      |-- index.pug
      |-- locales/
          |-- default.yaml
          |-- fr.yaml
          |-- es.yaml
```

#### Usage

Let's say your `pages/locales/default.yaml` looked like this…

```yaml
# pages/locales/default.yaml

banner:
  title: This is the main heading
  body: This is some body copy that lives in the banner.
```

…and your `pages/locales/fr.yaml` looked like this:

```yaml
# pages/locales/fr.yaml

banner:
  title: Ceci est le titre principal
  body: Ceci est une copie du corps qui vit dans la bannière.
```

You could then access this data from within the `pages/index.pug` file, by doing:

```pug
//- pages/index.pug

header.main-header
  h1= page.banner.title
  p= page.banner.body
```

As you can see, all of the page's `YAML` data is available to the Pug template via the Pug variable: `page`.

### Global language data

You don't want to have to repeat data on every page for things like site-wide navigation, right? This is where global language data comes in. Create a `locales/` folder in the root directory of your project, which includes—at the very least—a `default.yaml` file, and any locales you want to support. These will now be available to you from within _all_ of your Pug templates, via a variable called `globals`. See the folder structure below:

```
locales/
  |-- default.yaml
  |-- fr.yaml
  |-- es.yaml
pages/
package.json
package-lock.json
```

#### Usage

Let's say your `locales/default.yaml` looked like this…

```yaml
# locales/default.yaml

nav:
  label: Main site navigation
  items:
    - label: Home
      url: /
    - label: About
      url: /about/
    - label: Contact
      url: /contact/
```

You could then access this data from within any of your Pug files, by using the `globals` variable:

```pug
//-
  layouts/_main.pug
  Let's assume this is a top-level template which gets extended on a per-page basis.

nav.main-nav(aria-label=globals.nav.label)
  ul
    each item in globals.nav.items
      li
        a(href=item.url)= item.label
```

## Javascript

All `.js` files will be transpiled and bundled with [esbuild](https://esbuild.github.io/) with the assumption that you are supporting modern browsers that have support for [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).  
Files outside the `pages/` folder won't generate an output but they will still be prettified and linted. Vendor and any other scripts that don't require bundling should be placed inside `public/` in the root of the project.

### Usage

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

## Styles

Files outside the `pages/` folder won't generate an output but they will still be prettified and linted. If using `.css` instead of `.scss`, place your files inside `public/` in the root of the project.

### Usage

```
components/
  |-- navigation/
    |-- _navigation.pug
    |-- navigation.scss
scss/
  |-- _helpers.scss
pages/
  |-- global.scss
  |-- index.pug
```

```scss
// global.scss
@import "../components/navigation";
@import "../scss/helpers";
```

This will be the output:

```
build/
  |-- index.html
  |-- global.css
```

## Static assets

All files inside a `public/` directory in the root of the project are considered static and will be copied over to the `build/` directory. It's the perfect place to add fonts, images, videos and any other file that should be public.
You should also add any `.css` or `.js` files that doesn't have to be pre-processed.  

### Asset optimization
The [sweet-potato-cooker](https://github.com/wethegit/sweet-potato/blob/main/cooker/README.md#compressing-and-optimizing-assets) also offers a way to optimize your images. Simply run:  
```sh
npx sweet-potato-cooker compress
```

## Environment and global variables

This project uses [dotenv](https://github.com/motdotla/dotenv) and accepts standard `.env` files.  
Only values that start with `PUBLIC_` will be accepted, this is because these values will be part of the final compiled files and available for the public.  
In addition to passing these values to javascript files they will also be passed to Pug template files as part of the `globals` variables.

### Globals

In addition to values from `.env` files Pug templates and Javascript files will also receive default global variables.

#### Pug

- **NODE_ENV =** current environment mode
- **RELATIVE_ROOT =** relative path from file to `build/`
- **RELATIVE_LOCALE_ROOT =** relative path to locale root
- **LOCALE_KEY =** locale key name
- **BREAKPOINTS =** breakpoints object set inside the config

#### Javascript

- **NODE_ENV =** current environment mode
- **RELATIVE_ROOT =** relative path from file to `build/`
- **BREAKPOINTS =** breakpoints object set inside the config

#### Styles

The only available global variable for styles is the **breakpoints** one, set inside the config. It needs to be imported first before you can use, see **Usage** below.  

- **breakpoints =** breakpoints object set inside the config


### Usage

`.env`:

```
PUBLIC_URL=http://my-website.com
```

`.js` files:

```js
// index.js
if (NODE_ENV === "development") console.log("In dev");
console.log(PUBLIC_URL); // from .env
```

`.pug` files:

```pug
//- index.pug
link(rel="stylesheet" href=`${globals.RELATIVE_ROOT}/global.css`)
p=globals.PUBLIC_URL //- from .env
```

`.scss` files:

```scss
@import "sweet-potato:breakpoints";

@media #{$large-up} {
  // ...
}
```

## Deploy
When you are ready to deploy, just generate a production build:

```sh
$ npm run build
```

A `build/` directory will be genrated and will contain all of the files ready to be deployed to your edge of choice.  

### Options and customization

Under the hood, sweet-potato uses [sweet-potato-cooker](https://github.com/wethegit/sweet-potato/tree/main/cooker) to serve, bundle and optimize assets.  
For a list of all the available options check the [docs](https://github.com/wethegit/sweet-potato/tree/main/cooker#config).
