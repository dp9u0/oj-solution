/*
 * @lc app=leetcode id=1685 lang=javascript
 *
 * [1685] Sum of Absolute Differences in a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  const total = prefix[n];
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    const left = nums[i] * i - prefix[i];
    const right = (total - prefix[i + 1]) - nums[i] * (n - 1 - i);
    result[i] = left + right;
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getSumAbsoluteDifferences([2,3,5]))); // [4,3,5]
console.log(JSON.stringify(getSumAbsoluteDifferences([1,4,6,8,10]))); // [24,15,13,15,21]
