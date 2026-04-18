/*
 * @lc app=leetcode id=1798 lang=javascript
 *
 * [1798] Maximum Number of Consecutive Values You Can Make
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function(coins) {
  coins.sort((a, b) => a - b);
  let reach = 0;
  for (const c of coins) {
    if (c > reach + 1) break;
    reach += c;
  }
  return reach + 1;
};
// @lc code=end

// TEST:
console.log(getMaximumConsecutive([1,3])); // 2
console.log(getMaximumConsecutive([1,1,1,4])); // 8
console.log(getMaximumConsecutive([1,4,10,3,1])); // 20
console.log(getMaximumConsecutive([1])); // 2
console.log(getMaximumConsecutive([2])); // 1
