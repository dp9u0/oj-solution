/*
 * @lc app=leetcode id=1848 lang=javascript
 *
 * [1848] Minimum Distance to the Target Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
  let min = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      min = Math.min(min, Math.abs(i - start));
      if (min === 0) return 0;
    }
  }
  return min;
};
// @lc code=end

// TEST:
console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3)); // 1
console.log(getMinDistance([1], 1, 0)); // 0
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0)); // 0
console.log(getMinDistance([5, 3, 6, 5], 5, 2)); // 1
console.log(getMinDistance([1, 3, 5, 7], 5, 2)); // 0
