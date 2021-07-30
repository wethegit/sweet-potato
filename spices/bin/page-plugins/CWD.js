const CWD = function () {
  return function () {
    return { cwd: process.cwd(), direname: __dirname };
  };
};

module.exports = CWD;
