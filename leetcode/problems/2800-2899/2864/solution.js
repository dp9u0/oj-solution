/*
 * @lc app=leetcode id=2864 lang=javascript
 *
 * [2864] Maximum Odd Binary Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
  const cnt = [...s].filter(c => c === '1').length;
  const n = s.length;
  return '1'.repeat(cnt - 1) + '0'.repeat(n - cnt) + '1';
};
// @lc code=end

// TEST:
console.log(maximumOddBinaryNumber('010')); // '001'
console.log(maximumOddBinaryNumber('0101')); // '1001'
console.log(maximumOddBinaryNumber('1')); // '1'
console.log(maximumOddBinaryNumber('111')); // '111'
console.log(maximumOddBinaryNumber('0001')); // '0001'
