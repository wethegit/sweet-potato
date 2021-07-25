---
template: _page.pug
title: "Sweet Potato: Pages"
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 2
name: Pages
css: [page.css, types.css]
---

## Pages

Adding pages to your site is as easy as creating folders for each of them within the pages/ directory, and placing an index.pug file in each.

The "root" or "home" page of your site does not need to live in its own folder—it will just need an index.pug file at the root of pages/.

A site with a homepage, about page, and contact page might have a pages/ structure like this:

```
pages/
  |-- index.pug
  |-- about/
      |-- index.pug
  |-- contact/
      |-- index.pug
```

For detail on how pug works, check out the [pug website](https://pugjs.org/api/getting-started.html)

### Markdown pages

In addition to pages created with pug, it is also possible to use markdown files to generate pages. If you choose to use markdown files, they need to be formatted in a particular way.

At the top of every markdown page you create, there needs to be a block of variables included inside a variable block. This looks like this:

```md
---
template: _page.pug
---

# Markdown page content goes here.
```

The only variable that's necessary in that block is the template variable. It should point to a pug file which is used to render the page. The data from the markdown file gets passed into the `page` variable of the supplied pug template. To render the content of the above markdown file, just reference `page.content` within the pug file.

#### Extra variables

In addition to the above, you can pass additional variables for the rendering pug page simply by including them within the template block. Consider the following:

```md
---
template: _page.pug
title: "Sweet Potato: Pages"
description: Sweet Potato
css: [page.css, types.css]
---
```

This page could then be rendered as follows in the supplied `_page.pug`.

```pug
include ../components/navigation/_navigation.pug

doctype html
html(lang="en-US")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    meta(http-equiv="X-UA-Compatible", content="ie=edge")

    meta(
      name="description",
      content=`${page.description}`
    )
    title!=page.title

    link(rel="stylesheet", href="./index.css")

  body
    header.grid
      .main-content
        h1!=page.title

    main.grid
      .main-content
        !=page.content
```

### Language and the page object

Language information is included in the `page` object and reflects the structure included in your localisation yaml files.

If you have the following yaml file:

```yaml
header:
  h1: Lorem ipsum
  h3: Exercitation aliquip ipsum
```

You can address the h1 as:

```pug
h1!= page.header.h1
```

For more information on language files and localization, please see [3. Language and Localisation](https://github.com/wethegit/sweet-potato/wiki/3.-Language-and-Localisation).

### Globals

During development you will sometimes want to use global and environment variable supplied at compile time. For example, you might want to refer to the root of the website without making assumptions as to where the current document exists in the tree, like so:

```pug
+script({ src: `${globals.RELATIVE_ROOT}/home.js` })
```

All compile-time variables live in the `globals` object and include true globals, relative (to document) variables, environment variables, the contents of `/locales/default.yml`, and runtime globals.

#### True globals

**BREAKPOINTS**  
_globals.BREAKPOINTS_

An object containing all of the breakpoints provided by the configuration. To output what these values are for review and debugging, add the following to your pug template:

```pug
  dl
    each val, i in globals.BREAKPOINTS
      dt!= i
      dd!= val
```

#### Relative variables

Relative variables relate to the page or the locale being compiled.

**RELATIVE_ROOT**  
_globals.RELATIVE_ROOT_

The relative location of the website root. Most often this is used to refer to assets like images, CSS or JS file etc.

**PAGE_SLUG**  
_globals.PAGE_SLUG_

The slug of the page being compiled.

**PATH_NAME**  
_globals.PATH_NAME_

PATH_NAME is a global pug variable that describes the path name component of the URL. Useful for operations like determining URL etc.

For example, the path name of this page would be `/sweet-potato/pages.html`

**RELATIVE_LOCALE_ROOT**  
_globals.RELATIVE_LOCALE_ROOT_

The relative location of the locale root.

**LOCALE_KEY**  
_globals.LOCALE_KEY_

The key for the locale the page belongs to. If the page exists on the root locale, this value will be `default`.

#### Environment variables

Any variables present in the project .env file being used will also be present on the global option. By default this includes `PUBLIC_URL`, however anything you want to change from environment to environment can be included here.

**PUBLIC_URL**  
_globals.PUBLIC_URL_

The full public URL of the website. this is useful when you want to include a fully canonical link to something on the website and its inclusion in the env files allows this to change from environment to environment. For more information on environments and environment variables, please see [Environment](https://github.com/wethegit/sweet-potato/wiki/Environments)

### Model

The model - or runtime globals - allow you to populate an object with variables statically, dynamically or drawn from an API at compile time.

For more information on model use, see [Models]('./model.html')
