const ranges = {
  small: [false, "39.9375em"], // 639px
  medium: ["40em", "63.9375em"], // 1023px
  large: ["64em", "71.4375em"], // 1143px
  xlarge: ["71.5em", "89.4375em"], // 1440px
  xxlarge: ["90em", "99999999em"],
};

const breakpoints = {};

for (let key of Object.keys(ranges)) {
  const [lower, upper] = ranges[key];
  let breakOnly = "";

  if (lower) {
    const breakAndUp = `(min-width: ${lower})`;
    breakOnly += `${breakAndUp} and `;

    breakpoints[`${key}-up`] = breakAndUp;
  }

  breakOnly += `(max-width: ${upper})`;
  breakpoints[`${key}-only`] = breakOnly;
}

// the object output will be the following
/*
{
  'small-only': '(max-width: 39.9375em)',
  'medium-up': '(min-width: 40em)',
  'medium-only': '(min-width: 40em) and (max-width: 63.9375em)',
  'large-up': '(min-width: 64em)',
  'large-only': '(min-width: 64em) and (max-width: 71.4375em)',
  'xlarge-up': '(min-width: 71.5em)',
  'xlarge-only': '(min-width: 71.5em) and (max-width: 90em)',
  'xxlarge-up': '(min-width: 120em)',
  'xxlarge-only': '(min-width: 120em) and (max-width: 99999999em)'
}
*/

module.exports = {
  sitemap: true,
  sourceDirectory: 'src',
  breakpoints,
};
