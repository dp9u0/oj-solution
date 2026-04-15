/*
 * @lc app=leetcode id=3788 lang=javascript
 *
 * [3788] Maximum Score of a Split
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumScore = function(nums) {
  const n = nums.length;
  const suffixMin = new Array(n);
  suffixMin[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
  }
  let prefixSum = 0;
  let maxScore = -Infinity;
  for (let i = 0; i < n - 1; i++) {
    prefixSum += nums[i];
    maxScore = Math.max(maxScore, prefixSum - suffixMin[i + 1]);
  }
  return maxScore;
};
// @lc code=end

// TEST:
console.log(maximumScore([10, -1, 3, -4, -5])); // 17
console.log(maximumScore([-7, -5, 3])); // -2
console.log(maximumScore([1, 1])); // 0
