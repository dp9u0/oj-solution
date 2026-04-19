/*
 * @lc app=leetcode id=1416 lang=javascript
 *
 * [1416] Restore The Array
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
    const MOD = 1e9 + 7;
    const n = s.length;
    const kStr = String(k);
    const maxLen = kStr.length;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= Math.min(i, maxLen); j++) {
            if (s[i - j] === '0') continue;
            const sub = s.substring(i - j, i);
            if (j < maxLen || sub <= kStr) {
                dp[i] = (dp[i] + dp[i - j]) % MOD;
            }
        }
    }

    return dp[n];
};
// @lc code=end

// TEST:
console.log(numberOfArrays("1000", 10000)); // 1
console.log(numberOfArrays("1000", 10)); // 0
console.log(numberOfArrays("1317", 2000)); // 8
console.log(numberOfArrays("1", 1)); // 1
console.log(numberOfArrays("12345", 99999)); // 16
