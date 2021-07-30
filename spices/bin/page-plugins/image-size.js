const sizeOf = require("image-size");

const imageSize = function () {
  return function (imageURL) {
    return sizeOf(imageURL);
  };
};

module.exports = imageSize;
