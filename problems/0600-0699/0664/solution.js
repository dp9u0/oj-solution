/*
 * @lc app=leetcode id=664 lang=javascript
 *
 * [664] Strange Printer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    // Compress consecutive duplicates
    let t = s[0];
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[i - 1]) t += s[i];
    }
    const n = t.length;
    if (n === 0) return 0;

    const dp = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) dp[i][i] = 1;

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            dp[i][j] = dp[i][j - 1] + 1;
            for (let k = i; k < j; k++) {
                if (t[k] === t[j]) {
                    const mid = k + 1 <= j - 1 ? dp[k + 1][j - 1] : 0;
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + mid);
                }
            }
        }
    }

    return dp[0][n - 1];
};
// @lc code=end

// TEST:
console.log(strangePrinter("aaabbb")); // 2
console.log(strangePrinter("aba"));    // 2
console.log(strangePrinter("abab"));   // 3
console.log(strangePrinter("a"));      // 1
