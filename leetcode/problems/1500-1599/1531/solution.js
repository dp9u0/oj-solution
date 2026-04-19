/*
 * @lc app=leetcode id=1531 lang=javascript
 *
 * [1531] String Compression II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {
    const n = s.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(Infinity));
    dp[0][0] = 0;

    const encLen = (cnt) => cnt === 0 ? 0 : cnt === 1 ? 1 : cnt < 10 ? 2 : cnt < 100 ? 3 : 4;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= k; j++) {
            // Delete s[i-1]
            if (j > 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);

            // Keep s[i-1]: find a segment [t, i] of same character
            let same = 0, diff = 0;
            for (let t = i; t >= 1; t--) {
                if (s[t - 1] === s[i - 1]) same++;
                else diff++;
                if (diff > j) break;
                dp[i][j] = Math.min(dp[i][j], dp[t - 1][j - diff] + encLen(same));
            }
        }
    }

    return dp[n][k];
};
// @lc code=end

// TEST:
console.log(getLengthOfOptimalCompression('aaabcccd', 2)); // 4
console.log(getLengthOfOptimalCompression('aabbaa', 2)); // 2
console.log(getLengthOfOptimalCompression('aaaaaaaaaaa', 0)); // 3
console.log(getLengthOfOptimalCompression('abc', 2)); // 1
console.log(getLengthOfOptimalCompression('a', 0)); // 1
console.log(getLengthOfOptimalCompression('abcdef', 3)); // 3
