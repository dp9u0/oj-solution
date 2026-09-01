/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let n = x ^ y,
    hd = 0;
  while (n) {
    hd += n & 1;
    n >>>= 1;
  }
  return hd;
};