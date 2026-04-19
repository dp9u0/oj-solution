/*
 * @lc app=leetcode id=2430 lang=javascript
 *
 * [2430] Maximum Deletions on a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var deleteString = function(s) {
    const n = s.length;
    const N = n + 1;

    // Precompute LCP: lcp[i][j] = longest common prefix of s[i..] and s[j..]
    const lcp = new Int16Array(N * N);
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (s[i] === s[j]) lcp[i * N + j] = 1 + lcp[(i + 1) * N + (j + 1)];
        }
    }

    // dp[i] = max operations to delete s[i..n-1]
    const dp = new Int32Array(n + 1);
    for (let i = n - 1; i >= 0; i--) {
        dp[i] = 1;
        const half = (n - i) >> 1;
        for (let j = 1; j <= half; j++) {
            if (lcp[i * N + i + j] >= j) {
                dp[i] = Math.max(dp[i], 1 + dp[i + j]);
            }
        }
    }

    return dp[0];
};
// @lc code=end

// TEST:
console.log(deleteString("abcabcdabc")); // 2
console.log(deleteString("aaabaab")); // 4
console.log(deleteString("aaaaa")); // 5
console.log(deleteString("a")); // 1
console.log(deleteString("ab")); // 1
console.log(deleteString("abaaba")); // 2
