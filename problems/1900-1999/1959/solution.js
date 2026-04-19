/*
 * @lc app=leetcode id=1959 lang=javascript
 *
 * [1959] Minimum Total Space Wasted With K Resizing Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minSpaceWastedKResizing = function(nums, k) {
    const n = nums.length;
    const INF = Infinity;

    // precompute waste for interval [i, j]
    const waste = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        let maxVal = 0, sum = 0;
        for (let j = i; j < n; j++) {
            maxVal = Math.max(maxVal, nums[j]);
            sum += nums[j];
            waste[i][j] = maxVal * (j - i + 1) - sum;
        }
    }

    // dp[i][j] = min waste for first i elements with j resizes
    const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(INF));
    dp[0][0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= k; j++) {
            // no resize before: one segment [0, i-1]
            if (j === 0) {
                dp[i][j] = waste[0][i - 1];
            } else {
                for (let p = 1; p < i; p++) {
                    dp[i][j] = Math.min(dp[i][j], dp[p][j - 1] + waste[p][i - 1]);
                }
            }
        }
    }
    return dp[n][k];
};
// @lc code=end

// TEST:
console.log(minSpaceWastedKResizing([10,20], 0)); // 10
console.log(minSpaceWastedKResizing([10,20,30], 1)); // 10
console.log(minSpaceWastedKResizing([10,20,15,30,20], 2)); // 15
