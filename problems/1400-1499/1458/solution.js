/*
 * @lc app=leetcode id=1458 lang=javascript
 *
 * [1458] Max Dot Product of Two Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
  const m = nums1.length, n = nums2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(-Infinity));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const prod = nums1[i - 1] * nums2[j - 1];
      dp[i][j] = Math.max(
        prod,
        prod + Math.max(0, dp[i - 1][j - 1]),
        dp[i - 1][j],
        dp[i][j - 1]
      );
    }
  }
  return dp[m][n];
};
// @lc code=end

// TEST:
console.log(maxDotProduct([2, 1, -2, 5], [3, 0, -6])); // 18
console.log(maxDotProduct([3, -2], [2, -6, 7])); // 21
console.log(maxDotProduct([-1, -1], [1, 1])); // -1
