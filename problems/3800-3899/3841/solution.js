/*
 * @lc app=leetcode.cn id=3841 lang=javascript
 *
 * [3841] 查询树上回文路径
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
    const suneravilo = queries;

    // 邻接表（链式前向星）
    const m = 2 * (n - 1);
    const head = new Int32Array(n).fill(-1);
    const nxt = new Int32Array(m);
    const to = new Int32Array(m);
    for (let i = 0; i < m; i += 2) {
        const u = edges[i >> 1][0], v = edges[i >> 1][1];
        to[i] = v; nxt[i] = head[u]; head[u] = i;
        to[i + 1] = u; nxt[i + 1] = head[v]; head[v] = i + 1;
    }

    // 字符 -> 26 位掩码
    const maskAt = new Int32Array(n);
    for (let i = 0; i < n; i++) maskAt[i] = 1 << (s.charCodeAt(i) - 97);

    // BFS：parent / depth / 层序 / 根路径前缀 XOR f0
    const parent = new Int32Array(n);
    const depth = new Int32Array(n);
    const order = new Int32Array(n);
    const f0 = new Int32Array(n);
    const seen = new Uint8Array(n);
    parent[0] = 0;
    f0[0] = maskAt[0];
    order[0] = 0;
    seen[0] = 1;
    let qt = 1;
    for (let qh = 0; qh < qt; qh++) {
        const u = order[qh];
        for (let e = head[u]; e !== -1; e = nxt[e]) {
            const v = to[e];
            if (!seen[v]) {
                seen[v] = 1;
                parent[v] = u;
                depth[v] = depth[u] + 1;
                f0[v] = f0[u] ^ maskAt[v];
                order[qt++] = v;
            }
        }
    }

    // 迭代 DFS 求 Euler 序入点 tin（子树对应连续区间）
    const tin = new Int32Array(n);
    const tout = new Int32Array(n);
    const stack = new Int32Array(n);
    let sp = 0, timer = 0;
    stack[sp++] = 0;
    while (sp > 0) {
        const u = stack[--sp];
        tin[u] = timer++;
        for (let e = head[u]; e !== -1; e = nxt[e]) {
            const v = to[e];
            if (v !== 0 && parent[v] === u) stack[sp++] = v;
        }
    }
    // 逆层序传播：tout[u] = 子树内最大 tin（层序中后代必在祖先之后）
    for (let i = 0; i < n; i++) tout[i] = tin[i];
    for (let i = n - 1; i >= 1; i--) {
        const v = order[i], p = parent[v];
        if (tout[v] > tout[p]) tout[p] = tout[v];
    }

    // 倍增 LCA
    let LOG = 1;
    while ((1 << LOG) < n) LOG++;
    const up = new Array(LOG);
    up[0] = parent;
    for (let k = 1; k < LOG; k++) {
        const prev = up[k - 1];
        const cur = new Int32Array(n);
        for (let v = 0; v < n; v++) cur[v] = prev[prev[v]];
        up[k] = cur;
    }
    const lca = function(u, v) {
        if (depth[u] < depth[v]) { const t = u; u = v; v = t; }
        let diff = depth[u] - depth[v];
        for (let k = 0; diff > 0; k++, diff >>= 1) {
            if (diff & 1) u = up[k][u];
        }
        if (u === v) return u;
        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][u] !== up[k][v]) { u = up[k][u]; v = up[k][v]; }
        }
        return parent[u];
    };

    // 两个树状数组实现「区间 XOR 更新 + 单点查询」
    const b1 = new Int32Array(n + 1);
    const b2 = new Int32Array(n + 1);
    const rangeXor = function(l, r, x) {
        for (let i = l + 1; i <= n; i += i & -i) b1[i] ^= x;
        for (let i = r + 2; i <= n; i += i & -i) b2[i] ^= x;
    };
    const pointF = function(u) {
        let r = 0;
        for (let i = tin[u] + 1; i > 0; i -= i & -i) r ^= b1[i];
        for (let i = tin[u] + 1; i > 0; i -= i & -i) r ^= b2[i];
        return r;
    };

    const ans = [];
    for (let qi = 0; qi < queries.length; qi++) {
        const q = queries[qi];
        if (q.charCodeAt(0) === 117) { // 'u' -> update ui c
            const p1 = q.indexOf(' ', 7);
            const u = +q.slice(7, p1);
            const nm = 1 << (q.charCodeAt(p1 + 1) - 97);
            const delta = maskAt[u] ^ nm;
            if (delta) {
                maskAt[u] = nm;
                rangeXor(tin[u], tout[u], delta);
            }
        } else { // query ui vi
            const p = q.indexOf(' ', 6);
            const u = +q.slice(6, p);
            const v = +q.slice(p + 1);
            const l = lca(u, v);
            const mask = f0[u] ^ pointF(u) ^ f0[v] ^ pointF(v) ^ maskAt[l];
            ans.push((mask & (mask - 1)) === 0);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

// 示例 1
assert.deepStrictEqual(
    palindromePath(3, [[0, 1], [1, 2]], 'aac', ['query 0 2', 'update 1 b', 'query 0 2']),
    [true, false]
);

// 示例 2（星形树，根在中间）
assert.deepStrictEqual(
    palindromePath(4, [[0, 1], [0, 2], [0, 3]], 'abca',
        ['query 1 2', 'update 0 b', 'query 2 3', 'update 3 a', 'query 1 3']),
    [false, false, true]
);

// 单节点：路径只有自身，恒为回文
assert.deepStrictEqual(palindromePath(1, [], 'z', ['query 0 0', 'update 0 a', 'query 0 0']),
    [true, true]);

// 重复更新：含相同字符更新（delta = 0 应为 no-op），"cba" 三字符均奇数 -> false
assert.deepStrictEqual(
    palindromePath(3, [[0, 1], [1, 2]], 'aba',
        ['query 0 2', 'update 1 a', 'query 0 2', 'update 2 a', 'update 1 b',
         'query 0 2', 'update 0 c', 'query 0 2']),
    [true, true, true, false]
);

// 单点路径 u == v
assert.deepStrictEqual(
    palindromePath(2, [[0, 1]], 'ab', ['query 1 1', 'update 1 a', 'query 0 1', 'query 0 0']),
    [true, true, true]
);

// 深链 + 非根 lca：路径 3 -> 4 的 lca 是 1
assert.deepStrictEqual(
    palindromePath(5, [[0, 1], [1, 2], [1, 3], [3, 4]], 'abcde',
        ['query 2 4', 'query 3 4', 'query 2 3', 'update 4 d', 'query 3 4']),
    [false, false, false, true]
);

console.log('All tests passed!');
