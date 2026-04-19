/*
 * @lc app=leetcode id=3142 lang=javascript
 *
 * [3142] Check if Grid Satisfies Conditions
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(grid) {
  const m = grid.length, n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i + 1 < m && grid[i][j] !== grid[i + 1][j]) return false;
      if (j + 1 < n && grid[i][j] === grid[i][j + 1]) return false;
    }
  }
  return true;
};
// @lc code=end

// TEST:
console.log(satisfiesConditions([[1, 0, 2], [1, 0, 2]]));   // true
console.log(satisfiesConditions([[1, 1, 1], [0, 0, 0]]));   // false
console.log(satisfiesConditions([[1], [2], [3]]));           // false
console.log(satisfiesConditions([[1, 2, 3]]));               // true
