/*
 * @lc app=leetcode id=730 lang=javascript
 *
 * [730] Count Different Palindromic Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequences = function(s) {
    const MOD = 1e9 + 7;
    const n = s.length;

    // Precompute nextPos[c][i] and prevPos[c][i]
    const nextPos = Array.from({ length: 4 }, () => new Array(n).fill(-1));
    const prevPos = Array.from({ length: 4 }, () => new Array(n).fill(-1));

    for (let c = 0; c < 4; c++) {
        const ch = String.fromCharCode(97 + c);
        let last = -1;
        for (let i = 0; i < n; i++) {
            if (s[i] === ch) last = i;
            prevPos[c][i] = last;
        }
        let next = -1;
        for (let i = n - 1; i >= 0; i--) {
            if (s[i] === ch) next = i;
            nextPos[c][i] = next;
        }
    }

    const dp = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let i = 0; i < n; i++) dp[i][i] = 1;

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            let total = 0;
            for (let c = 0; c < 4; c++) {
                const left = nextPos[c][i];
                if (left === -1 || left > j) continue;
                const right = prevPos[c][j];
                if (left === right) {
                    total = (total + 1) % MOD;
                } else if (left + 1 === right) {
                    total = (total + 2) % MOD;
                } else {
                    total = (total + dp[left + 1][right - 1] + 2) % MOD;
                }
            }
            dp[i][j] = total;
        }
    }

    return dp[0][n - 1];
};
// @lc code=end

// TEST:
console.log(countPalindromicSubsequences('bccb')); // 6
console.log(countPalindromicSubsequences('abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba')); // 104860361
console.log(countPalindromicSubsequences('a')); // 1
console.log(countPalindromicSubsequences('aa')); // 2
console.log(countPalindromicSubsequences('aba')); // 4
console.log(countPalindromicSubsequences('aaaa')); // 4
