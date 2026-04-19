/*
 * @lc app=leetcode id=3212 lang=javascript
 *
 * [3212] Count Submatrices With Equal Frequency of X and Y
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function(grid) {
  const m = grid.length, n = grid[0].length;
  const px = Array.from({ length: m }, () => new Array(n).fill(0));
  const py = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const x = grid[i][j] === 'X' ? 1 : 0;
      const y = grid[i][j] === 'Y' ? 1 : 0;
      px[i][j] = x + (i > 0 ? px[i - 1][j] : 0) + (j > 0 ? px[i][j - 1] : 0) - (i > 0 && j > 0 ? px[i - 1][j - 1] : 0);
      py[i][j] = y + (i > 0 ? py[i - 1][j] : 0) + (j > 0 ? py[i][j - 1] : 0) - (i > 0 && j > 0 ? py[i - 1][j - 1] : 0);
    }
  }
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (px[i][j] === py[i][j] && px[i][j] >= 1) count++;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(numberOfSubmatrices([['X', 'Y', '.'], ['Y', '.', '.']])); // 3
console.log(numberOfSubmatrices([['X', 'X'], ['X', 'Y']])); // 0
console.log(numberOfSubmatrices([['.', '.'], ['.', '.']])); // 0
console.log(numberOfSubmatrices([['X']])); // 0
console.log(numberOfSubmatrices([['X', 'Y']])); // 1
console.log(numberOfSubmatrices([['X', 'Y', 'X', 'Y']])); // 2
