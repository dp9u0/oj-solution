/*
 * @lc app=leetcode id=3701 lang=javascript
 *
 * [3701] Compute Alternating Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += i % 2 === 0 ? nums[i] : -nums[i];
  }
  return sum;
};
// @lc code=end

// TEST:
console.log(alternatingSum([1, 3, 5, 7])); // -4
console.log(alternatingSum([100])); // 100
console.log(alternatingSum([1, 2])); // -1
console.log(alternatingSum([5, 1, 5, 1])); // 8
console.log(alternatingSum([10, 20, 30, 40, 50])); // 30
