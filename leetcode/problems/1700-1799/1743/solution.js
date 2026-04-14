/*
 * @lc app=leetcode id=1743 lang=javascript
 *
 * [1743] Restore the Array From Adjacent Pairs
 */

// @lc code=start
/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    const adj = new Map();
    const degree = new Map();

    for (const [u, v] of adjacentPairs) {
        if (!adj.has(u)) adj.set(u, []);
        if (!adj.has(v)) adj.set(v, []);
        adj.get(u).push(v);
        adj.get(v).push(u);
        degree.set(u, (degree.get(u) || 0) + 1);
        degree.set(v, (degree.get(v) || 0) + 1);
    }

    let start = null;
    for (const [node, d] of degree) {
        if (d === 1) { start = node; break; }
    }

    const n = adjacentPairs.length + 1;
    const result = [start];
    const visited = new Set([start]);

    while (result.length < n) {
        for (const neighbor of adj.get(start)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                result.push(neighbor);
                start = neighbor;
                break;
            }
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(restoreArray([[2,1],[3,4],[3,2]])); // [1,2,3,4]
console.log(restoreArray([[4,-2],[1,4],[-3,1]])); // [-2,4,1,-3]
console.log(restoreArray([[100000,-100000]])); // [100000,-100000]
