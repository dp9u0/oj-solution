/*
 * @lc app=leetcode.cn id=2479 lang=javascript
 *
 * [2479] 两个不重叠子树的最大异或值
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
var maxXor = function(n, edges, values) {
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }
    const sum = new Float64Array(n);
    const parent = new Int32Array(n).fill(-1);
    const stk = [0];
    const order = [];
    while (stk.length) {
        const u = stk.pop();
        order.push(u);
        for (const v of adj[u]) {
            if (v !== parent[u]) {
                parent[v] = u;
                stk.push(v);
            }
        }
    }
    for (let k = order.length - 1; k >= 0; k--) {
        const u = order[k];
        sum[u] = values[u];
        for (const v of adj[u]) {
            if (v !== parent[u]) sum[u] += sum[v];
        }
    }
    const BITS = 46;
    const tl = new Int32Array(n * BITS + 2).fill(-1);
    const tr = new Int32Array(n * BITS + 2).fill(-1);
    let nodeCount = 1;
    const bitOf = (x, b) => Math.floor(x / 2 ** b) % 2;
    const insert = (x) => {
        let cur = 0;
        for (let b = BITS - 1; b >= 0; b--) {
            const bit = bitOf(x, b);
            const nxt = bit ? tr[cur] : tl[cur];
            if (nxt === -1) {
                if (bit) tr[cur] = nodeCount; else tl[cur] = nodeCount;
                cur = nodeCount++;
            } else {
                cur = nxt;
            }
        }
    };
    const query = (x) => {
        let cur = 0, val = 0;
        for (let b = BITS - 1; b >= 0; b--) {
            const bit = bitOf(x, b);
            const want = bit ? tl[cur] : tr[cur];
            if (want !== -1) {
                val = val * 2 + 1;
                cur = want;
            } else {
                val = val * 2;
                cur = bit ? tr[cur] : tl[cur];
            }
        }
        return val;
    };
    let best = 0;
    let inserted = 0;
    const dfsStack = [{ u: 0, phase: 0 }];
    while (dfsStack.length) {
        const top = dfsStack[dfsStack.length - 1];
        if (top.phase === 0) {
            top.phase = 1;
            const u = top.u;
            if (inserted > 0) {
                const x = query(sum[u]);
                if (x > best) best = x;
            }
            for (const v of adj[u]) {
                if (v !== parent[u]) dfsStack.push({ u: v, phase: 0 });
            }
        } else {
            const u = top.u;
            dfsStack.pop();
            insert(sum[u]);
            inserted++;
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(maxXor(6, [[0,1],[0,2],[1,3],[1,4],[2,5]], [2,8,3,6,2,5])); // 24
console.log(maxXor(3, [[0,1],[1,2]], [4,6,1])); // 0
console.log(maxXor(2, [[0,1]], [5,7])); // 0 (only two overlapping? subtrees of 0 and 1 overlap -> 0)
console.log(maxXor(4, [[0,1],[0,2],[1,3]], [3,9,5,7])); // 21 (subtree sums 16 and 5 at nodes 1,2)
console.log(maxXor(5, [[0,1],[1,2],[0,3],[3,4]], [1,1,1,1,1])); // sums: 2:1, 1:2, 4:1, 3:2, 0:5. disjoint: (2,4):0; (2,3):3; (2,0)? overlap; (1,3):0; (1,4):3; (4,1):3 -> 3
