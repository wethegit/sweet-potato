const sizeOf = require("image-size");

const imageSize = function (imageURL) {
  console.log(imageURL);
  return sizeOf(imageURL);
};

module.exports = imageSize;
