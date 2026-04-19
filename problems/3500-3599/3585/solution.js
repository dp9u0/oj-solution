/*
 * @lc app=leetcode id=3585 lang=javascript
 *
 * [3585] Find Weighted Median Node in Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var findMedian = function(n, edges, queries) {
    const LOG = 17;

    // Build adjacency list
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    // BFS from root 0
    const depth = new Array(n).fill(0);
    const dist = new Array(n).fill(0);
    const par = Array.from({ length: LOG }, () => new Array(n).fill(-1));

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
                dist[v] = dist[u] + w;
                par[0][v] = u;
                queue.push(v);
            }
        }
    }

    // Binary lifting table
    for (let k = 1; k < LOG; k++) {
        for (let v = 0; v < n; v++) {
            if (par[k - 1][v] !== -1) {
                par[k][v] = par[k - 1][par[k - 1][v]];
            }
        }
    }

    // LCA using binary lifting
    const lca = (u, v) => {
        if (depth[u] < depth[v]) [u, v] = [v, u];
        let diff = depth[u] - depth[v];
        for (let k = 0; k < LOG; k++) {
            if ((diff >> k) & 1) u = par[k][u];
        }
        if (u === v) return u;
        for (let k = LOG - 1; k >= 0; k--) {
            if (par[k][u] !== par[k][v]) {
                u = par[k][u];
                v = par[k][v];
            }
        }
        return par[0][u];
    };

    // Process queries
    const res = [];
    for (const [u, v] of queries) {
        if (u === v) { res.push(u); continue; }

        const l = lca(u, v);
        const total = dist[u] + dist[v] - 2 * dist[l];
        const cumUL = dist[u] - dist[l];

        if (cumUL * 2 >= total) {
            // Median on u->lca segment
            // Find last node where condition NOT met, then one step up
            let cur = u;
            for (let k = LOG - 1; k >= 0; k--) {
                const p = par[k][cur];
                if (p !== -1 && depth[p] >= depth[l] && (dist[u] - dist[p]) * 2 < total) {
                    cur = p;
                }
            }
            res.push(par[0][cur]);
        } else {
            // Median on lca->v segment
            let cur = v;
            for (let k = LOG - 1; k >= 0; k--) {
                const p = par[k][cur];
                if (p !== -1 && depth[p] >= depth[l] &&
                    2 * (cumUL + dist[p] - dist[l]) >= total) {
                    cur = p;
                }
            }
            res.push(cur);
        }
    }

    return res;
};
// @lc code=end

// TEST:
console.log(findMedian(2, [[0, 1, 7]], [[1, 0], [0, 1]])); // [0, 1]
console.log(findMedian(3, [[0, 1, 2], [2, 0, 4]], [[0, 1], [2, 0], [1, 2]])); // [1, 0, 2]
console.log(findMedian(5, [[0, 1, 2], [0, 2, 5], [1, 3, 1], [2, 4, 3]], [[3, 4], [1, 2]])); // [2, 2]
