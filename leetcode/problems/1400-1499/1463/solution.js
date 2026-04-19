/*
 * @lc app=leetcode id=1463 lang=javascript
 *
 * [1463] Cherry Pickup II
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const rows = grid.length, cols = grid[0].length;

    let dp = Array.from({length: cols}, () => new Array(cols).fill(-1));
    dp[0][cols - 1] = grid[0][0] + grid[0][cols - 1];

    for (let r = 1; r < rows; r++) {
        const ndp = Array.from({length: cols}, () => new Array(cols).fill(-1));
        for (let c1 = 0; c1 < cols; c1++) {
            for (let c2 = 0; c2 < cols; c2++) {
                if (dp[c1][c2] < 0) continue;
                for (let nc1 = c1 - 1; nc1 <= c1 + 1; nc1++) {
                    if (nc1 < 0 || nc1 >= cols) continue;
                    for (let nc2 = c2 - 1; nc2 <= c2 + 1; nc2++) {
                        if (nc2 < 0 || nc2 >= cols) continue;
                        const val = dp[c1][c2] + (nc1 === nc2 ? grid[r][nc1] : grid[r][nc1] + grid[r][nc2]);
                        if (val > ndp[nc1][nc2]) ndp[nc1][nc2] = val;
                    }
                }
            }
        }
        dp = ndp;
    }

    let ans = 0;
    for (let c1 = 0; c1 < cols; c1++)
        for (let c2 = 0; c2 < cols; c2++)
            if (dp[c1][c2] > ans) ans = dp[c1][c2];
    return ans;
};
// @lc code=end

// TEST:
console.log(cherryPickup([[3,1,1],[2,5,1],[1,5,5],[2,1,1]])); // 24
console.log(cherryPickup([[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]])); // 28
console.log(cherryPickup([[1,1],[1,1]])); // 4
