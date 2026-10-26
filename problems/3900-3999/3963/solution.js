/*
 * @lc app=leetcode.cn id=3963 lang=javascript
 *
 * [3963] 构造恰好一条路径的网格
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

// TEST:
console.log(createGrid(2, 3)); // ["...","##."]
console.log(createGrid(3, 3)); // ["...","##.","##."]
console.log(createGrid(1, 4)); // ["...."]
console.log(createGrid(1, 1)); // ["."]
console.log(createGrid(4, 1)); // [".",".",".","."]
console.log(createGrid(25, 25));
