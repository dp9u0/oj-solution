/*
 * @lc app=leetcode id=2786 lang=javascript
 *
 * [2786] Visit Array Positions to Maximize Score
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function(nums, x) {
  let evenBest = nums[0] % 2 === 0 ? nums[0] : -Infinity;
  let oddBest = nums[0] % 2 === 1 ? nums[0] : -Infinity;
  for (let i = 1; i < nums.length; i++) {
    const v = nums[i];
    if (v % 2 === 0) {
      evenBest = Math.max(evenBest, oddBest - x) + v;
    } else {
      oddBest = Math.max(oddBest, evenBest - x) + v;
    }
  }
  return Math.max(evenBest, oddBest);
};
// @lc code=end

// TEST:
console.log(maxScore([2, 3, 6, 1, 9, 2], 5)); // 13
console.log(maxScore([2, 4, 6, 8], 3)); // 20
console.log(maxScore([1, 2, 3, 4, 5], 1)); // 11
