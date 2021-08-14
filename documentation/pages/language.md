---
template: _page.pug
title: "Sweet Potato: Language and localisation"
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 3
name: Language and localisation
---

## Language and localisation

### Language

Language is provided to a document via yaml or markdown files in the locales folder of each specific page. If you had a website with a homepage and about page in English and French, its structure might look something like this:

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
├── index.pug
├── locales/
│   ├── default.yaml
│   ├── fr.yaml
│   ├── es.yaml
├── about/
│   ├── index.pug
│   └── locales/
│       ├── default.yaml
│       ├── fr.yaml
│       ├── es.yaml
└── contact/
    ├── index.pug
    └── locales/
        ├── default.yaml
        ├── fr.yaml
        └── es.yaml
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

### Language globals

In addition to page specific language assets, there are also globally available language variables. These are edited in the `src/locales` folder and are availabele to pug under the `globals` object.

Consider the following file structure

```
src/
├── locales/
│   ├── default.yaml
│   └── fr.yaml
└── pages/
    └── index.pug
```

The variables defined in the the top-level locales files will be globally available to the relevant locales.

##### Example

Let's say your `src/locales/default.yaml` looked like this…

```yaml
# src/locales/default.yaml

main_nav:
  title: Main site navigation
```

You could then access this data from within the `pages/index.pug` file, by doing:

```pug
//- pages/index.pug

header.main-header
  nav
    h2= globals.main_nav.title
```

### Supported language files

Currently yaml and markdown files are supported for language files. If more than one language file is present for a specific locale, they'll be concatenated together.

Markdown language files are contructed using matter style layout so they can include a block of variables at the top that extend the object further. Any markdown content rendered will be included in the variable `page.markdownContent`

##### Example

Consider the following structure

```
src/
├── locales/
│   ├── default.yaml
│   └── default.md
└── pages/
    └── index.pug
```

default.yaml looks like this:
```yaml
main_nav:
  title: Main site navigation
```

defualt.md looks like this:
```md
---
anchor: maincontent
---

# This is some markdown content
- see
- how
- it
- flows
```

This will generate a language object that looks something like this:
```
{
  main_nav: {
    title: Main site navigation
  },
  anchor: 'maincontent',
  markdownContent: '<h1>This is some markdown content</h1>\n' +
    '<ul>\n' +
    '<li>see</li>\n' +
    '<li>how</li>\n' +
    '<li>it</li>\n' +
    '<li>flows</li>\n' +
    '</ul>\n'
}
```