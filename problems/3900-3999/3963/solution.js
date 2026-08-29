/*
 * @lc app=leetcode id=3963 lang=javascript
 *
 * [3963] Create Grid With Exactly One Path
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
  const grid = ['.'.repeat(n)];
  for (let i = 1; i < m; i++) {
    grid.push('#'.repeat(n - 1) + '.');
  }
  return grid;
};
// @lc code=end

// TEST: verify path count == 1 via dp
const countPaths = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '#') continue;
      if (i === 0 && j === 0) dp[i][j] = 1;
      else dp[i][j] = (i > 0 ? dp[i - 1][j] : 0) + (j > 0 ? dp[i][j - 1] : 0);
    }
  }
  return dp[m - 1][n - 1];
};
let ok = true;
for (let m = 1; m <= 8; m++) {
  for (let n = 1; n <= 8; n++) {
    const g = createGrid(m, n);
    if (g.length !== m || g[0].length !== n || countPaths(g) !== 1) {
      ok = false;
      console.log('BAD', m, n, JSON.stringify(g), countPaths(g));
    }
  }
}
console.log(ok);
console.log(JSON.stringify(createGrid(2, 3)) === JSON.stringify(['...', '##.']));
console.log(JSON.stringify(createGrid(1, 4)) === JSON.stringify(['....']));
console.log(JSON.stringify(createGrid(1, 1)) === JSON.stringify(['.']));
