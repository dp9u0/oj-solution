/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  return n == 0 ? 0 : ~~(n / 5) + trailingZeroes(~~(n / 5));
};

/**
// TEST:
trailingZeroes(30);
*/