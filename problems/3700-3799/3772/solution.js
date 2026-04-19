/*
 * @lc app=leetcode id=3772 lang=javascript
 *
 * [3772] Maximum Subgraph Score in a Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} good
 * @return {number[]}
 */
var maxSubgraphScore = function(n, edges, good) {
    const adj = Array.from({length: n}, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const dp = new Int32Array(n);

    // First DFS: post-order, compute dp rooted at 0
    const dfs1 = (u, p) => {
        dp[u] = good[u] === 1 ? 1 : -1;
        for (const v of adj[u]) {
            if (v === p) continue;
            dfs1(v, u);
            if (dp[v] > 0) dp[u] += dp[v];
        }
    };
    dfs1(0, -1);

    // Second DFS: rerooting
    const ans = new Int32Array(n);
    const dfs2 = (u, p) => {
        ans[u] = dp[u];
        for (const v of adj[u]) {
            if (v === p) continue;
            const saveU = dp[u], saveV = dp[v];
            dp[u] -= dp[v] > 0 ? dp[v] : 0;
            dp[v] += dp[u] > 0 ? dp[u] : 0;
            dfs2(v, u);
            dp[u] = saveU;
            dp[v] = saveV;
        }
    };
    dfs2(0, -1);

    return Array.from(ans);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maxSubgraphScore(3, [[0,1],[1,2]], [1,0,1])));  // [1,1,1]
console.log(JSON.stringify(maxSubgraphScore(5, [[1,0],[1,2],[1,3],[3,4]], [0,1,0,1,1]))); // [2,3,2,3,3]
console.log(JSON.stringify(maxSubgraphScore(2, [[0,1]], [0,0])));           // [-1,-1]
console.log(JSON.stringify(maxSubgraphScore(2, [[0,1]], [1,1])));           // [2,2]
