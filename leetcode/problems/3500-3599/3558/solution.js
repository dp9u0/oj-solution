/*
 * @lc app=leetcode id=3558 lang=javascript
 *
 * [3558] Number of Ways to Assign Edge Weights I
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function(edges) {
    const MOD = BigInt(1e9 + 7);
    const n = edges.length + 1;

    // BFS to find max depth
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const depth = new Array(n + 1).fill(-1);
    depth[1] = 0;
    const queue = [1];
    let head = 0;
    let maxDepth = 0;

    while (head < queue.length) {
        const u = queue[head++];
        for (const v of adj[u]) {
            if (depth[v] === -1) {
                depth[v] = depth[u] + 1;
                maxDepth = Math.max(maxDepth, depth[v]);
                queue.push(v);
            }
        }
    }

    // Answer = 2^(maxDepth-1) mod MOD
    if (maxDepth === 0) return 0;
    let ans = 1n;
    let base = 2n;
    let exp = maxDepth - 1;
    while (exp > 0) {
        if (exp & 1) ans = ans * base % MOD;
        base = base * base % MOD;
        exp >>= 1;
    }
    return Number(ans);
};
// @lc code=end

// TEST:
console.log(assignEdgeWeights([[1,2]]));                              // 1
console.log(assignEdgeWeights([[1,2],[1,3],[3,4],[3,5]]));            // 2
console.log(assignEdgeWeights([[1,2],[2,3],[3,4]]));                   // 4
