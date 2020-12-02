const DOMTokenListSupports = function (tokenList, token) {
  if (!tokenList || !tokenList.supports) {
    return;
  }
  try {
    return tokenList.supports(token);
  } catch (e) {
    if (e instanceof TypeError) {
      console.log("The DOMTokenList doesn't have a supported tokens list");
    } else {
      console.error("That shouldn't have happened");
    }
  }
};

const linkSupportsPreload = DOMTokenListSupports(
  document.createElement("link").relList,
  "preload"
);

export { linkSupportsPreload as default, DOMTokenListSupports };
