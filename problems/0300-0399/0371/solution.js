/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  if (!a) return b;
  if (!b) return a;
  return getSum((a & b) << 1, a ^ b);
};