/*
 * @lc app=leetcode id=1878 lang=javascript
 *
 * [1878] Get Biggest Three Rhombus Sums in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function(grid) {
  const m = grid.length, n = grid[0].length;
  const sums = new Set();

  for (let cx = 0; cx < m; cx++) {
    for (let cy = 0; cy < n; cy++) {
      sums.add(grid[cx][cy]);
      const maxR = Math.min(cx, cy, m - 1 - cx, n - 1 - cy);
      for (let r = 1; r <= maxR; r++) {
        let s = 0;
        // Top to Right (including both ends)
        for (let i = 0; i <= r; i++) s += grid[cx - r + i][cy + i];
        // Right to Bottom (excluding right corner)
        for (let i = 1; i <= r; i++) s += grid[cx + i][cy + r - i];
        // Bottom to Left (excluding bottom corner)
        for (let i = 1; i <= r; i++) s += grid[cx + r - i][cy - i];
        // Left to Top (excluding both corners)
        for (let i = 1; i < r; i++) s += grid[cx - i][cy - r + i];
        sums.add(s);
      }
    }
  }

  return [...sums].sort((a, b) => b - a).slice(0, 3);
};
// @lc code=end

// TEST:
console.log(getBiggestThree([[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]])); // [228,216,211]
console.log(getBiggestThree([[1,2,3],[4,5,6],[7,8,9]])); // [20,9,8]
console.log(getBiggestThree([[7,7,7]])); // [7]
console.log(getBiggestThree([[1]])); // [1]
console.log(getBiggestThree([[1,2],[3,4]])); // [4,3,2] or similar
