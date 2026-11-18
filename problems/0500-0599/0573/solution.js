/*
 * @lc app=leetcode.cn id=573 lang=javascript
 *
 * [573] 松鼠模拟
 */

// @lc code=start
/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
var minDistance = function(height, width, tree, squirrel, nuts) {
    const d = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    let total = 0, bestDelta = Infinity;
    for (const nut of nuts) {
        const dt = d(nut, tree);
        total += 2 * dt; // round trip for every nut
        const delta = d(squirrel, nut) - dt; // savings if this nut is first
        if (delta < bestDelta) bestDelta = delta;
    }
    return total + bestDelta;
};
// @lc code=end

// TEST:
console.log(minDistance(5, 7, [2, 2], [4, 4], [[3, 0], [2, 5]])); // 12
console.log(minDistance(1, 1, [0, 0], [0, 1], [[0, 0]])); // 1
console.log(minDistance(2, 2, [0, 0], [0, 0], [[1, 1]])); // 4
console.log(minDistance(4, 4, [0, 0], [3, 3], [[1, 0], [0, 1]])); // 8
console.log(minDistance(5, 5, [0, 0], [4, 4], [[4, 4], [1, 0]])); // 10 (far nut first saves 8)
