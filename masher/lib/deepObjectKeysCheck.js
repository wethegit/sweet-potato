const deepObjectKeysCheck = function (origin, toCompare) {
  let didOriginChange = false;
  const originKeys = Object.keys(origin);

  for (let i = 0; i < originKeys.length; i++) {
    const key = originKeys[i];
    const originValue = origin[key];
    const compareValue = toCompare[key];

    if (originValue instanceof Object && compareValue instanceof Object) {
      didOriginChange = deepObjectKeysCheck(originValue, compareValue);
    } else if (origin[key] !== toCompare[key]) {
      didOriginChange = true;
    }

    if (didOriginChange) break;
  }

  return didOriginChange;
};

module.exports = deepObjectKeysCheck;
