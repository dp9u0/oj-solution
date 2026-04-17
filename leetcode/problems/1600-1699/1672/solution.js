/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let ans = 0;
  for (const row of accounts) {
    let sum = 0;
    for (const v of row) sum += v;
    if (sum > ans) ans = sum;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maximumWealth([[1,2,3],[3,2,1]])); // 6
console.log(maximumWealth([[1,5],[7,3],[3,5]])); // 10
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])); // 17
console.log(maximumWealth([[100]])); // 100
console.log(maximumWealth([[1,1],[1,1]])); // 2
