/*
 * @lc app=leetcode id=2971 lang=javascript
 *
 * [2971] Find Polygon With the Largest Perimeter
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const prefix = Array(n).fill(0);
  prefix[0] = nums[0];
  for (let i = 1; i < n; i++) prefix[i] = prefix[i - 1] + nums[i];
  for (let i = n - 1; i >= 2; i--) {
    if (prefix[i - 1] > nums[i]) {
      return prefix[i];
    }
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(largestPerimeter([5, 5, 5]) === 15);
console.log(largestPerimeter([1, 12, 1, 2, 5, 50, 3]) === 12);
console.log(largestPerimeter([5, 5, 50]) === -1);
console.log(largestPerimeter([1, 1, 2]) === -1);
console.log(largestPerimeter([2, 2, 2, 2]) === 8);
console.log(largestPerimeter([1, 2, 3, 4, 5, 6]) === 21);
console.log(largestPerimeter([100, 1, 1, 1]) === 3);
