/*
 * @lc app=leetcode id=3546 lang=javascript
 *
 * [3546] Equal Sum Grid Partition I
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    let m = grid.length, n = grid[0].length;
    let total = 0;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            total += grid[i][j];
    if (total % 2 !== 0) return false;
    let half = total / 2;
    let rowSum = new Array(m).fill(0);
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            rowSum[i] += grid[i][j];
    let s = 0;
    for (let i = 0; i < m - 1; i++) {
        s += rowSum[i];
        if (s === half) return true;
    }
    let colSum = new Array(n).fill(0);
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            colSum[j] += grid[i][j];
    s = 0;
    for (let j = 0; j < n - 1; j++) {
        s += colSum[j];
        if (s === half) return true;
    }
    return false;
};
// @lc code=end

// TEST:
console.log(canPartitionGrid([[1,4],[2,3]]));
console.log(canPartitionGrid([[1,3],[2,4]]));
console.log(canPartitionGrid([[1,2,3],[4,5,6]]));
