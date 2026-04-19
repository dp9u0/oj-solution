/*
 * @lc app=leetcode id=2370 lang=javascript
 *
 * [2370] Longest Ideal Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
    const dp = new Array(26).fill(0);
    for (const ch of s) {
        const idx = ch.charCodeAt(0) - 97;
        let best = 0;
        for (let j = Math.max(0, idx - k); j <= Math.min(25, idx + k); j++) {
            best = Math.max(best, dp[j]);
        }
        dp[idx] = best + 1;
    }
    return Math.max(...dp);
};
// @lc code=end

// TEST:
console.log(longestIdealString('acfgbd', 2)); // 4
console.log(longestIdealString('abcd', 3));   // 4
console.log(longestIdealString('a', 0));       // 1
