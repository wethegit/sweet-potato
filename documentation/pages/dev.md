---
template: _page.pug
title: "Sweet Potato: Development"
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 9
name: Sweet Potato development
---

# Sweet potato development

To get started developing on Sweet potato you need to pull down this repo, peel a new website (for the purposes testing your development code) and set it up to use your local version instead of the published version.

This is a relatively simple proposition. Here are the basic steps to getting set up for sweet potato development:

1. Clone Sweet Potato (this repo);
2. cd into `sweet-potato/cooker`
3. Install deps

   `$> npm install`

4. Link the package

   `$> npm link`

5. Peel a new project somewhere

   `$> npx @wethegit/sweet-potato-peeler dev-site --template https://github.com/wethegit/bootstrap/tree/main`

6. cd into project and install depts

   ```
   $> cd dev-site
   $> npm install
   ```

7. Remove the cooker module files from the dev-site project

   `rm -rf node_modules/@wethegit/sweet-potato-cooker`

8. link sweet-potato to this project

   `npm link @wethegit/sweet-potato-cooker`

Now, any changes that you make to the cooker will be reflected when you run the dev-site project.
