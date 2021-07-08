module.exports = async function () {
  const data = {
    testing: "Hello World",
  };
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};
