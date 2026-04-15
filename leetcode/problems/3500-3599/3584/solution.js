/*
 * @lc app=leetcode id=3584 lang=javascript
 *
 * [3584] Maximum Product of First and Last Elements of a Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var maximumProduct = function(nums, m) {
  const n = nums.length;

  // prefixMax[i] = max(nums[0..i]), prefixMin[i] = min(nums[0..i])
  const prefixMax = new Array(n);
  const prefixMin = new Array(n);
  prefixMax[0] = nums[0];
  prefixMin[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefixMax[i] = Math.max(prefixMax[i - 1], nums[i]);
    prefixMin[i] = Math.min(prefixMin[i - 1], nums[i]);
  }

  let result = -Infinity;
  for (let j = m - 1; j < n; j++) {
    const k = j - m + 1;
    result = Math.max(result, nums[j] * prefixMax[k], nums[j] * prefixMin[k]);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(maximumProduct([-1,-9,2,3,-2,-3,1], 1)); // 81
console.log(maximumProduct([1,3,-5,5,6,-4], 3)); // 20
console.log(maximumProduct([2,-1,2,-6,5,2,-5,7], 2)); // 35
