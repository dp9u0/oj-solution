/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  return num && !(num & (num - 1)) && (num & 0x55555555);
};