/*
 * @lc app=leetcode id=2110 lang=javascript
 *
 * [2110] Number of Smooth Descent Periods of a Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
  let res = 1, len = 1;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] === prices[i - 1] - 1) len++;
    else len = 1;
    res += len;
  }
  return res;
};
// @lc code=end

// TEST:
console.log(getDescentPeriods([3,2,1,4])); // 7
console.log(getDescentPeriods([8,6,7,7])); // 4
console.log(getDescentPeriods([1])); // 1
console.log(getDescentPeriods([5,4,3,2,1])); // 15
console.log(getDescentPeriods([1,1,1])); // 3
