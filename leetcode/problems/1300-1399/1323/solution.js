/*
 * @lc app=leetcode id=1323 lang=javascript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  return parseInt(String(num).replace('6', '9'));
};
// @lc code=end

// TEST:
console.log(maximum69Number(9669)); // 9969
console.log(maximum69Number(9996)); // 9999
console.log(maximum69Number(9999)); // 9999
