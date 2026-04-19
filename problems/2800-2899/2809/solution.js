/*
 * @lc app=leetcode id=2809 lang=javascript
 *
 * [2809] Minimum Time to Make Array Sum At Most x
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} x
 * @return {number}
 */
var minimumTime = function(nums1, nums2, x) {
    const n = nums1.length;
    const pairs = nums1.map((v, i) => [v, nums2[i]]);
    pairs.sort((a, b) => a[1] - b[1]);
    const dp = new Array(n + 1).fill(-Infinity);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j > 0; j--) {
            dp[j] = Math.max(dp[j], dp[j - 1] + pairs[i][0] + pairs[i][1] * j);
        }
    }
    const base = nums1.reduce((a, b) => a + b, 0);
    const rate = nums2.reduce((a, b) => a + b, 0);
    for (let j = 0; j <= n; j++) {
        if (base + j * rate - dp[j] <= x) return j;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(minimumTime([1,2,3], [1,2,3], 4)); // 3
console.log(minimumTime([1,2,3], [3,3,3], 4)); // -1
