---
template: _page.pug
title: "Sweet Potato: Language and localisation"
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 3
name: Language and localisation
---

## Language and localisation

### Language

Language is provided to a document via yaml files in the locales folder of each specific page. If you had a website with a homepage and about page in English and French, its structure might look something like this:

```
pages/
├── locales/
│   ├── default.yml
│   ├── en.yml
│   └── fr.yml
├── index.pug
└── about/
    ├── index.pug
    └── locales/
        ├── default.yml
        ├── en.yml
        └── fr.yml

```

One important note here is that localised language files _extend_ the default. So if you were to provide a language asset in default and not in en, then the default will be present in en pages.

### Localisation

If you're creating localized versions of your pages (different languages), you can have all your data live in YAML files, which are accessible via the Pug templates.

This will allow you, for example, to have an English page and a French page; while still only using a single page template.

#### Page-specific language data

To create language-specific data files, you must include a locales/ folder for each page at the same level as the page's Pug template (index.pug).

Within this locales/ folder, you must then create a default.yaml file for the default language.

Any other languages you need should be created as appropriately-named YAML files.
For example, the file that lives at pages/about/locales/fr.yaml would have a final URL path of fr/about/.

Here's a full example of file structure, with French and Spanish localizations for each page:

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

##### Example

Let's say your pages/locales/default.yaml looked like this…

```yaml
# pages/locales/default.yaml

banner:
  title: This is the main heading
  body: This is some body copy that lives in the banner.
```

…and your pages/locales/fr.yaml looked like this:

```yaml
# pages/locales/fr.yaml

banner:
  title: Ceci est le titre principal
  body: Ceci est une copie du corps qui vit dans la bannière.
```

You could then access this data from within the pages/index.pug file, by doing:

```pug
//- pages/index.pug

header.main-header
  h1= page.banner.title
  p= page.banner.body
```

As you can see, all of the page's YAML data is available to the Pug template via the Pug variable: page.
