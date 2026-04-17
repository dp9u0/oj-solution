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
    const m = grid.length, n = grid[0].length;
    let rowFlips = 0, colFlips = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            if (grid[i][j] !== grid[i][n - 1 - j]) rowFlips++;
        }
    }

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < Math.floor(m / 2); i++) {
            if (grid[i][j] !== grid[m - 1 - i][j]) colFlips++;
        }
    }

    return Math.min(rowFlips, colFlips);
};
// @lc code=end

// TEST:
console.log(minFlips([[1,0,0],[0,0,0],[0,0,1]])); // 2
console.log(minFlips([[0,1],[0,1],[0,0]])); // 1
console.log(minFlips([[1],[0]])); // 0
console.log(minFlips([[1,1],[1,1]])); // 0
console.log(minFlips([[0,1],[1,0]])); // 1
console.log(minFlips([[1,0,1],[0,1,0]])); // 0
