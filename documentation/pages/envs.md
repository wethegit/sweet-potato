---
template: _page.pug
title: "Sweet Potato: Environments and environment variables"
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 6
name: Environments and environment variables
---

## Environments and environment variables

This project uses [dotenv](https://github.com/motdotla/dotenv) and accepts standard `.env` files.  
Only values that start with `PUBLIC_` will be accepted, this is because these values will be part of the final compiled files and available for the public.  
In addition to passing these values to javascript files they will also be passed to Pug template files as part of the `globals` variables.

### Globals

In addition to values from `.env` files Pug templates and Javascript files will also receive default global variables.

#### Pug

- **globals.NODE_ENV =** current environment mode
- **globals.RELATIVE_ROOT =** relative path from file to `build/`
- **globals.RELATIVE_LOCALE_ROOT =** relative path to locale root
- **globals.LOCALE_KEY =** locale key name
- **globals.BREAKPOINTS =** breakpoints object set inside the config
- **globals.PAGE_SLUG =** current page's slug

#### Javascript

- **process.env.NODE_ENV =** current environment mode
- **process.env.RELATIVE_ROOT =** relative path from file to `build/`
- **process.env.BREAKPOINTS =** breakpoints object set inside the config

#### Styles

The only available global variable for styles is the **breakpoints** one, set inside the config. It needs to be imported first before you can use, see **Usage** below.

- **sweet-potato:breakpoints =** breakpoints object set inside the config

### Usage

`.env`:

```
PUBLIC_URL=http://my-website.com
```

`.js` files:

```js
// index.js
if (process.env.NODE_ENV === "development") console.log("In dev");
console.log(process.env.PUBLIC_URL); // from .env
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

### Specifying other environments

Other environments can be used in different situations. For example to pass a different environment file to the build you would simply run:

```bash
$> sweet-potato-cooker build --env buildkind
```

Which would make the build use the file `.env.buildkind`
