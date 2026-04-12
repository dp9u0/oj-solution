/*
 * @lc app=leetcode id=980 lang=javascript
 *
 * [980] Unique Paths III
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let startR = 0, startC = 0;
    let empty = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                startR = i;
                startC = j;
            }
            if (grid[i][j] !== -1) empty++;
        }
    }

    let result = 0;

    function dfs(r, c, steps) {
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === -1) return;

        if (grid[r][c] === 2) {
            if (steps === empty) result++;
            return;
        }

        grid[r][c] = -1;
        dfs(r + 1, c, steps + 1);
        dfs(r - 1, c, steps + 1);
        dfs(r, c + 1, steps + 1);
        dfs(r, c - 1, steps + 1);
        grid[r][c] = 0;
    }

    dfs(startR, startC, 1);
    return result;
};
// @lc code=end

// TEST:
console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]])); // 2
console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]])); // 4
console.log(uniquePathsIII([[0,1],[2,0]])); // 0
