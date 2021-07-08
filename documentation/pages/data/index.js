const fse = require("fs-extra");
const path = require("path");
const matter = require("gray-matter");

const walk = async function (dir, rootpath) {
  const results = [];
  await fse.readdir(dir).then(async (filenames) => {
    for (let i = 0; i < filenames.length; i++) {
      const filename = filenames[i];
      const filepath = path.join(dir, filename);
      const file = await fse.stat(filepath);
      if (path.extname(filename) === ".md") {
        const mdfile = matter.read(filepath);
        results.push({
          dir: path.relative(rootpath, dir),
          name: filename.split(".")[0],
          order: mdfile.data.order || 0,
          title: mdfile.data.name || filename.split(".")[0],
        });
      } else if (file.isDirectory()) {
        const subdir = await walk(filepath, rootpath);
        if (subdir.length) results.push(subdir);
      }
    }
  });
  results.sort(function (a, b) {
    return (a.order || 0) - (b.order || 0);
  });
  return results;
};

module.exports = async function () {
  const data = {};
  const page_path = path.join(process.env.INIT_CWD, "pages");
  return new Promise(async function (resolve, reject) {
    const filedata = await walk(page_path, page_path);
    console.log(filedata);
    data.pages = filedata;
    resolve(data);
  });
};
