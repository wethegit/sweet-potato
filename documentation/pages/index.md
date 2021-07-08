---
template: _page.pug
title: Sweet Potato
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 0
name: Introduction
---

## Introduction

Sweet Potato is an opinionated and minimal static website generator.

The goal is to be simple and allow the composing and styling of pages without getting in the way and with minimal footprint.

- 🐶 Pug for templating
- 👓 Sass for styling
- 🍦 Vanilla Javascript
- 📚 YAML for data.

### Requirements

Node >= v14, < v16

## Quick Start

### Set up

Use the sweet potato peeler to create a new project. In it's most basic form, you can set up and start working on a new project like so:

```
$> npx @wethegit/sweet-potato-peeler my-website
$> cd my-website
$> npm run start
```

This will give you all of the elements that you might need out of the box.

### Template flag

```
--template
```

If you would prefer to start from a specific template, you can use one of the tree templates available at in the [bootstrap repo](https://github.com/wethegit/bootstrap/).

Current publicly available templates are:

- default

  Perfect for projects with multiple localizations and complex page compositions.

- minimal

  Ideal for landing pages, anything that won't require complex layouts.

```
$> npx @wethegit/sweet-potato-peeler my-website --template default
```

## Finally

This documentation is written and compiled using sweet potato! So if you want a living, breathing example, clone the repo and look through this implementation.
