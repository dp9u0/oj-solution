/*
 * @lc app=leetcode.cn id=2128 lang=javascript
 *
 * [2128] 通过翻转行或列来去除所有的 1
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var removeOnes = function(grid) {
    const m = grid.length, n = grid[0].length;
    for (let r = 1; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== (grid[0][c] ^ grid[r][0] ^ grid[0][0])) {
                return false;
            }
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(removeOnes([[0,1,0],[1,0,1],[0,1,0]])); // true
console.log(removeOnes([[1,1,0],[0,0,0],[0,0,0]])); // false
console.log(removeOnes([[0]])); // true
console.log(removeOnes([[1,0],[0,1]])); // true (flip row1 -> [1,0],[1,0], then col0)
console.log(removeOnes([[1,1],[1,1]])); // true
