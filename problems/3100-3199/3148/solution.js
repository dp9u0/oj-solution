/*
 * @lc app=leetcode id=3148 lang=javascript
 *
 * [3148] Maximum Difference Score in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function(grid) {
    const m = grid.length, n = grid[0].length;
    const INF = Infinity;
    let result = -INF;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const minPrev = Math.min(
                i > 0 ? grid[i - 1][j] : INF,
                j > 0 ? grid[i][j - 1] : INF
            );
            if (minPrev !== INF) {
                result = Math.max(result, grid[i][j] - minPrev);
            }
            grid[i][j] = Math.min(grid[i][j], minPrev);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maxScore([[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]])); // 9
console.log(maxScore([[4,3,2],[3,2,1]])); // -1
