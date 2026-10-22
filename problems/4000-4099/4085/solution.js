/*
 * @lc app=leetcode.cn id=4085 lang=javascript
 *
 * [4085] 找到颜色树的根
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {string} colors
 * @return {number}
 */
var findColoredRoot = function(edges, colors) {
    // 每条边的父→子颜色必须是循环后继：等色无解，否则方向唯一确定；
    // 定向树中根是唯一入度 0 的节点，且根的度（=子节点数）≤ 2
    const succ = { R: 'B', B: 'W', W: 'R' };
    const n = colors.length;
    const indeg = new Array(n).fill(0);
    const deg = new Array(n).fill(0);
    for (const [u, v] of edges) {
        if (colors[u] === colors[v]) return -1;
        deg[u]++;
        deg[v]++;
        if (succ[colors[u]] === colors[v]) indeg[v]++;
        else indeg[u]++;
    }
    let root = -1;
    for (let i = 0; i < n; i++) {
        if (indeg[i] === 0) {
            if (root !== -1) return -1; // 多个入度 0 → 无根可定向
            root = i;
        }
    }
    if (root === -1) return -1;
    return deg[root] <= 2 ? root : -1;
};
// @lc code=end

// TEST:
console.log(findColoredRoot([[3, 1], [3, 2], [1, 4], [2, 0]], 'BRRWB') === 3);
console.log(findColoredRoot([[0, 1]], 'RR') === -1); // 等色边
console.log(findColoredRoot([[0, 1], [0, 2], [0, 3]], 'BRWB') === -1); // 根度 3 超 2
console.log(findColoredRoot([[0, 1], [0, 2]], 'BRW') === 1); // R→B→W 环下边方向强制，根为 1
console.log(findColoredRoot([], 'R') === 0); // 单节点
