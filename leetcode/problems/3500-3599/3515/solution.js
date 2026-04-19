/*
 * @lc app=leetcode id=3515 lang=javascript
 *
 * [3515] Shortest Path in a Weighted Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var treeQueries = function(n, edges, queries) {
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    const edgeW = new Map();
    const eKey = (a, b) => Math.min(a, b) * (n + 1) + Math.max(a, b);
    for (const [u, v, w] of edges) edgeW.set(eKey(u, v), w);

    const par = new Int32Array(n + 1);
    const dist = new Int32Array(n + 1);
    const tin = new Int32Array(n + 1);
    const tout = new Int32Array(n + 1);
    let timer = 0;

    function dfs(u, p, d) {
        par[u] = p;
        dist[u] = d;
        tin[u] = ++timer;
        for (const [v, w] of adj[u]) {
            if (v !== p) dfs(v, u, d + w);
        }
        tout[u] = timer;
    }
    dfs(1, 0, 0);

    // BIT for range add, point query
    const bit = new Int32Array(n + 2);
    function add(i, v) { for (; i <= n; i += i & -i) bit[i] += v; }
    function sum(i) { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; }

    const ans = [];
    for (const q of queries) {
        if (q[0] === 1) {
            const [, u, v, w] = q;
            const old = edgeW.get(eKey(u, v));
            const delta = w - old;
            edgeW.set(eKey(u, v), w);
            const child = par[u] === v ? u : v;
            add(tin[child], delta);
            add(tout[child] + 1, -delta);
        } else {
            const [, x] = q;
            ans.push(dist[x] + sum(tin[x]));
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(treeQueries(2, [[1,2,7]], [[2,2],[1,1,2,4],[2,2]]))); // [7,4]
console.log(JSON.stringify(treeQueries(3, [[1,2,2],[1,3,4]], [[2,1],[2,3],[1,1,3,7],[2,2],[2,3]]))); // [0,4,2,7]
console.log(JSON.stringify(treeQueries(4, [[1,2,2],[2,3,1],[3,4,5]], [[2,4],[2,3],[1,2,3,3],[2,2],[2,3]]))); // [8,3,2,5]
