/*
 * @lc app=leetcode id=3559 lang=javascript
 *
 * [3559] Number of Ways to Assign Edge Weights II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var assignEdgeWeights = function(edges, queries) {
    const n = edges.length + 1;
    const MOD = 1e9 + 7;
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // BFS for depth and parent
    const depth = new Array(n + 1).fill(0);
    const parent = new Array(n + 1).fill(0);
    const visited = new Array(n + 1).fill(false);
    visited[1] = true;
    const queue = [1];
    let qi = 0;
    while (qi < queue.length) {
        const u = queue[qi++];
        for (const v of adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                depth[v] = depth[u] + 1;
                parent[v] = u;
                queue.push(v);
            }
        }
    }

    // Binary lifting for LCA
    const LOG = Math.ceil(Math.log2(n + 1)) + 1;
    const up = Array.from({ length: n + 1 }, () => new Array(LOG).fill(0));
    for (let i = 1; i <= n; i++) up[i][0] = parent[i];
    for (let j = 1; j < LOG; j++)
        for (let i = 1; i <= n; i++)
            up[i][j] = up[up[i][j - 1]][j - 1];

    const lca = (u, v) => {
        if (depth[u] < depth[v]) [u, v] = [v, u];
        const diff = depth[u] - depth[v];
        for (let j = 0; j < LOG; j++)
            if ((diff >> j) & 1) u = up[u][j];
        if (u === v) return u;
        for (let j = LOG - 1; j >= 0; j--) {
            if (up[u][j] !== up[v][j]) {
                u = up[u][j];
                v = up[v][j];
            }
        }
        return up[u][0];
    };

    // Precompute powers of 2
    const pow2 = new Array(2 * n).fill(1);
    for (let i = 1; i < 2 * n; i++) pow2[i] = pow2[i - 1] * 2 % MOD;

    return queries.map(([u, v]) => {
        const d = depth[u] + depth[v] - 2 * depth[lca(u, v)];
        return d === 0 ? 0 : pow2[d - 1];
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(assignEdgeWeights([[1, 2]], [[1, 1], [1, 2]]))); // [0,1]
console.log(JSON.stringify(assignEdgeWeights([[1, 2], [1, 3], [3, 4], [3, 5]], [[1, 4], [3, 4], [2, 5]]))); // [2,1,4]
console.log(JSON.stringify(assignEdgeWeights([[1, 2]], [[2, 2]]))); // [0]
console.log(JSON.stringify(assignEdgeWeights([[1, 2], [2, 3]], [[1, 3]]))); // [2]
console.log(JSON.stringify(assignEdgeWeights([[1, 2], [1, 3]], [[2, 3]]))); // [2]
