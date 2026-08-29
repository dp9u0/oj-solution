/*
 * @lc app=leetcode id=3974 lang=javascript
 *
 * [3974] Maximum Total Sum of K Selected Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} mul
 * @return {number}
 */
var maxSum = function(nums, k, mul) {
  nums.sort((a, b) => b - a);
  let ans = 0;
  for (let i = 0; i < k; i++) {
    const w = Math.max(1, mul - i);
    ans += nums[i] * w;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxSum([6, 1, 2, 9], 3, 2) === 26);
console.log(maxSum([3, 7, 5, 2], 2, 4) === 43);
console.log(maxSum([4, 4], 1, 1) === 4);
console.log(maxSum([5], 1, 0) === 5);
console.log(maxSum([1, 2], 2, 0) === 3);
console.log(maxSum([10, 1], 2, 5) === 10 * 5 + 1 * 4);
