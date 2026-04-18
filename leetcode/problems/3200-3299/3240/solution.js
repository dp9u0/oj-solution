/*
 * @lc app=leetcode id=3240 lang=javascript
 *
 * [3240] Minimum Number of Flips to Make Binary Grid Palindromic II
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function(grid) {
    const m = grid.length, n = grid[0].length;
    let cost = 0;

    for (let i = 0; i < (m >> 1); i++) {
        for (let j = 0; j < (n >> 1); j++) {
            const ones = grid[i][j] + grid[i][n-1-j] + grid[m-1-i][j] + grid[m-1-i][n-1-j];
            cost += Math.min(ones, 4 - ones);
        }
    }

    let b = 0, d = 0;
    if (m & 1) {
        const r = m >> 1;
        for (let j = 0; j < (n >> 1); j++) {
            const s = grid[r][j] + grid[r][n-1-j];
            if (s === 2) b++;
            else if (s === 1) d++;
        }
    }
    if (n & 1) {
        const c = n >> 1;
        for (let i = 0; i < (m >> 1); i++) {
            const s = grid[i][c] + grid[m-1-i][c];
            if (s === 2) b++;
            else if (s === 1) d++;
        }
    }

    cost += d + ((b & 1) && d === 0 ? 2 : 0);

    if ((m & 1) && (n & 1)) cost += grid[m >> 1][n >> 1];

    return cost;
};
// @lc code=end

// TEST:
console.log(minFlips([[1,0,0],[0,1,0],[0,0,1]])); // 3
console.log(minFlips([[0,1],[0,1],[0,0]])); // 2
console.log(minFlips([[1],[1]])); // 2
console.log(minFlips([[0,0],[0,0]])); // 0
console.log(minFlips([[1,0,1],[0,1,0],[1,0,1]])); // 1
console.log(minFlips([[1,1],[1,1]])); // 0
