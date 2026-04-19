/*
 * @lc app=leetcode id=1000 lang=javascript
 *
 * [1000] Minimum Cost to Merge Stones
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function(stones, k) {
    const n = stones.length;
    if ((n - 1) % (k - 1) !== 0) return -1;
    if (n === 1) return 0;

    const prefix = [0];
    for (const s of stones) prefix.push(prefix[prefix.length - 1] + s);
    const rangeSum = (i, j) => prefix[j + 1] - prefix[i];

    const INF = 1e9;
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n);
        for (let j = 0; j < n; j++) dp[i][j] = new Array(k + 1).fill(INF);
    }

    for (let i = 0; i < n; i++) dp[i][i][1] = 0;

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len <= n; i++) {
            const j = i + len - 1;
            for (let t = k; t >= 2; t--) {
                for (let m = i; m < j; m++) {
                    if (dp[i][m][1] < INF && dp[m + 1][j][t - 1] < INF) {
                        dp[i][j][t] = Math.min(dp[i][j][t], dp[i][m][1] + dp[m + 1][j][t - 1]);
                    }
                }
            }
            if (dp[i][j][k] < INF) {
                dp[i][j][1] = dp[i][j][k] + rangeSum(i, j);
            }
        }
    }

    return dp[0][n - 1][1] >= INF ? -1 : dp[0][n - 1][1];
};
// @lc code=end

// TEST:
console.log(mergeStones([3,2,4,1], 2)); // 20
console.log(mergeStones([3,2,4,1], 3)); // -1
console.log(mergeStones([3,5,1,2,6], 3)); // 25
console.log(mergeStones([1], 2)); // 0
console.log(mergeStones([1,2,3,4,5], 3)); // ?
console.log(mergeStones([6,4,4,6], 2)); // 40
