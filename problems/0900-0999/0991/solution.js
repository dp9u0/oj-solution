/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function (X, Y) {
  if (X >= Y) {
    return X - Y;
  }
  return 1 + brokenCalc(X, Y % 2 === 0 ? (Y / 2) : (Y + 1));
};