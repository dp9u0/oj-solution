/*
 * @lc app=leetcode id=2710 lang=javascript
 *
 * [2710] Remove Trailing Zeros From a String
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
  let end = num.length;
  while (end > 0 && num[end - 1] === '0') end--;
  return num.slice(0, end);
};
// @lc code=end

// TEST:
console.log(removeTrailingZeros('51230100')); // '512301'
console.log(removeTrailingZeros('123')); // '123'
console.log(removeTrailingZeros('1000')); // '1'
console.log(removeTrailingZeros('10')); // '1'
console.log(removeTrailingZeros('0')); // '' (edge case but num is positive so won't happen)
console.log(removeTrailingZeros('123456789')); // '123456789'
