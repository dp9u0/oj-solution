/*
 * @lc app=leetcode.cn id=1168 lang=javascript
 *
 * [1168] 水资源分配优化
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function(n, wells, pipes) {
    // virtual node 0 = water source; well at house i is an edge (0, i+1)
    const edges = [];
    for (let i = 0; i < n; i++) edges.push([0, i + 1, wells[i]]);
    for (const [a, b, c] of pipes) edges.push([a, b, c]);
    edges.sort((a, b) => a[2] - b[2]);

    const parent = Array.from({ length: n + 1 }, (_, i) => i);
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    let total = 0, used = 0;
    for (const [a, b, c] of edges) {
        const ra = find(a), rb = find(b);
        if (ra !== rb) {
            parent[ra] = rb;
            total += c;
            if (++used === n) return total; // MST over n+1 nodes has n edges
        }
    }
    return total;
};
// @lc code=end

// TEST:
console.log(minCostToSupplyWater(3, [1,2,2], [[1,2,1],[2,3,1]])); // 3
console.log(minCostToSupplyWater(2, [1,1], [[1,2,1]])); // 2
console.log(minCostToSupplyWater(1, [5], [])); // 5
console.log(minCostToSupplyWater(3, [0,0,0], [[1,2,100]])); // 0 (free wells everywhere)
console.log(minCostToSupplyWater(4, [10,10,10,10], [[1,2,1],[2,3,2],[3,4,3]])); // 10+1+2+3=16
