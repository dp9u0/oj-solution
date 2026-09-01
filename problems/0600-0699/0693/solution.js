/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  return !((n ^= n / 2) & n + 1);
};