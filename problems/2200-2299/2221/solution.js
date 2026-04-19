/*
 * @lc app=leetcode id=2221 lang=javascript
 *
 * [2221] Find Triangular Sum of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
  for (let size = nums.length; size > 1; size--) {
    for (let i = 0; i < size - 1; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }
  }
  return nums[0];
};
// @lc code=end

// TEST:
console.log(triangularSum([1, 2, 3, 4, 5])); // 8
console.log(triangularSum([5])); // 5
