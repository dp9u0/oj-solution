/*
 * @lc app=leetcode id=1702 lang=javascript
 *
 * [1702] Maximum Binary String After Change
 */

// @lc code=start
/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function(binary) {
  const n = binary.length;
  const k = [...binary].filter(c => c === '0').length;
  if (k <= 1) return binary;
  const p0 = binary.indexOf('0');
  return '1'.repeat(p0 + k - 1) + '0' + '1'.repeat(n - p0 - k);
};
// @lc code=end

// TEST:
console.log(maximumBinaryString('000110')); // '111011'
console.log(maximumBinaryString('01')); // '01'
console.log(maximumBinaryString('00')); // '10'
console.log(maximumBinaryString('111')); // '111'
console.log(maximumBinaryString('0000')); // '1110'
