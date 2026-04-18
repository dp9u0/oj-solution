/*
 * @lc app=leetcode id=1139 lang=javascript
 *
 * [1139] Largest 1-Bordered Square
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
  const m = grid.length, n = grid[0].length;
  const right = Array.from({ length: m }, () => new Array(n).fill(0));
  const down = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        right[i][j] = (j > 0 ? right[i][j - 1] : 0) + 1;
        down[i][j] = (i > 0 ? down[i - 1][j] : 0) + 1;
      }
    }
  }
  let maxLen = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const s = Math.min(right[i][j], down[i][j]);
      for (let k = s; k > maxLen; k--) {
        if (right[i - k + 1][j] >= k && down[i][j - k + 1] >= k) {
          maxLen = k;
          break;
        }
      }
    }
  }
  return maxLen * maxLen;
};
// @lc code=end

// TEST:
console.log(largest1BorderedSquare([[1,1,1],[1,0,1],[1,1,1]])); // 9
console.log(largest1BorderedSquare([[1,1,0,0]])); // 1
console.log(largest1BorderedSquare([[0]])); // 0
console.log(largest1BorderedSquare([[1,1,1,1]])); // 1
console.log(largest1BorderedSquare([[1,1],[1,1]])); // 4
