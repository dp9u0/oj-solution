/*
 * @lc app=leetcode id=391 lang=javascript
 *
 * [391] Perfect Rectangle
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
  let area = 0;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  const corners = new Set();
  const toggle = (x, y) => {
    const key = x + ',' + y;
    if (corners.has(key)) corners.delete(key);
    else corners.add(key);
  };
  for (const [x, y, a, b] of rectangles) {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, a);
    maxY = Math.max(maxY, b);
    area += (a - x) * (b - y);
    toggle(x, y);
    toggle(x, b);
    toggle(a, y);
    toggle(a, b);
  }
  if (area !== (maxX - minX) * (maxY - minY)) return false;
  if (corners.size !== 4) return false;
  if (!corners.has(minX + ',' + minY)) return false;
  if (!corners.has(minX + ',' + maxY)) return false;
  if (!corners.has(maxX + ',' + minY)) return false;
  if (!corners.has(maxX + ',' + maxY)) return false;
  return true;
};
// @lc code=end

// TEST:
console.log(isRectangleCover([[1, 1, 3, 3], [3, 1, 4, 2], [3, 2, 4, 4], [1, 3, 2, 4], [2, 3, 3, 4]]) === true);
console.log(isRectangleCover([[1, 1, 2, 3], [1, 3, 2, 4], [3, 1, 4, 2], [3, 2, 4, 4]]) === false);
console.log(isRectangleCover([[1, 1, 3, 3], [3, 1, 4, 2], [1, 3, 2, 4], [2, 2, 4, 4]]) === false);
console.log(isRectangleCover([[0, 0, 4, 1]]) === true);
console.log(isRectangleCover([[1, 1, 3, 3], [3, 1, 4, 2], [1, 3, 2, 4], [3, 2, 4, 4]]) === false);
console.log(isRectangleCover([[1, 1, 3, 3], [3, 1, 4, 2], [1, 3, 2, 4], [2, 3, 3, 4]]) === false);
