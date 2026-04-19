/*
 * @lc app=leetcode id=3397 lang=javascript
 *
 * [3397] Maximum Number of Distinct Elements After Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
  nums.sort((a, b) => a - b);
  let target = -Infinity;
  let count = 0;
  for (const num of nums) {
    const lo = num - k;
    const hi = num + k;
    const candidate = Math.max(target, lo);
    if (candidate <= hi) {
      target = candidate + 1;
      count++;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(maxDistinctElements([1, 2, 2, 3, 3, 4], 2)); // 6
console.log(maxDistinctElements([4, 4, 4, 4], 1)); // 3
console.log(maxDistinctElements([1, 1, 1, 1], 0)); // 1
