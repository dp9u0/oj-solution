/*
 * @lc app=leetcode id=2869 lang=javascript
 *
 * [2869] Minimum Operations to Collect Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  const set = new Set();
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] <= k) set.add(nums[i]);
    if (set.size === k) return nums.length - i;
  }
  return nums.length;
};
// @lc code=end

// TEST:
console.log(minOperations([3,1,5,4,2], 2)); // 4
console.log(minOperations([3,1,5,4,2], 5)); // 5
console.log(minOperations([3,2,5,3,1], 3)); // 4
console.log(minOperations([1], 1)); // 1
console.log(minOperations([1,2,3], 3)); // 3
