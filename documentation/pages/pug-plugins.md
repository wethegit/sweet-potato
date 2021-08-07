---
template: _page.pug
title: "Sweet Potato: Pug plugins"
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 2.1
name: Pug plugins
css: [page.css, types.css]
---

## Pug plugins

Following are the avaiable pug plugins. To see how to include these plugins, see [plugin configuration](./config.html#pagePlugins)

### Image size

_@wethegit/sweet-potato-cooker/page-plugins_  
The image size plugin expects a path to an image on the files system and returns an object containing its width and height in pixels.

#### Options

None.

#### Example

**Sweet potato config**

```js
const { imageSize } = require("@wethegit/sweet-potato-cooker/page-plugins");
module.exports = {
  sitemap: true,
  sourceDirectory: "src",
  breakpoints,
  pagePlugins: {
    imageSize: imageSize(),
  },
};
```

**Usage**

```pug
  - const { width, height } = functions.imageSize('./src/public/assets/img/image.png')
  img(src="/assets/img/image.png" width=width height=height)
```
