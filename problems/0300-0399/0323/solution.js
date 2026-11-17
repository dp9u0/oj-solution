/*
 * @lc app=leetcode.cn id=323 lang=javascript
 *
 * [323] 无向图中连通分量的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const parent = Array.from({ length: n }, (_, i) => i);
    const find = x => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    let count = n;
    for (const [a, b] of edges) {
        const ra = find(a), rb = find(b);
        if (ra !== rb) {
            parent[ra] = rb;
            count--;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]])); // 2
console.log(countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]])); // 1
console.log(countComponents(4, [[0, 1], [2, 3], [1, 2]])); // 1
console.log(countComponents(1, [])); // 1
console.log(countComponents(3, [])); // 3
