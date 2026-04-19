/*
 * @lc app=leetcode id=3841 lang=javascript
 *
 * [3841] Palindromic Path Queries in a Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} s
 * @param {string[]} queries
 * @return {boolean[]}
 */
var palindromePath = function(n, edges, s, queries) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const tin = new Int32Array(n);
    const tout = new Int32Array(n);
    const depth = new Int32Array(n);
    const par = new Int32Array(n);
    const baseMask = new Int32Array(n);
    let timer = 0;

    par[0] = -1;
    depth[0] = 0;
    baseMask[0] = 1 << (s.charCodeAt(0) - 97);
    tin[0] = timer++;

    const stk = [{ v: 0, i: 0 }];
    while (stk.length) {
        const top = stk[stk.length - 1];
        if (top.i < adj[top.v].length) {
            const u = adj[top.v][top.i++];
            if (u !== par[top.v]) {
                par[u] = top.v;
                depth[u] = depth[top.v] + 1;
                baseMask[u] = baseMask[top.v] ^ (1 << (s.charCodeAt(u) - 97));
                tin[u] = timer++;
                stk.push({ v: u, i: 0 });
            }
        } else {
            tout[top.v] = timer - 1;
            stk.pop();
        }
    }

    const LOG = 17;
    const up = new Int32Array(LOG * n);
    for (let v = 0; v < n; v++) up[v] = par[v] === -1 ? v : par[v];
    for (let j = 1; j < LOG; j++) {
        const off = j * n, prev = (j - 1) * n;
        for (let v = 0; v < n; v++) up[off + v] = up[prev + up[prev + v]];
    }

    const lca = (u, v) => {
        if (depth[u] < depth[v]) [u, v] = [v, u];
        let d = depth[u] - depth[v];
        for (let j = 0; j < LOG; j++) {
            if ((d >> j) & 1) u = up[j * n + u];
        }
        if (u === v) return u;
        for (let j = LOG - 1; j >= 0; j--) {
            const pu = up[j * n + u], pv = up[j * n + v];
            if (pu !== pv) { u = pu; v = pv; }
        }
        return par[u];
    };

    const bit = new Int32Array(n + 1);
    const bitUpdate = (i, val) => {
        for (i++; i <= n; i += i & (-i)) bit[i] ^= val;
    };
    const bitQuery = (i) => {
        let r = 0;
        for (i++; i > 0; i -= i & (-i)) r ^= bit[i];
        return r;
    };

    const getEff = (v) => baseMask[v] ^ bitQuery(tin[v]);
    const curChar = s.split('');
    const res = [];

    for (const q of queries) {
        const parts = q.split(' ');
        if (parts[0] === 'update') {
            const ui = +parts[1], c = parts[2];
            if (curChar[ui] !== c) {
                const diff = (1 << (curChar[ui].charCodeAt(0) - 97)) ^ (1 << (c.charCodeAt(0) - 97));
                bitUpdate(tin[ui], diff);
                bitUpdate(tout[ui] + 1, diff);
                curChar[ui] = c;
            }
        } else {
            const ui = +parts[1], vi = +parts[2];
            const l = lca(ui, vi);
            const pm = getEff(ui) ^ getEff(vi) ^ getEff(l) ^ (par[l] === -1 ? 0 : getEff(par[l]));
            res.push((pm & (pm - 1)) === 0);
        }
    }

    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(palindromePath(3, [[0,1],[1,2]], 'aac', ['query 0 2','update 1 b','query 0 2']))); // [true,false]
console.log(JSON.stringify(palindromePath(4, [[0,1],[0,2],[0,3]], 'abca', ['query 1 2','update 0 b','query 2 3','update 3 a','query 1 3']))); // [false,false,true]
console.log(JSON.stringify(palindromePath(1, [], 'a', ['query 0 0']))); // [true]
console.log(JSON.stringify(palindromePath(2, [[0,1]], 'aa', ['query 0 1','update 0 b','query 0 1']))); // [true,false]
console.log(JSON.stringify(palindromePath(5, [[0,1],[1,2],[2,3],[3,4]], 'abcba', ['query 0 4','query 2 2']))); // [true,true]
