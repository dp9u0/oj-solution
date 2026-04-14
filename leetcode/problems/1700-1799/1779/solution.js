/*
 * @lc app=leetcode id=1779 lang=javascript
 *
 * [1779] Find Nearest Point That Has the Same X or Y Coordinate
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  let minDist = Infinity, minIdx = -1;
  for (let i = 0; i < points.length; i++) {
    const [a, b] = points[i];
    if (a === x || b === y) {
      const dist = Math.abs(a - x) + Math.abs(b - y);
      if (dist < minDist) {
        minDist = dist;
        minIdx = i;
      }
    }
  }
  return minIdx;
};
// @lc code=end

// TEST:
console.log(nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]])); // 2
console.log(nearestValidPoint(3, 4, [[3,4]]));                         // 0
console.log(nearestValidPoint(3, 4, [[2,3]]));                         // -1
