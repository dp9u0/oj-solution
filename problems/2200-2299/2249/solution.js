/*
 * @lc app=leetcode id=2249 lang=javascript
 *
 * [2249] Count Lattice Points Inside a Circle
 */

// @lc code=start
/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
    const points = new Set();
    for (const [cx, cy, r] of circles) {
        const r2 = r * r;
        for (let x = cx - r; x <= cx + r; x++) {
            for (let y = cy - r; y <= cy + r; y++) {
                if ((x - cx) * (x - cx) + (y - cy) * (y - cy) <= r2) {
                    points.add(x * 1000 + y);
                }
            }
        }
    }
    return points.size;
};
// @lc code=end

// TEST:
console.log(countLatticePoints([[2,2,1]])); // 5
console.log(countLatticePoints([[2,2,2],[3,4,1]])); // 16
console.log(countLatticePoints([[1,1,1]])); // 5
console.log(countLatticePoints([[5,5,3]])); // 29
console.log(countLatticePoints([[1,1,1],[1,1,1]])); // 5 (same circle)
console.log(countLatticePoints([[100,100,1]])); // 5
