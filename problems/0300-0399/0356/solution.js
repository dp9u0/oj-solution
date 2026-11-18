/*
 * @lc app=leetcode.cn id=356 lang=javascript
 *
 * [356] 直线镜像
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function(points) {
    if (!points.length) return true;

    // x = (minX + maxX) / 2 is the only possible mirror axis
    let minX = Infinity, maxX = -Infinity;
    const seen = new Set();
    for (const [x, y] of points) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        seen.add(x + ',' + y);
    }

    const mid2 = minX + maxX; // doubled to stay integral
    for (const [x, y] of points) {
        if (!seen.has((mid2 - x) + ',' + y)) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(isReflected([[1, 1], [-1, 1]])); // true
console.log(isReflected([[1, 1], [-1, -1]])); // false
console.log(isReflected([[0, 0]])); // true (on the axis)
console.log(isReflected([])); // true
console.log(isReflected([[1, 1], [1, 1], [-1, 1]])); // true (duplicates fine)
console.log(isReflected([[1, 1], [-1, 1], [3, 1]])); // false
