/*
 * @lc app=leetcode id=939 lang=javascript
 *
 * [939] Minimum Area Rectangle
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  const pointSet = new Set(points.map(p => `${p[0]},${p[1]}`));
  const has = (x, y) => pointSet.has(`${x},${y}`);
  let minArea = Infinity;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      if (x1 !== x2 && y1 !== y2 && has(x1, y2) && has(x2, y1)) {
        minArea = Math.min(minArea, Math.abs(x2 - x1) * Math.abs(y2 - y1));
      }
    }
  }
  return minArea === Infinity ? 0 : minArea;
};
// @lc code=end

// TEST:
console.log(minAreaRect([[1,1],[1,3],[3,1],[3,3],[2,2]])); // 4
console.log(minAreaRect([[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]])); // 2
