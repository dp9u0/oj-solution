/*
 * @lc app=leetcode id=2319 lang=javascript
 *
 * [2319] Check if Matrix Is X-Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
  const n = grid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const onDiag = (i === j || i + j === n - 1);
      if (onDiag && grid[i][j] === 0) return false;
      if (!onDiag && grid[i][j] !== 0) return false;
    }
  }
  return true;
};
// @lc code=end

// TEST:
console.log(checkXMatrix([[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]])); // true
console.log(checkXMatrix([[5,7,0],[0,3,1],[0,5,0]])); // false
console.log(checkXMatrix([[1,0,1],[0,1,0],[1,0,1]])); // true
