/*
 * @lc app=leetcode id=3553 lang=javascript
 *
 * [3553] Minimum Weighted Subgraph With the Required Paths II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var minimumWeight = function(edges, queries) {
    const n = edges.length + 1;
    const adj = Array.from({length: n}, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    const LOG = Math.ceil(Math.log2(n)) + 1;
    const depth = new Int32Array(n);
    const distRoot = new Array(n).fill(0);
    const up = [];
    for (let i = 0; i < n; i++) up[i] = new Array(LOG).fill(0);

    const queue = [0];
    const visited = new Uint8Array(n);
    visited[0] = 1;
    let head = 0;

    while (head < queue.length) {
        const u = queue[head++];
        for (const [v, w] of adj[u]) {
            if (!visited[v]) {
                visited[v] = 1;
                depth[v] = depth[u] + 1;
                distRoot[v] = distRoot[u] + w;
                up[v][0] = u;
                for (let j = 1; j < LOG; j++) {
                    up[v][j] = up[up[v][j - 1]][j - 1];
                }
                queue.push(v);
            }
        }
    }

    const lca = (a, b) => {
        if (depth[a] < depth[b]) { const t = a; a = b; b = t; }
        let diff = depth[a] - depth[b];
        for (let j = 0; j < LOG; j++) {
            if ((diff >> j) & 1) a = up[a][j];
        }
        if (a === b) return a;
        for (let j = LOG - 1; j >= 0; j--) {
            if (up[a][j] !== up[b][j]) {
                a = up[a][j];
                b = up[b][j];
            }
        }
        return up[a][0];
    };

    const getDist = (a, b) => distRoot[a] + distRoot[b] - 2 * distRoot[lca(a, b)];

    return queries.map(([a, b, c]) => (getDist(a, b) + getDist(a, c) + getDist(b, c)) / 2);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minimumWeight([[0,1,2],[1,2,3],[1,3,5],[1,4,4],[2,5,6]], [[2,3,4],[0,2,5]]))); // [12,11]
console.log(JSON.stringify(minimumWeight([[1,0,8],[0,2,7]], [[0,1,2]]))); // [15]
console.log(JSON.stringify(minimumWeight([[0,1,1],[1,2,1],[2,3,1]], [[0,1,3]]))); // [3]
console.log(JSON.stringify(minimumWeight([[0,1,10]], [[0,0,1]]))); // not valid (not distinct), skip
