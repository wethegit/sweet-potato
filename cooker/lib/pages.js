// The purpose of this function is to compile our templates
"use strict";

const pug = require("pug");
const yaml = require("js-yaml");
const fse = require("fs-extra");
const path = require("path");
const resolve = require("resolve");

// local imports
const spinners = require("../utils/spinners.js");
const helpers = require("./helpers.js");
const { getClientEnvironment } = require("./env.js");
const CONSTS = require("../utils/consts.js");

// consts
const env = getClientEnvironment();

function npmResolverPlugin() {
  return {
    resolve(filename, source, pugOptions) {
      // if file doesn't start with ~ we just return the regular resolved path
      if (filename.charAt(0) !== "~")
        return resolve.sync(filename, { basedir: path.dirname(source) });

      // we remove the tilda from the name
      const file = path.parse(filename.substring(1));
      let resolved;
      try {
        // try to resolve the module from node_modules
        resolved = resolve.sync(path.join(file.dir, file.name), {
          basedir: path.join(CONSTS.CWD, "node_modules"),
          extensions: [".pug"],
          packageFilter(pkg) {
            // looks for a pug entry inside the package.json
            return { ...pkg, main: pkg.pug || pkg.main };
          },
        });
      } catch (err) {
        spinners.fail("pages", {
          text: `Error resolving pug module path\n${filename}\n${source}\n${err.message}`,
        });
        return "";
      }

      return resolved;
    },
  };
}

function saveHtml(outputOptions, { spinnerName, source }) {
  const {
    destination,
    filepath,
    filename,
    pugFunction,
    data,
    locale,
  } = outputOptions;
  // page dest
  const dest = path.join(destination, filepath);

  let slug = filepath.split("/");
  slug = slug[slug.length - 1];

  // globals
  const relroot = path.relative(dest, CONSTS.BUILD_DIRECTORY);
  let globals = {
    ...env.raw,
    RELATIVE_ROOT: relroot ? relroot : ".",
    BREAKPOINTS: CONSTS.CONFIG.breakpoints || {},
    PAGE_SLUG: slug,
    ...data.globals,
  };

  if (locale) {
    const rellocale = path.relative(dest, destination);

    globals.RELATIVE_LOCALE_ROOT = rellocale ? rellocale : ".";
    globals.LOCALE_KEY = locale;
  }

  const outFile = path.join(dest, filename);

  // render the html with the data
  let htmlString;
  try {
    htmlString = pugFunction({
      globals,
      page: data.page,
    });
  } catch (error) {
    spinners.fail(spinnerName, {
      text: `Failed to compile template with locale variables.\n${error.message}`,
      status: "non-spinnable",
    });
    return;
  }

  return fse.outputFile(outFile, htmlString).then(() => {
    spinners.succeed(spinnerName, { text: `Done compiling ${source}` });
    return { destination, filepath, filename, html: htmlString };
  });
}

