const sizeOf = require("image-size");

const imageSize = function (imageURL) {
  return sizeOf(imageURL);
};

module.exports = imageSize;
