/*
 * @lc app=leetcode id=1793 lang=javascript
 *
 * [1793] Maximum Score of a Good Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
  const n = nums.length;
  let left = k, right = k;
  let minVal = nums[k];
  let result = nums[k];

  while (left > 0 || right < n - 1) {
    if (left === 0) {
      right++;
      minVal = Math.min(minVal, nums[right]);
    } else if (right === n - 1) {
      left--;
      minVal = Math.min(minVal, nums[left]);
    } else if (nums[left - 1] > nums[right + 1]) {
      left--;
      minVal = Math.min(minVal, nums[left]);
    } else {
      right++;
      minVal = Math.min(minVal, nums[right]);
    }
    result = Math.max(result, minVal * (right - left + 1));
  }

  return result;
};
// @lc code=end

// TEST:
console.log(maximumScore([1, 4, 3, 7, 4, 5], 3)); // 15
console.log(maximumScore([5, 5, 4, 5, 4, 1, 1, 1], 0)); // 20
