/*
 * @lc app=leetcode id=1913 lang=javascript
 *
 * [1913] Maximum Product Difference Between Two Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return nums[n - 1] * nums[n - 2] - nums[0] * nums[1];
};
// @lc code=end

// TEST:
console.log(maxProductDifference([5, 6, 2, 7, 4])); // 34
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8])); // 64
