/*
 * @lc app=leetcode.cn id=2247 lang=javascript
 *
 * [2247] K 条高速公路的最大旅行费用
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} highways
 * @param {number} k
 * @return {number}
 */
var maximumCost = function(n, highways, k) {
    const INF = -1e9;
    const w = Array.from({ length: n }, () => new Int32Array(n).fill(-1));
    for (const [a, b, t] of highways) {
        w[a][b] = t;
        w[b][a] = t;
    }
    const FULL = 1 << n;
    const dp = Array.from({ length: FULL }, () => new Int32Array(n).fill(INF));
    for (let v = 0; v < n; v++) dp[1 << v][v] = 0;
    let best = INF;
    for (let mask = 1; mask < FULL; mask++) {
        const bits = popcount(mask);
        if (bits === k + 1) {
            for (let v = 0; v < n; v++) {
                if (dp[mask][v] > best) best = dp[mask][v];
            }
        }
        if (bits > k) continue;
        for (let last = 0; last < n; last++) {
            const cur = dp[mask][last];
            if (cur === INF) continue;
            for (let v = 0; v < n; v++) {
                if (mask & (1 << v)) continue;
                if (w[last][v] < 0) continue;
                const nm = mask | (1 << v);
                if (cur + w[last][v] > dp[nm][v]) dp[nm][v] = cur + w[last][v];
            }
        }
    }
    return best === INF ? -1 : best;
};
function popcount(x) {
    let c = 0;
    while (x) { x &= x - 1; c++; }
    return c;
}
// @lc code=end

// TEST:
console.log(maximumCost(5, [[0,1,4],[2,1,3],[1,4,11],[3,2,3],[3,4,2]], 3)); // 17
console.log(maximumCost(4, [[0,1,3],[2,3,2]], 2)); // -1
console.log(maximumCost(2, [[0,1,5]], 1)); // 5
console.log(maximumCost(3, [[0,1,1],[1,2,2]], 2)); // 3
console.log(maximumCost(3, [[0,1,1],[1,2,2],[0,2,10]], 2)); // 12 (0->2->1: 10+2)
