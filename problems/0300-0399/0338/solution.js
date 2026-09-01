/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let bits = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
    bits[i] = bits[i >> 1] + (i & 1);
  }
  return bits;
};
