---
template: _page.pug
title: "Sweet Potato: Model"
description: Sweet Potato is an opinionated and minimal static website generator, by We The Collective.
order: 4
name: Model
---

# Model

The model - or runtime globals - system allows you to populate an object with variables statically, dynamically or drawn from an API at compile time and provide them to pug for use in template rendering.

## Usage

To compile data for this object you would create a data folder relative to the page you wanted to apply it to. For example if you wanted to compile some news data, your folder structure might look like this:

```
pages/
  |-- index.pug
  |-- about/
      |-- index.pug
  |-- news/
      |-- data/
          |-- index.js
      |-- index.pug
```

The compiler will consume data/index.js file and append the result of its promise to the model object of the pug file.

### Example

Given the following folder structure:

```
pages/
  |-- index.pug
  |-- data/
      |-- index.js
```

The contents of data/index.js:

```
module.exports = async function () {
  const data = {
    testing: "Hello World",
  };
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};
```

In index.pug:

```
p!= model.testing
```

Will output "Hello World".

## Patterns

Following are some useful patterns for the use of the model system.

### Read data files

If you just want to have some files that you read the data from you can create a series of yamle files and consume them with the model index.js.

Given the following folder structure:

```
pages/
  |-- index.pug
  |-- data/
      |-- index.js
      |-- data.yaml
      |-- events.yaml
```

The contents of data/index.js:

```
const yaml = require("js-yaml");
const fse = require("fs-extra");
const path = require("path");

async function readYaml(file) {
  let result = {};

  if (!fse.pathExistsSync(file)) return result;

  try {
    const content = await fse.readFile(file, "utf8");
    result = yaml.load(content);
  } catch (error) {
    logger.error([`Can't compile yaml`, file], error);

    throw error;
  }

  return result;
}

module.exports = async function (relativepath) {
  const data = { };

  const datafiles = {};
  await fse.readdir(relativepath).then((filenames) => {
    for (let i = 0; i < filenames.length; i++) {
      const filename = filenames[i];
      if (path.extname(filename) === ".yaml") {
        datafiles[filename.split(".")[0]] = path.join(relativepath, filename);
      }
    }
  });
  for (let i in datafiles) {
    data[i] = await readYaml(datafiles[i]);
  }

  return data;
};
```

And the contents of events.yaml:

```
event1: "name:trackingID, stuiteID:2"
```

You could then address this event by using `model.events.event1` in your pug template.

### Read files to generate a navigation

TO-DO

### Read an API to provide static data to your template

TO-DO
