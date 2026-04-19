/*
 * @lc app=leetcode id=2304 lang=javascript
 *
 * [2304] Minimum Path Cost in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function(grid, moveCost) {
    const m = grid.length, n = grid[0].length;
    let dp = grid[0].slice();
    for (let i = 1; i < m; i++) {
        const next = new Array(n).fill(Infinity);
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                const val = grid[i - 1][k];
                next[j] = Math.min(next[j], dp[k] + moveCost[val][j]);
            }
            next[j] += grid[i][j];
        }
        dp = next;
    }
    return Math.min(...dp);
};
// @lc code=end

// TEST:
console.log(minPathCost([[5,3],[4,0],[2,1]], [[9,8],[1,5],[10,12],[18,6],[2,4],[14,3]])); // 17
console.log(minPathCost([[5,1,2],[4,0,3]], [[12,10,15],[20,23,8],[21,7,1],[8,1,13],[9,10,25],[5,3,2]])); // 6
