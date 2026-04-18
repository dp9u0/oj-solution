/*
 * @lc app=leetcode id=1260 lang=javascript
 *
 * [1260] Shift 2D Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const m = grid.length, n = grid[0].length;
  const total = m * n;
  k = k % total;
  if (k === 0) return grid;

  const flat = grid.flat();
  const shifted = [...flat.slice(-k), ...flat.slice(0, -k)];
  const result = [];
  for (let i = 0; i < m; i++) {
    result.push(shifted.slice(i * n, i * n + n));
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1))); // [[9,1,2],[3,4,5],[6,7,8]]
console.log(JSON.stringify(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4))); // [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
console.log(JSON.stringify(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 9))); // [[1,2,3],[4,5,6],[7,8,9]]
console.log(JSON.stringify(shiftGrid([[1]], 0))); // [[1]]
console.log(JSON.stringify(shiftGrid([[1,2],[3,4]], 2))); // [[3,4],[1,2]]
