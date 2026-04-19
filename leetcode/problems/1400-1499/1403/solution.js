/*
 * @lc app=leetcode id=1403 lang=javascript
 *
 * [1403] Minimum Subsequence in Non-Increasing Order
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  nums.sort((a, b) => b - a);
  const total = nums.reduce((s, x) => s + x, 0);
  let sum = 0;
  const result = [];
  for (const x of nums) {
    sum += x;
    result.push(x);
    if (sum > total - sum) break;
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minSubsequence([4,3,10,9,8]))); // [10,9]
console.log(JSON.stringify(minSubsequence([4,4,7,6,7]))); // [7,7,6]
console.log(JSON.stringify(minSubsequence([1]))); // [1]
console.log(JSON.stringify(minSubsequence([6]))); // [6]
console.log(JSON.stringify(minSubsequence([1,2,3]))); // [3,2]
