/*
 * @lc app=leetcode id=3316 lang=javascript
 *
 * [3316] Find Maximum Removals From Source String
 */

// @lc code=start
/**
 * @param {string} source
 * @param {string} pattern
 * @param {number[]} targetIndices
 * @return {number}
 */
var maxRemovals = function(source, pattern, targetIndices) {
    const n = source.length;
    const m = pattern.length;
    const targetSet = new Set(targetIndices);

    // dp[j] = max removals considering source up to current i, pattern matched up to j
    let dp = new Array(m + 1).fill(-Infinity);
    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        const next = [...dp];
        const isTarget = targetSet.has(i);
        for (let j = 0; j <= m; j++) {
            // Option: skip source[i]
            const removals = isTarget ? dp[j] + 1 : dp[j];
            next[j] = Math.max(next[j], removals);
            // Option: match source[i] with pattern[j]
            if (j < m && source[i] === pattern[j] && dp[j] !== -Infinity) {
                next[j + 1] = Math.max(next[j + 1], dp[j]);
            }
        }
        dp = next;
    }
    return dp[m];
};
// @lc code=end

// TEST:
console.log(maxRemovals("abbaa", "aba", [0,1,2])); // 1
console.log(maxRemovals("bcda", "d", [0,3])); // 2
console.log(maxRemovals("dda", "dda", [0,1,2])); // 0
console.log(maxRemovals("yeyeykyded", "yeyyd", [0,2,3,4])); // 2