async function pages(file, localeFile) {
  if (
    (file && !fse.pathExistsSync(file)) ||
    (localeFile && !fse.pathExistsSync(localeFile))
  )
    return; // if file for some reason got removed

  let pugFiles;
  let singleLocale;

  if (file) {
    const prettified = await helpers.prettify(file, { parser: "pug" });

    // if it had linting issues we don't continue and let the
    // updates to the file trigger a new event
    if (prettified === true) return;

    if (!file.includes(CONSTS.PAGES_DIRECTORY)) return;

    // if we are dealing with anything inside /pages
    // we only compiled that specific template and locales
    pugFiles = [file];
  }

  if (localeFile) {
    let fileInfo = path.parse(localeFile);
    // if we have a locale file then we save that specific language
    // that way we only compiled that language template
    singleLocale = fileInfo.base;
    // if we are at not at the root then we find the relative template file
    // to the locale file
    if (!pugFiles && localeFile.includes(CONSTS.PAGES_DIRECTORY)) {
      // this assumes that the yaml file lives inside `locales/` just a folder deep
      pugFiles = await helpers.getFiles(path.join(fileInfo.dir, "..", "*.pug"));
    }
  }

  // If we don't have any files, then we query them all
  // this means that we are either dealing with a master pug file
  // or a master locale file
  if (!pugFiles)
    pugFiles = await helpers.getFiles(
      path.join(CONSTS.PAGES_DIRECTORY, "**", "*.pug")
    );

  spinners.add("pages", { text: "Generating pages", indent: 2 });

  // go throught all of them
  let promises = [];

  for (const file of pugFiles) {
    const prettified = await helpers.prettify(file, { parser: "pug" });

    // if it had linting issues we don't continue and let the
    // updates to the file trigger a new event
    if (prettified === true) {
      pugFiles.push(file);
      continue;
    }

    const fileSpinnerName = `${file}-c`;
    spinners.add(fileSpinnerName, { text: `Compiling ${file}`, indent: 4 });

    // get the file information and locale files
    const templateInfo = path.parse(file);

    // if file starts with underscore, we ignore it, expected as standard 👍
    if (templateInfo.name.charAt(0) == "_") continue;

    // render the pug file to a function so we can just reuse
    // that with the different locale. SUPA FAST ⚡️
    let compiledFunction;

    try {
      compiledFunction = pug.compileFile(file, {
        plugins: [npmResolverPlugin()],
      });
    } catch (error) {
      spinners.fail(fileSpinnerName, {
        text: `Error compiling template\n${file}\n${error.message}`,
        status: "non-spinnable",
      });
      continue; // skips template file
    }

    // removes the path to the pages folder for the final output
    const pagePath = templateInfo.dir.replace(CONSTS.PAGES_DIRECTORY, "");

    // Find locale files based on main updated file, if it exists
    let localeFiles;
    if (singleLocale) {
      const masterLocale = path.join(templateInfo.dir, "locales", singleLocale);

      if (!fse.pathExistsSync(masterLocale)) continue;

      localeFiles = [masterLocale];
    } else
      localeFiles = await helpers.getFiles(
        path.join(templateInfo.dir, "locales", "*.yaml")
      );

    const outputOptions = {
      destination: CONSTS.BUILD_DIRECTORY,
      filepath: pagePath,
      filename: `${templateInfo.name}.html`,
      pugFunction: compiledFunction,
      data: {
        globals: {},
        page: {},
      },
    };

    if (localeFiles.length <= 0) {
      let mainYamlFile = path.join(
        CONSTS.SOURCE_DIRECTORY,
        "locales",
        "default.yaml"
      );

      let mainYaml = {};

      if (fse.pathExistsSync(mainYamlFile)) {
        try {
          mainYaml = await fse
            .readFile(mainYamlFile, "utf8")
            .then((contents) => yaml.load(contents));
        } catch (error) {
          spinners.fail(fileSpinnerName, {
            text: `Can't compile global yaml\n${file}\n${error.message}`,
            status: "non-spinnable",
          });
        }
      }

      outputOptions.data.globals = mainYaml;

      // render the html with the data and save it
      try {
        promises.push(
          saveHtml(outputOptions, {
            spinnerName: fileSpinnerName,
            source: file,
          })
        );
      } catch (error) {
        spinners.fail(fileSpinnerName, {
          text: `Failed to save template to disk\n${JSON.stringify(
            outputOptions,
            null,
            2
          )}\n${error.message}`,
          status: "non-spinnable",
        });
        return;
      }
    } else {
      // go through the locale files
      for (const locale of localeFiles) {
        // get the file info
        const localeInfo = path.parse(locale);

        // get the main locale, if doesn't exists uses default.yaml
        let mainYamlFile = path.join(
          CONSTS.SOURCE_DIRECTORY,
          "locales",
          localeInfo.base
        );

        if (!fse.pathExistsSync(mainYamlFile))
          mainYamlFile = path.join(
            CONSTS.SOURCE_DIRECTORY,
            "locales",
            "default.yaml"
          );

        let mainYaml = {};

        if (fse.pathExistsSync(mainYamlFile)) {
          try {
            mainYaml = await fse
              .readFile(mainYamlFile, "utf8")
              .then((contents) => yaml.load(contents));
          } catch (error) {
            spinners.fail(fileSpinnerName, {
              text: `Can't compile global yaml\n${file}\n${error.message}`,
              status: "non-spinnable",
            });
            // silently skips it
          }
        }

        let localeYaml = {};
        if (fse.pathExistsSync(locale)) {
          try {
            localeYaml = await fse
              .readFile(locale, "utf8")
              .then((contents) => yaml.load(contents));
          } catch (error) {
            spinners.fail(fileSpinnerName, {
              text: `Can't compile page yaml\n${file}\n${error.message}`,
              status: "non-spinnable",
            });
            // silently skips it
          }
        }

        // render the html with the data and save it
        const options = {
          ...outputOptions,
          locale: localeInfo.name,
          destination:
            localeInfo.name !== "default"
              ? path.join(CONSTS.BUILD_DIRECTORY, localeInfo.name)
              : CONSTS.BUILD_DIRECTORY,
          data: {
            globals: mainYaml,
            page: localeYaml,
          },
        };

        try {
          promises.push(
            saveHtml(options, {
              spinnerName: fileSpinnerName,
              source: file,
            })
          );
        } catch (error) {
          spinners.fail(fileSpinnerName, {
            text: `Failed to save template to disk\n${options.destinations}\n${error.message}`,
            status: "non-spinnable",
          });
        }
      }
    }
  }

  return Promise.all(promises).then((res) => {
    // done 🎉
    spinners.succeed("pages", { text: "Done generating pages" });
    return res;
  });
}

module.exports = pages;
