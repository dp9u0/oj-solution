/*
 * @lc app=leetcode id=1401 lang=javascript
 *
 * [1401] Circle and Rectangle Overlapping
 */

// @lc code=start
/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
    const nearestX = Math.max(x1, Math.min(xCenter, x2));
    const nearestY = Math.max(y1, Math.min(yCenter, y2));
    const dx = xCenter - nearestX;
    const dy = yCenter - nearestY;
    return dx * dx + dy * dy <= radius * radius;
};
// @lc code=end

// TEST:
console.log(checkOverlap(1, 0, 0, 1, -1, 3, 1)); // true
console.log(checkOverlap(1, 1, 1, 1, -3, 2, -1)); // false
console.log(checkOverlap(1, 0, 0, -1, 0, 0, 1)); // true
console.log(checkOverlap(5, 0, 0, 10, 10, 20, 20)); // false
console.log(checkOverlap(1, 0, 0, 0, 0, 1, 1)); // true (center inside rect)
console.log(checkOverlap(1, 5, 5, 0, 0, 1, 1)); // false
