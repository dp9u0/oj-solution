/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 1) return false;
  for (let i = 1; num > 0; i += 2) {
    num -= i;
  }
  return num === 0;
};