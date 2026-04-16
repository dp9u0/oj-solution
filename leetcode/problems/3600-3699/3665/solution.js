/*
 * @lc app=leetcode id=3665 lang=javascript
 *
 * [3665] Twisted Mirror Path Count
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePaths = function(grid) {
    const MOD = 1e9 + 7;
    const m = grid.length, n = grid[0].length;

    // Memoize resolve: follow mirror chain from (i,j) entering with direction d
    // d=0: entered moving right → if mirror, turn down
    // d=1: entered moving down → if mirror, turn right
    const memo = new Map();

    const resolve = (i, j, d) => {
        if (i < 0 || i >= m || j < 0 || j >= n) return null;
        const key = (i * n + j) * 2 + d;
        if (memo.has(key)) return memo.get(key);

        if (grid[i][j] === 0) {
            const r = [i, j];
            memo.set(key, r);
            return r;
        }

        // Mirror: reflect
        const r = d === 0 ? resolve(i + 1, j, 1) : resolve(i, j + 1, 0);
        memo.set(key, r);
        return r;
    };

    // DP in diagonal order (i+j increasing)
    const dp = Array.from({length: m}, () => new Array(n).fill(0));
    dp[0][0] = 1;

    for (let s = 0; s < m + n - 1; s++) {
        for (let i = Math.max(0, s - n + 1); i <= Math.min(s, m - 1); i++) {
            const j = s - i;
            if (grid[i][j] === 1 || dp[i][j] === 0) continue;
            if (i === m - 1 && j === n - 1) continue;

            const val = dp[i][j];

            // Move right: try to enter (i, j+1) moving right (d=0)
            const r = resolve(i, j + 1, 0);
            if (r) dp[r[0]][r[1]] = (dp[r[0]][r[1]] + val) % MOD;

            // Move down: try to enter (i+1, j) moving down (d=1)
            const d = resolve(i + 1, j, 1);
            if (d) dp[d[0]][d[1]] = (dp[d[0]][d[1]] + val) % MOD;
        }
    }

    return dp[m - 1][n - 1];
};
// @lc code=end

// TEST:
console.log(uniquePaths([[0,1,0],[0,0,1],[1,0,0]])); // 5
console.log(uniquePaths([[0,0],[0,0]])); // 2
console.log(uniquePaths([[0,1,1],[1,1,0]])); // 1
console.log(uniquePaths([[0,0,0],[0,0,0],[0,0,0]])); // 6
console.log(uniquePaths([[0,1],[0,0]])); // 2
