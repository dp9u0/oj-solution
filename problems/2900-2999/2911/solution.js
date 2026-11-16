/*
 * @lc app=leetcode.cn id=2911 lang=javascript
 *
 * [2911] 得到 K 个半回文串的最少修改次数
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumChanges = function(s, k) {
    const n = s.length;
    const INF = Number.MAX_SAFE_INTEGER;

    // cost[i][len]: min changes to turn s[i..i+len-1] into a semi-palindrome
    const cost = Array.from({ length: n }, () => new Array(n + 1).fill(INF));
    for (let i = 0; i < n; i++) {
        for (let len = 2; i + len <= n; len++) {
            let best = INF;
            for (let d = 1; d < len; d++) {
                if (len % d !== 0) continue;
                const m = len / d; // chars per group
                let changes = 0;
                const half = m >> 1;
                for (let r = 0; r < d; r++) {
                    for (let p = 0; p < half; p++) {
                        if (s[i + r + p * d] !== s[i + r + (m - 1 - p) * d]) changes++;
                    }
                }
                if (changes < best) best = changes;
            }
            cost[i][len] = best;
        }
    }

    // dp[t][j]: min changes to split prefix s[0..j-1] into t parts
    const dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(INF));
    dp[0][0] = 0;
    for (let t = 1; t <= k; t++) {
        for (let j = 2 * t; j <= n; j++) {
            // last part is s[i..j-1], every part needs length >= 2
            for (let i = 2 * (t - 1); i <= j - 2; i++) {
                const prev = dp[t - 1][i];
                if (prev === INF) continue;
                const c = prev + cost[i][j - i];
                if (c < dp[t][j]) dp[t][j] = c;
            }
        }
    }
    return dp[k][n];
};
// @lc code=end

// TEST:
console.log(minimumChanges("abcac", 2)); // 1 ("ab" -> "aa" + "cac" ok)
console.log(minimumChanges("abcdef", 2)); // 2 (one change each in "abc", "def")
console.log(minimumChanges("aabbaa", 3)); // 0 ("aa"|"bb"|"aa" all semi-palindromes)
console.log(minimumChanges("abcabc", 1)); // 0 (d = 3: "aa","bb","cc" all palindromes)
console.log(minimumChanges("abcabc", 2)); // 2 (no 2-split costs less than 1 + 1)
console.log(minimumChanges("ab", 1)); // 1 (length 2 needs d = 1, one mismatch)
console.log(minimumChanges("abab", 1)); // 0 (d = 2: "aa" and "bb" groups)
console.log(minimumChanges("aabb", 2)); // 0 ("aa"|"bb")
