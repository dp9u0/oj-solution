/*
 * @lc app=leetcode.cn id=1135 lang=javascript
 *
 * [1135] 最低成本连通所有城市
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
    connections.sort((a, b) => a[2] - b[2]);
    const parent = Array.from({ length: n + 1 }, (_, i) => i);
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    let total = 0, used = 0;
    for (const [x, y, c] of connections) {
        const rx = find(x), ry = find(y);
        if (rx !== ry) {
            parent[rx] = ry;
            total += c;
            if (++used === n - 1) return total;
        }
    }
    return used === n - 1 ? total : -1; // covers n = 1 (0 edges needed)
};
// @lc code=end

// TEST:
console.log(minimumCost(3, [[1,2,5],[1,3,6],[2,3,1]])); // 6
console.log(minimumCost(4, [[1,2,3],[3,4,4]])); // -1
console.log(minimumCost(1, [])); // 0 (single city, nothing to connect)
console.log(minimumCost(4, [[1,2,1],[2,3,2],[3,4,3],[1,4,10]])); // 6 (drop the 10-edge)
console.log(minimumCost(3, [[1,2,1],[1,2,1],[2,3,2]])); // 3 (parallel edges, skip cycle)
