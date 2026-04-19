/*
 * @lc app=leetcode id=813 lang=javascript
 *
 * [813] Largest Sum of Averages
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, k) {
  const n = nums.length;
  const prefix = new Float64Array(n + 1);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

  // dp[i] = max score for first i elements with current number of groups
  let dp = new Float64Array(n + 1);
  // Initialize with 1 group
  for (let i = 1; i <= n; i++) dp[i] = prefix[i] / i;

  for (let g = 2; g <= k; g++) {
    const next = new Float64Array(n + 1);
    for (let i = g; i <= n; i++) {
      for (let m = g - 1; m < i; m++) {
        const avg = (prefix[i] - prefix[m]) / (i - m);
        next[i] = Math.max(next[i], dp[m] + avg);
      }
    }
    dp = next;
  }
  return dp[n];
};
// @lc code=end

// TEST:
console.log(largestSumOfAverages([9,1,2,3,9], 3)); // 20
console.log(largestSumOfAverages([1,2,3,4,5,6,7], 4)); // 20.5
console.log(largestSumOfAverages([1], 1)); // 1
console.log(largestSumOfAverages([1,2], 1)); // 1.5
console.log(largestSumOfAverages([1,2], 2)); // 3
