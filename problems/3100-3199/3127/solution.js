/*
 * @lc app=leetcode id=3127 lang=javascript
 *
 * [3127] Make a Square with the Same Color
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let b = 0;
      if (grid[i][j] === 'B') b++;
      if (grid[i][j+1] === 'B') b++;
      if (grid[i+1][j] === 'B') b++;
      if (grid[i+1][j+1] === 'B') b++;
      if (b >= 3 || b <= 1) return true;
    }
  }
  return false;
};
// @lc code=end

// TEST:
console.log(canMakeSquare([["B","W","B"],["B","W","W"],["B","W","B"]])); // true
console.log(canMakeSquare([["B","W","B"],["W","B","W"],["B","W","B"]])); // false
console.log(canMakeSquare([["B","W","B"],["B","W","W"],["B","W","W"]])); // true
console.log(canMakeSquare([["B","B","B"],["B","B","B"],["B","B","B"]])); // true
console.log(canMakeSquare([["W","B","W"],["B","W","B"],["W","B","W"]])); // false
