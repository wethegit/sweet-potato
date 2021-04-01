# sweet-potato-peeler 🍠🍴

Easily create a new sweet-potato project.

```sh
npx @wethegit/sweet-potato-peeler my-dir --template default [--use-yarn | --use-pnpm | --no-install]
```

## Available templates

### default

Perfect for projects with multiple localizations and complex page compositions.

### minimal

Ideal for landing pages, anything that won't require complex layouts.

## Github templates

You can also provide a Github URL to a template and even a specific branch.

### Basic

```sh
npx @wethegit/sweet-potato-peeler my-dir --template https://github.com/[user]/[repo-name]
```

### Branch specific

```sh
npx @wethegit/sweet-potato-peeler my-dir --template https://github.com/[user]/[repo-name]/tree/[branch-name]
```
