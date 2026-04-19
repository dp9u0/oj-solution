/*
 * @lc app=leetcode id=2811 lang=javascript
 *
 * [2811] Check if it is Possible to Split Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
var canSplitArray = function(nums, m) {
  const n = nums.length;
  if (n <= 2) return true;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] + nums[i + 1] >= m) return true;
  }
  return false;
};
// @lc code=end

// TEST:
console.log(canSplitArray([2, 2, 1], 4)); // true
console.log(canSplitArray([2, 1, 3], 5)); // false
console.log(canSplitArray([2, 3, 3, 2, 3], 6)); // true
console.log(canSplitArray([1], 1)); // true
console.log(canSplitArray([1, 1], 100)); // true
