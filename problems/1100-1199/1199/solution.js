/*
 * @lc app=leetcode.cn id=1199 lang=javascript
 *
 * [1199] 建造街区的最短时间
 */

// @lc code=start
/**
 * @param {number[]} blocks
 * @param {number} split
 * @return {number}
 */
var minBuildTime = function(blocks, split) {
    const n = blocks.length;
    blocks.sort((a, b) => b - a); // descending: assign workers to largest first
    const INF = Number.MAX_SAFE_INTEGER / 2;
    // dp[i][j] = min time to build the i SMALLEST blocks using j workers
    const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(INF));
    for (let j = 0; j <= n; j++) dp[0][j] = 0;
    for (let i = 1; i <= n; i++) {
        const b = blocks[n - i]; // largest block among these i
        for (let j = n; j >= 1; j--) { // j descending so dp[i][2j] is ready
            let best = dp[i - 1][j - 1] < INF ? Math.max(b, dp[i - 1][j - 1]) : INF;
            if (2 * j <= i && dp[i][2 * j] < INF) { // 2j > i: more workers than blocks -> impossible
                best = Math.min(best, split + dp[i][2 * j]); // split ALL workers
            }
            dp[i][j] = best;
        }
    }
    return dp[n][1];
};
// @lc code=end

// TEST:
console.log(minBuildTime([1], 1)); // 1
console.log(minBuildTime([1,2], 5)); // 7 (5 + max(1,2))
console.log(minBuildTime([1,2,3], 1)); // 4 (1 + max(3, 1 + max(1,2)))
console.log(minBuildTime([1,2,3,4], 1)); // 5 (leaf 4 needs >= 1 split: 1+4)
console.log(minBuildTime([1,3,4], 2)); // 7 (2+4 vs 4+3 paths -> max 7)
