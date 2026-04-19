/*
 * @lc app=leetcode id=3531 lang=javascript
 *
 * [3531] Count Covered Buildings
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function(n, buildings) {
  const rowMin = new Map();
  const rowMax = new Map();
  const colMin = new Map();
  const colMax = new Map();

  for (const [x, y] of buildings) {
    if (!rowMin.has(x) || y < rowMin.get(x)) rowMin.set(x, y);
    if (!rowMax.has(x) || y > rowMax.get(x)) rowMax.set(x, y);
    if (!colMin.has(y) || x < colMin.get(y)) colMin.set(y, x);
    if (!colMax.has(y) || x > colMax.get(y)) colMax.set(y, x);
  }

  let count = 0;
  for (const [x, y] of buildings) {
    if (rowMin.get(x) < y && rowMax.get(x) > y &&
        colMin.get(y) < x && colMax.get(y) > x) {
      count++;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(countCoveredBuildings(3, [[1,2],[2,2],[3,2],[2,1],[2,3]])); // 1
console.log(countCoveredBuildings(3, [[1,1],[1,2],[2,1],[2,2]])); // 0
console.log(countCoveredBuildings(5, [[1,3],[3,2],[3,3],[3,5],[5,3]])); // 1
console.log(countCoveredBuildings(2, [[1,1],[1,2],[2,1],[2,2]])); // 0
console.log(countCoveredBuildings(3, [[1,2],[2,1],[2,2],[2,3],[3,2]])); // 1
