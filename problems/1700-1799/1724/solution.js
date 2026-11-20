/*
 * @lc app=leetcode.cn id=1724 lang=javascript
 *
 * [1724] 检查边长度限制的路径是否存在 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edgeList
 */
var DistanceLimitedPathsExist = function(n, edgeList) {
    const dsu = Array.from({ length: n }, (_, i) => i);
    const find = (x) => {
        while (dsu[x] !== x) {
            dsu[x] = dsu[dsu[x]];
            x = dsu[x];
        }
        return x;
    };
    // Kruskal -> minimum spanning forest
    const edges = edgeList.slice().sort((a, b) => a[2] - b[2]);
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        const ru = find(u), rv = find(v);
        if (ru !== rv) {
            dsu[ru] = rv;
            adj[u].push([v, w]);
            adj[v].push([u, w]);
        }
    }
    // BFS from each component root: depth + parent edge
    let LOG = 1;
    while ((1 << LOG) < n) LOG++;
    const depth = new Array(n).fill(-1);
    const par = new Array(n).fill(-1);
    const parw = new Array(n).fill(0);
    for (let s = 0; s < n; s++) {
        if (depth[s] !== -1) continue;
        depth[s] = 0;
        const queue = [s];
        for (let qi = 0; qi < queue.length; qi++) {
            const u = queue[qi];
            for (const [v, w] of adj[u]) {
                if (depth[v] === -1) {
                    depth[v] = depth[u] + 1;
                    par[v] = u;
                    parw[v] = w;
                    queue.push(v);
                }
            }
        }
    }
    // binary lifting: up[k][v], maxw[k][v]
    const up = Array.from({ length: LOG }, () => new Int32Array(n));
    const maxw = Array.from({ length: LOG }, () => new Int32Array(n));
    for (let v = 0; v < n; v++) {
        up[0][v] = par[v] === -1 ? v : par[v]; // roots self-loop with 0 weight
        maxw[0][v] = parw[v];
    }
    for (let k = 1; k < LOG; k++) {
        for (let v = 0; v < n; v++) {
            const m = up[k - 1][v];
            up[k][v] = up[k - 1][m];
            maxw[k][v] = Math.max(maxw[k - 1][v], maxw[k - 1][m]);
        }
    }
    this.dsu = dsu;
    this.find = find;
    this.depth = depth;
    this.up = up;
    this.maxw = maxw;
    this.LOG = LOG;
};

/**
 * @param {number} p
 * @param {number} q
 * @param {number} limit
 * @return {boolean}
 */
DistanceLimitedPathsExist.prototype.query = function(p, q, limit) {
    if (this.find(p) !== this.find(q)) return false;
    const { depth, up, maxw, LOG } = this;
    let u = p, v = q, mx = 0;
    if (depth[u] < depth[v]) [u, v] = [v, u];
    const diff = depth[u] - depth[v];
    for (let k = 0; k < LOG; k++) {
        if ((diff >> k) & 1) {
            mx = Math.max(mx, maxw[k][u]);
            u = up[k][u];
        }
    }
    if (u !== v) {
        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][u] !== up[k][v]) {
                mx = Math.max(mx, maxw[k][u], maxw[k][v]);
                u = up[k][u];
                v = up[k][v];
            }
        }
        mx = Math.max(mx, maxw[0][u], maxw[0][v]);
    }
    return mx < limit;
};

/**
 * Your DistanceLimitedPathsExist object will be instantiated and called as such:
 * var obj = new DistanceLimitedPathsExist(n, edgeList)
 * var param_1 = obj.query(p,q,limit)
 */
// @lc code=end

// TEST:
const d = new DistanceLimitedPathsExist(6,
    [[0,2,4],[0,3,2],[1,2,3],[2,3,1],[4,5,5]]);
console.log(d.query(2, 3, 2)); // true
console.log(d.query(1, 3, 3)); // false
console.log(d.query(2, 0, 3)); // true
console.log(d.query(0, 5, 6)); // false
