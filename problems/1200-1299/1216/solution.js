/*
 * @lc app=leetcode.cn id=1216 lang=javascript
 *
 * [1216] 验证回文串 III
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2; // empty below diagonal = 0
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return n - dp[0][n - 1] <= k; // deletions needed = n - LPS
};
// @lc code=end

// TEST:
console.log(isValidPalindrome("abcdeca", 2)); // true
console.log(isValidPalindrome("abbababa", 1)); // true (LPS 7, delete 1)
console.log(isValidPalindrome("a", 1)); // true
console.log(isValidPalindrome("ab", 1)); // true (delete one)
console.log(isValidPalindrome("abc", 1)); // false (needs 2 deletions)
console.log(isValidPalindrome("aa", 1)); // true
