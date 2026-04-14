/*
 * @lc app=leetcode id=1219 lang=javascript
 *
 * [1219] Path with Maximum Gold
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    const m = grid.length, n = grid[0].length;
    let ans = 0;

    const dfs = (i, j, gold) => {
        gold += grid[i][j];
        ans = Math.max(ans, gold);
        const tmp = grid[i][j];
        grid[i][j] = 0;
        for (const [di, dj] of [[0,1],[0,-1],[1,0],[-1,0]]) {
            const ni = i + di, nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] > 0) {
                dfs(ni, nj, gold);
            }
        }
        grid[i][j] = tmp;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) dfs(i, j, 0);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(getMaximumGold([[0,6,0],[5,8,7],[0,9,0]])); // 24
console.log(getMaximumGold([[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]])); // 28
