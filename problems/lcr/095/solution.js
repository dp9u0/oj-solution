/*
 * @lc app=leetcode.cn id=LCR 095 lang=javascript
 *
 * [LCR 095] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= m; i++) {
        let prev = 0;
        for (let j = 1; j <= n; j++) {
            const tmp = dp[j];
            if (text1[i - 1] === text2[j - 1]) {
                dp[j] = prev + 1;
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1]);
            }
            prev = tmp;
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(longestCommonSubsequence("abc", "abc"));   // 3
console.log(longestCommonSubsequence("abc", "def"));   // 0
console.log(longestCommonSubsequence("bsbininm", "jmjkbkjkv")); // 1
console.log(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy")); // 2
