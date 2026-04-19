/*
 * @lc app=leetcode id=3836 lang=javascript
 *
 * [3836] Maximum Score Using Exactly K Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const n = nums1.length;
    const m = nums2.length;

    let dp = Array.from({ length: n }, () => new Array(m).fill(-Infinity));

    // t = 1: base case
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            dp[i][j] = nums1[i] * nums2[j];
        }
    }

    for (let t = 2; t <= k; t++) {
        // Compute 2D prefix max of dp
        const prefix = Array.from({ length: n }, () => new Array(m).fill(-Infinity));
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                prefix[i][j] = dp[i][j];
                if (i > 0) prefix[i][j] = Math.max(prefix[i][j], prefix[i - 1][j]);
                if (j > 0) prefix[i][j] = Math.max(prefix[i][j], prefix[i][j - 1]);
            }
        }

        const newDp = Array.from({ length: n }, () => new Array(m).fill(-Infinity));
        for (let i = t - 1; i < n; i++) {
            for (let j = t - 1; j < m; j++) {
                newDp[i][j] = nums1[i] * nums2[j] + prefix[i - 1][j - 1];
            }
        }
        dp = newDp;
    }

    let ans = -Infinity;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            ans = Math.max(ans, dp[i][j]);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxScore([1, 3, 2], [4, 5, 1], 2)); // 22
console.log(maxScore([-2, 0, 5], [-3, 4, -1, 2], 2)); // 26
console.log(maxScore([-3, -2], [1, 2], 2)); // -7
console.log(maxScore([1], [1], 1)); // 1
console.log(maxScore([1, 2, 3], [1, 2, 3], 3)); // 14
