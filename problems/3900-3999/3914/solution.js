/*
 * @lc app=leetcode id=3914 lang=javascript
 *
 * [3914] Minimum Operations to Make Array Non Decreasing
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  // answer = sum of all adjacent drops: each drop nums[i-1]-nums[i] must be paid
  // by an operation starting exactly at i, and suffix raises keep later drops unchanged
  let ans = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) ans += nums[i - 1] - nums[i];
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(minOperations([3, 3, 2, 1])); // 2
console.log(minOperations([5, 1, 2, 3])); // 4
console.log(minOperations([1, 2, 3, 4])); // 0 (already non-decreasing)
console.log(minOperations([10, 5, 1])); // 9 (5 + 4)
console.log(minOperations([7])); // 0 (single element)
console.log(minOperations([4, 4, 4, 4])); // 0 (all equal)
console.log(minOperations([1000000000, 1, 1000000000, 1])); // 1999999998 (large values, no overflow)
