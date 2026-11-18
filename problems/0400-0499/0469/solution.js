/*
 * @lc app=leetcode.cn id=469 lang=javascript
 *
 * [469] 凸多边形
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isConvex = function(points) {
    const n = points.length;
    let sign = 0;
    for (let i = 0; i < n; i++) {
        const [ax, ay] = points[i];
        const [bx, by] = points[(i + 1) % n];
        const [cx, cy] = points[(i + 2) % n];
        const cross = (bx - ax) * (cy - by) - (by - ay) * (cx - bx);
        if (cross !== 0) { // collinear triples don't affect convexity
            const s = cross > 0 ? 1 : -1;
            if (sign === 0) sign = s;
            else if (sign !== s) return false; // turned the other way
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(isConvex([[0, 0], [0, 5], [5, 5], [5, 0]])); // true
console.log(isConvex([[0, 0], [0, 10], [10, 10], [10, 0], [5, 5]])); // false
console.log(isConvex([[0, 0], [4, 2], [1, 4]])); // true (triangle)
console.log(isConvex([[0, 0], [1, 1], [0, 2]])); // true (CCW triangle)
console.log(isConvex([[0, 0], [1, 0], [2, 0], [2, 1]])); // true (collinear vertex allowed)
console.log(isConvex([[0, 0], [4, 0], [4, 4], [2, 1]])); // false (reflex corner at (2,1))
