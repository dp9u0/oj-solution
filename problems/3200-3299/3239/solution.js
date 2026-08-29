/*
 * @lc app=leetcode id=3239 lang=javascript
 *
 * [3239] Minimum Number of Flips to Make Binary Grid Palindromic I
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let rowCost = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n >> 1; j++) {
      if (grid[i][j] !== grid[i][n - 1 - j]) rowCost++;
    }
  }
  let colCost = 0;
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m >> 1; i++) {
      if (grid[i][j] !== grid[m - 1 - i][j]) colCost++;
    }
  }
  return Math.min(rowCost, colCost);
};
// @lc code=end

// TEST:
console.log(minFlips([[1, 0, 0], [0, 0, 0], [0, 0, 1]]) === 2);
console.log(minFlips([[0, 1], [0, 1], [0, 0]]) === 1);
console.log(minFlips([[1], [0]]) === 0);
console.log(minFlips([[1, 1], [1, 1]]) === 0);
console.log(minFlips([[1, 0], [0, 1]]) === 2);
console.log(minFlips([[1, 1, 1, 0]]) === 0);
console.log(minFlips([[1, 0], [1, 0]]) === 0);
