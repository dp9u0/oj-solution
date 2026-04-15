/*
 * @lc app=leetcode id=1374 lang=javascript
 *
 * [1374] Generate a String With Characters That Have Odd Counts
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  if (n % 2 === 1) return 'a'.repeat(n);
  return 'a'.repeat(n - 1) + 'b';
};
// @lc code=end

// TEST:
console.log(generateTheString(4)); // 'aaab' or similar, each char odd count
console.log(generateTheString(2)); // 'ab'
console.log(generateTheString(7)); // 'aaaaaaa'
console.log(generateTheString(1)); // 'a'
