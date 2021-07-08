---
template: _page.pug
title: "Sweet Potato: Static assets"
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 7
name: Static assets
---

## Static assets

All files inside a `public/` directory in the root of the project are considered static and will be copied over to the `build/` directory.  
It's the perfect place to add fonts, images, videos and any other file that should be public.  
You should also add any `.css` or `.js` files that doesn't have to be pre-processed.

### Asset optimization

Use the [sweet-potato-masher](https://github.com/wethegit/sweet-potato/tree/main/masher) to optimize yor images. Simply run:

```sh
npx @wethegit/sweet-potato-masher
```
