/*
 * @lc app=leetcode id=1005 lang=javascript
 *
 * [1005] Maximize Sum Of Array After K Negations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < k; i++) {
    nums[0] = -nums[0];
    nums.sort((a, b) => a - b);
  }
  return nums.reduce((acc, num) => acc + num, 0);
};
// @lc code=end
// TEST:
console.log(largestSumAfterKNegations([4, 2, 3], 1)); // Output: 5
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3)); // Output: 6
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)); // Output: 13
console.log(largestSumAfterKNegations([-2, 9, 3, -5, -7], 4)); // Output: 19
console.log(largestSumAfterKNegations([1, 2, 3], 3)); // Output: 6
console.log(largestSumAfterKNegations([1, -2, -3, 4, 5], 2)); // Output: 15
console.log(largestSumAfterKNegations([-1, -2, -3, -4, -5], 5)); // Output: 15
console.log(largestSumAfterKNegations([0, 0, 0, 0, 0], 10)); // Output: 0
console.log(largestSumAfterKNegations([1, 2, 3, 4, 5], 0)); // Output: 15
console.log(largestSumAfterKNegations([1, 2, 3, 4, 5], 5)); // Output: 13
console.log(largestSumAfterKNegations([-1, -2, -3, -4, -5], 3)); // Output: 9
console.log(largestSumAfterKNegations([2, 3, 4, 5, 6], 3)); // Output: 18
console.log(largestSumAfterKNegations([-2, -3, -4, -5, -6], 3)); // Output: 0
console.log(largestSumAfterKNegations([1, -1, 1, -1, 1], 2)); // Output: 5
console.log(largestSumAfterKNegations([1, -1, 1, -1, 1], 3)); // Output: 3