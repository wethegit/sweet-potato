const colors = require("kleur");

const errorAlert = `${colors.red("[ERROR]")}`;
const errorLink = `${colors.dim(
  colors.underline("https://github.com/wethegit/sweet-potato/")
)}`;

module.exports = function logError(msg, showLink = false) {
  console.error(`${errorAlert} ${msg} ${showLink && errorLink}`.trim());
  console.error("Cannot continue safely. Exiting...");
  process.exit(1);
};
