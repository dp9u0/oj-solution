/*
 * @lc app=leetcode id=2846 lang=javascript
 *
 * [2846] Minimum Edge Weight Equilibrium Queries in a Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var minOperationsQueries = function(n, edges, queries) {
    const LOG = 14, W = 27;
    const adj = Array.from({length: n}, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    const depth = new Array(n).fill(0);
    const par = Array.from({length: LOG}, () => new Array(n).fill(-1));
    const cnt = Array.from({length: n}, () => new Array(W).fill(0));

    const queue = [0];
    const visited = new Array(n).fill(false);
    visited[0] = true;
    let qi = 0;
    while (qi < queue.length) {
        const u = queue[qi++];
        for (const [v, w] of adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                depth[v] = depth[u] + 1;
                par[0][v] = u;
                for (let i = 1; i < W; i++) cnt[v][i] = cnt[u][i];
                cnt[v][w]++;
                queue.push(v);
            }
        }
    }

    for (let k = 1; k < LOG; k++) {
        for (let v = 0; v < n; v++) {
            if (par[k - 1][v] >= 0) par[k][v] = par[k - 1][par[k - 1][v]];
        }
    }

    const lca = (a, b) => {
        if (depth[a] < depth[b]) [a, b] = [b, a];
        let diff = depth[a] - depth[b];
        for (let k = 0; k < LOG; k++) {
            if ((diff >> k) & 1) a = par[k][a];
        }
        if (a === b) return a;
        for (let k = LOG - 1; k >= 0; k--) {
            if (par[k][a] !== par[k][b]) {
                a = par[k][a];
                b = par[k][b];
            }
        }
        return par[0][a];
    };

    return queries.map(([a, b]) => {
        const l = lca(a, b);
        const pathLen = depth[a] + depth[b] - 2 * depth[l];
        let maxCnt = 0;
        for (let w = 1; w < W; w++) {
            const c = cnt[a][w] + cnt[b][w] - 2 * cnt[l][w];
            if (c > maxCnt) maxCnt = c;
        }
        return pathLen - maxCnt;
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minOperationsQueries(7, [[0,1,1],[1,2,1],[2,3,1],[3,4,2],[4,5,2],[5,6,2]], [[0,3],[3,6],[2,6],[0,6]]))); // [0,0,1,3]
console.log(JSON.stringify(minOperationsQueries(8, [[1,2,6],[1,3,4],[2,4,6],[2,5,3],[3,6,6],[3,0,8],[7,0,2]], [[4,6],[0,4],[6,5],[7,4]]))); // [1,2,2,3]
console.log(JSON.stringify(minOperationsQueries(2, [[0,1,1]], [[0,1],[1,0]]))); // [0,0]
console.log(JSON.stringify(minOperationsQueries(3, [[0,1,1],[1,2,2]], [[0,2]]))); // [1]
console.log(JSON.stringify(minOperationsQueries(4, [[0,1,1],[1,2,1],[2,3,1]], [[0,3],[1,2]]))); // [0,0]
