const colors = require("kleur");

const logError = require("./logError");

module.exports = async function getRepoInfo(url) {
  let repoUrl;

  try {
    repoUrl = new URL(url);
  } catch (error) {
    if (error.code !== "ERR_INVALID_URL") logError(error);
  }

  if (!repoUrl) logError("No valid template URL provided.");

  if (repoUrl.origin !== "https://github.com") {
    logError(
      `Invalid URL: ${colors.red(
        `"${example}"`
      )}. Only GitHub repositories are supported. Please use a GitHub URL and try again.`
    );
  }

  const [, username, name, t, _branch] = repoUrl.pathname.split("/");

  return {
    username,
    name,
    branch: t === undefined ? "master" : _branch,
  };
};
