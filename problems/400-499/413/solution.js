/*
 * @lc app=leetcode id=413 lang=javascript
 *
 * [413] Arithmetic Slices
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  if (nums.length < 3) return 0;
  let result = 0;
  let dp = 0;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp++;
      result += dp;
    } else {
      dp = 0;
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(numberOfArithmeticSlices([1, 2, 3, 4])); // 3
console.log(numberOfArithmeticSlices([1])); // 0
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5])); // 6
console.log(numberOfArithmeticSlices([7, 7, 7, 7])); // 3
