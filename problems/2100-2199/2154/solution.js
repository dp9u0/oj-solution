/*
 * @lc app=leetcode id=2154 lang=javascript
 *
 * [2154] Keep Multiplying Found Values by Two
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
  const set = new Set(nums);
  while (set.has(original)) {
    original *= 2;
  }
  return original;
};
// @lc code=end

// TEST:
console.log(findFinalValue([5,3,6,1,12], 3)); // 24
console.log(findFinalValue([2,7,9], 4)); // 4
console.log(findFinalValue([1,2,4,8,16], 1)); // 32
