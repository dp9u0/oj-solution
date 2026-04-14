/*
 * @lc app=leetcode id=1523 lang=javascript
 *
 * [1523] Count Odd Numbers in an Interval Range
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  return Math.floor((high + 1) / 2) - Math.floor(low / 2);
};
// @lc code=end

// TEST:
console.log(countOdds(3, 7)); // 3
console.log(countOdds(8, 10)); // 1
console.log(countOdds(0, 0)); // 0
