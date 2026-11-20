/*
 * @lc app=leetcode.cn id=1682 lang=javascript
 *
 * [1682] 最长回文子序列 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length;
    // dp[i][j][last] = best good-palindrome length within s[i..j]
    // whose outermost characters differ from `last` (26 = no constraint yet)
    const dp = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => new Array(27).fill(-1)));
    const dfs = (i, j, last) => {
        if (i >= j) return 0;
        const memo = dp[i][j][last];
        if (memo !== -1) return memo;
        let best = Math.max(dfs(i + 1, j, last), dfs(i, j - 1, last));
        if (s[i] === s[j] && s.charCodeAt(i) - 97 !== last) {
            best = Math.max(best, dfs(i + 1, j - 1, s.charCodeAt(i) - 97) + 2);
        }
        dp[i][j][last] = best;
        return best;
    };
    return dfs(0, n - 1, 26);
};
// @lc code=end

// TEST:
console.log(longestPalindromeSubseq("bbabab")); // 4 (baab)
console.log(longestPalindromeSubseq("dcbccacdb")); // 4 (dccd)
console.log(longestPalindromeSubseq("a")); // 0
console.log(longestPalindromeSubseq("aa")); // 2 (middle pair may be equal)
console.log(longestPalindromeSubseq("bbbb")); // 2 (bb)
console.log(longestPalindromeSubseq("ab")); // 0
