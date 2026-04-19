/*
 * @lc app=leetcode id=2016 lang=javascript
 *
 * [2016] Maximum Difference Between Increasing Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
  let minVal = nums[0], maxDiff = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > minVal) maxDiff = Math.max(maxDiff, nums[i] - minVal);
    minVal = Math.min(minVal, nums[i]);
  }
  return maxDiff;
};
// @lc code=end

// TEST:
console.log(maximumDifference([7, 1, 5, 4])); // 4
console.log(maximumDifference([9, 4, 3, 2])); // -1
console.log(maximumDifference([1, 5, 2, 10])); // 9
