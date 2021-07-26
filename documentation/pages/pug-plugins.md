---
template: _page.pug
title: "Sweet Potato: Pug plugins"
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 2.1
name: Pug plugins
css: [page.css, types.css]
---

## Pug plugins

Following are the avaiable pug plugins.

### Image size

The image size plugin expects a path to an image on the files system and returns an object containing its width and height in pixels.

#### Example

```pug
  - const { width, height } = functions.imageSize('./src/public/assets/img/image.png')
  img(src="/assets/img/image.png" width=width height=height)
```
