/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let first = 0; first <= ~~(Math.sqrt(c)); first++) {
    let second2 = c - first * first;
    let second = ~~(Math.sqrt(c - first * first));
    if (second * second === second2) {
      return true;
    }
  }
  return false;
};