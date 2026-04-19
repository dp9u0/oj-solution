/*
 * @lc app=leetcode id=2104 lang=javascript
 *
 * [2104] Sum of Subarray Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
  const n = nums.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    let minVal = nums[i], maxVal = nums[i];
    for (let j = i + 1; j < n; j++) {
      minVal = Math.min(minVal, nums[j]);
      maxVal = Math.max(maxVal, nums[j]);
      result += maxVal - minVal;
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(subArrayRanges([1,2,3])); // 4
console.log(subArrayRanges([1,3,3])); // 4
console.log(subArrayRanges([4,-2,-3,4,1])); // 59
