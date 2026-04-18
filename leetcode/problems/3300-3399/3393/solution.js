/*
 * @lc app=leetcode id=3393 lang=javascript
 *
 * [3393] Count Paths With the Given XOR Value
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countPathsWithXorValue = function(grid, k) {
    const MOD = 1e9 + 7;
    const m = grid.length, n = grid[0].length;
    const dp = Array.from({ length: n }, () => new Int32Array(16));
    dp[0][grid[0][0]] = 1;

    for (let j = 1; j < n; j++)
        for (let x = 0; x < 16; x++)
            if (dp[j - 1][x]) dp[j][x ^ grid[0][j]] = dp[j - 1][x];

    for (let i = 1; i < m; i++) {
        const ndp = Array.from({ length: n }, () => new Int32Array(16));
        for (let j = 0; j < n; j++) {
            const val = grid[i][j];
            for (let x = 0; x < 16; x++) {
                if (dp[j][x]) ndp[j][x ^ val] = (ndp[j][x ^ val] + dp[j][x]) % MOD;
                if (j > 0 && ndp[j - 1][x]) ndp[j][x ^ val] = (ndp[j][x ^ val] + ndp[j - 1][x]) % MOD;
            }
        }
        for (let j = 0; j < n; j++) dp[j] = ndp[j];
    }
    return dp[n - 1][k];
};
// @lc code=end

// TEST:
console.log(countPathsWithXorValue([[2,1,5],[7,10,0],[12,6,4]], 11)); // 3
console.log(countPathsWithXorValue([[1,3,3,3],[0,3,3,2],[3,0,1,1]], 2)); // 5
console.log(countPathsWithXorValue([[1,1,1,2],[3,0,3,2],[3,0,2,2]], 10)); // 0
console.log(countPathsWithXorValue([[5]], 5)); // 1
console.log(countPathsWithXorValue([[5]], 3)); // 0
