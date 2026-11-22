/*
 * @lc app=leetcode.cn id=3004 lang=javascript
 *
 * [3004] 相同颜色的最大子树
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[]} colors
 * @return {number}
 */
var maximumSubtreeSize = function(edges, colors) {
    const n = colors.length;
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    const size = new Array(n).fill(1);
    const uniform = new Array(n).fill(true);
    let ans = 1;
    // iterative post-order
    const stack = [0];
    const parent = new Array(n).fill(-1);
    const order = [];
    while (stack.length) {
        const u = stack.pop();
        order.push(u);
        for (const w of adj[u]) {
            if (w === parent[u]) continue;
            parent[w] = u;
            stack.push(w);
        }
    }
    for (let t = order.length - 1; t >= 0; t--) {
        const u = order[t];
        let sz = 1, ok = true;
        for (const w of adj[u]) {
            if (w === parent[u]) continue;
            sz += size[w];
            if (!uniform[w] || colors[w] !== colors[u]) ok = false;
        }
        size[u] = sz;
        uniform[u] = ok;
        if (ok && sz > ans) ans = sz;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximumSubtreeSize([[0,1],[0,2],[0,3]], [1,1,2,3])); // 1
console.log(maximumSubtreeSize([[0,1],[0,2],[0,3]], [1,1,1,1])); // 4
console.log(maximumSubtreeSize([[0,1],[0,2],[2,3],[2,4]], [1,2,3,3,3])); // 3
console.log(maximumSubtreeSize([], [7])); // 1
console.log(maximumSubtreeSize([[0,1],[1,2]], [5,5,5])); // 3
