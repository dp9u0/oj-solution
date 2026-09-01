/*
 * @lc app=leetcode id=861 lang=javascript
 *
 * [861] Score After Flipping Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    const m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < n; j++) grid[i][j] ^= 1;
        }
    }
    for (let j = 1; j < n; j++) {
        let ones = 0;
        for (let i = 0; i < m; i++) if (grid[i][j] === 1) ones++;
        if (ones < m - ones) {
            for (let i = 0; i < m; i++) grid[i][j] ^= 1;
        }
    }
    let score = 0;
    for (let i = 0; i < m; i++) {
        let row = 0;
        for (let j = 0; j < n; j++) row = (row << 1) | grid[i][j];
        score += row;
    }
    return score;
};
// @lc code=end

// TEST:
console.log(matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]])); // 39
console.log(matrixScore([[0]])); // 1
