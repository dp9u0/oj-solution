/*
 * @lc app=leetcode id=1771 lang=javascript
 *
 * [1771] Maximize Palindrome Length From Subsequences
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var longestPalindrome = function(word1, word2) {
    const s = word1 + word2;
    const n = s.length;
    const n1 = word1.length;

    // LPS interval DP on combined string
    const dp = new Array(n).fill(0).map(() => new Uint16Array(n));
    for (let i = 0; i < n; i++) dp[i][i] = 1;

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len <= n; i++) {
            const j = i + len - 1;
            if (s[i] === s[j]) {
                dp[i][j] = (len === 2 ? 0 : dp[i + 1][j - 1]) + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    // Max palindrome with left in word1 and right in word2
    let ans = 0;
    for (let i = 0; i < n1; i++) {
        for (let j = n1; j < n; j++) {
            if (s[i] === s[j]) {
                ans = Math.max(ans, dp[i][j]);
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(longestPalindrome("cacb", "cbba")); // 5
console.log(longestPalindrome("ab", "ab"));     // 3
console.log(longestPalindrome("aa", "bb"));     // 0
console.log(longestPalindrome("a", "a"));       // 1
console.log(longestPalindrome("abc", "dba"));   // 5 (abcba? or abdba)
console.log(longestPalindrome("aaa", "aaa"));   // 6
