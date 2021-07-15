---
template: _page.pug
title: "Sweet Potato: Styles"
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 6
name: Styles
---

## Styles

All styles are compiled from scss files and use standard sass syntax.

Files outside the `pages/` folder won't generate an output. If using regular `.css` instead of `.scss`, place your files inside `public/` in the root of the project.

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

```
