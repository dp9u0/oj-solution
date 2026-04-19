/*
 * @lc app=leetcode id=1278 lang=javascript
 *
 * [1278] Palindrome Partitioning III
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function(s, k) {
    const n = s.length;

    const cost = Array.from({ length: n }, () => new Uint8Array(n));
    for (let len = 2; len <= n; len++) {
        for (let l = 0; l + len - 1 < n; l++) {
            const r = l + len - 1;
            cost[l][r] = cost[l + 1][r - 1] + (s[l] === s[r] ? 0 : 1);
        }
    }

    const dp = Array.from({ length: n }, () => new Uint8Array(k + 1).fill(127));
    for (let i = 0; i < n; i++) dp[i][1] = cost[0][i];

    for (let j = 2; j <= k; j++) {
        for (let i = j - 1; i < n; i++) {
            for (let t = j - 2; t < i; t++) {
                dp[i][j] = Math.min(dp[i][j], dp[t][j - 1] + cost[t + 1][i]);
            }
        }
    }

    return dp[n - 1][k];
};
// @lc code=end

// TEST:
console.log(palindromePartition("abc", 2)); // 1
console.log(palindromePartition("aabbc", 3)); // 0
console.log(palindromePartition("leetcode", 8)); // 0
console.log(palindromePartition("a", 1)); // 0
console.log(palindromePartition("abcd", 1)); // 2
