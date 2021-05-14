const glob = require("glob");

// This helper promisify the glob function as it still uses
// callback instead of promises, just pass a glob pattern to it
// and it will return a Promise that resolves to the glob result.
async function getFiles(pattern, options = {}) {
  const patterns = !(pattern instanceof Array) ? [pattern] : pattern;

  const allFiles = await Promise.all(
    patterns.map(
      (pattern) =>
        new Promise(function (resolve, reject) {
          glob(pattern, options, function (err, files) {
            if (err) reject(err);

            resolve(files);
          });
        })
    )
  );

  return allFiles.flat();
}

module.exports = getFiles;
