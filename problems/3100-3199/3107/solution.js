/*
 * @lc app=leetcode id=3107 lang=javascript
 *
 * [3107] Minimum Operations to Make Median of Array Equal to K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperationsToMakeMedianK = function(nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const mid = n >> 1;
  let ops = 0;
  // Elements at positions ≤ mid must be ≤ k
  for (let i = 0; i <= mid; i++) {
    if (nums[i] > k) ops += nums[i] - k;
  }
  // Elements at positions ≥ mid must be ≥ k
  for (let i = mid; i < n; i++) {
    if (nums[i] < k) ops += k - nums[i];
  }
  return ops;
};
// @lc code=end

// TEST:
console.log(minOperationsToMakeMedianK([2,5,6,8,5], 4)); // 2
console.log(minOperationsToMakeMedianK([2,5,6,8,5], 7)); // 3
console.log(minOperationsToMakeMedianK([1,2,3,4,5,6], 4)); // 0
