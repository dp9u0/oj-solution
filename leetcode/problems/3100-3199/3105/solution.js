/*
 * @lc app=leetcode id=3105 lang=javascript
 *
 * [3105] Longest Strictly Increasing or Strictly Decreasing Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
  let incLen = 1, decLen = 1, maxLen = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      incLen++;
      decLen = 1;
    } else if (nums[i] < nums[i - 1]) {
      decLen++;
      incLen = 1;
    } else {
      incLen = 1;
      decLen = 1;
    }
    maxLen = Math.max(maxLen, incLen, decLen);
  }
  return maxLen;
};
// @lc code=end

// TEST:
console.log(longestMonotonicSubarray([1, 4, 3, 3, 2])); // 2
console.log(longestMonotonicSubarray([3, 3, 3, 3])); // 1
console.log(longestMonotonicSubarray([3, 2, 1])); // 3
console.log(longestMonotonicSubarray([1, 2, 3, 4, 5])); // 5
