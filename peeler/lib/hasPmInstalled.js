const execa = require("execa");

module.exports = function hasPmInstalled(packageManager) {
  try {
    execa.commandSync(`${packageManager} --version`);
    return true;
  } catch (err) {
    return false;
  }
};
