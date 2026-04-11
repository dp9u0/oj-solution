/*
 * @lc app=leetcode id=1221 lang=javascript
 *
 * [1221] Split a String in Balanced Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let result = 0;
  let balance = 0;
  for (const ch of s) {
    balance += ch === 'L' ? 1 : -1;
    if (balance === 0) result++;
  }
  return result;
};
// @lc code=end

// TEST:
console.log(balancedStringSplit("RLRRLLRLRL")); // 4
console.log(balancedStringSplit("RLRRRLLRLL")); // 2
console.log(balancedStringSplit("LLLLRRRR")); // 1
