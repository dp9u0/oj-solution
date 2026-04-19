/*
 * @lc app=leetcode id=1289 lang=javascript
 *
 * [1289] Minimum Falling Path Sum II
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
    const n = grid.length;
    if (n === 1) return grid[0][0];

    let prevMin = Infinity, prevSec = Infinity, prevMinIdx = -1;

    // Initialize from first row
    for (let j = 0; j < n; j++) {
        if (grid[0][j] < prevMin) {
            prevSec = prevMin;
            prevMin = grid[0][j];
            prevMinIdx = j;
        } else if (grid[0][j] < prevSec) {
            prevSec = grid[0][j];
        }
    }

    for (let i = 1; i < n; i++) {
        let curMin = Infinity, curSec = Infinity, curMinIdx = -1;
        for (let j = 0; j < n; j++) {
            const val = grid[i][j] + (j === prevMinIdx ? prevSec : prevMin);
            if (val < curMin) {
                curSec = curMin;
                curMin = val;
                curMinIdx = j;
            } else if (val < curSec) {
                curSec = val;
            }
        }
        prevMin = curMin;
        prevSec = curSec;
        prevMinIdx = curMinIdx;
    }

    return prevMin;
};
// @lc code=end

// TEST:
console.log(minFallingPathSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// Expected: 13

console.log(minFallingPathSum([[7]]));
// Expected: 7

console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]));
// Expected: 13 (1+5+7)
