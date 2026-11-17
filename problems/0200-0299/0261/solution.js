/*
 * @lc app=leetcode.cn id=261 lang=javascript
 *
 * [261] 以图判树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if (edges.length !== n - 1) return false; // wrong edge count: cycle or disconnected

    const parent = Array.from({ length: n }, (_, i) => i);
    const find = x => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]]; // path halving
            x = parent[x];
        }
        return x;
    };

    for (const [a, b] of edges) {
        const ra = find(a), rb = find(b);
        if (ra === rb) return false; // cycle
        parent[ra] = rb;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]])); // true
console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]])); // false (cycle)
console.log(validTree(1, [])); // true
console.log(validTree(2, [])); // false (disconnected)
console.log(validTree(4, [[0, 1], [2, 3]])); // false (disconnected)
