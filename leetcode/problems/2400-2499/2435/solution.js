/*
 * @lc app=leetcode id=2435 lang=javascript
 *
 * [2435] Paths in Matrix Whose Sum Is Divisible by K
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(grid, k) {
    const MOD = 1e9 + 7;
    const m = grid.length, n = grid[0].length;

    let prev = new Array(n);
    for (let j = 0; j < n; j++) prev[j] = new Array(k).fill(0);

    // Initialize first row
    prev[0][grid[0][0] % k] = 1;
    for (let j = 1; j < n; j++) {
        for (let r = 0; r < k; r++) {
            if (prev[j - 1][r] === 0) continue;
            prev[j][(r + grid[0][j]) % k] = (prev[j][(r + grid[0][j]) % k] + prev[j - 1][r]) % MOD;
        }
    }

    for (let i = 1; i < m; i++) {
        const cur = new Array(n);
        // First column: only from top
        cur[0] = new Array(k).fill(0);
        for (let r = 0; r < k; r++) {
            if (prev[0][r] === 0) continue;
            cur[0][(r + grid[i][0]) % k] = (cur[0][(r + grid[i][0]) % k] + prev[0][r]) % MOD;
        }

        for (let j = 1; j < n; j++) {
            cur[j] = new Array(k).fill(0);
            const v = grid[i][j];
            // From top
            for (let r = 0; r < k; r++) {
                if (prev[j][r]) cur[j][(r + v) % k] = (cur[j][(r + v) % k] + prev[j][r]) % MOD;
            }
            // From left
            for (let r = 0; r < k; r++) {
                if (cur[j - 1][r]) cur[j][(r + v) % k] = (cur[j][(r + v) % k] + cur[j - 1][r]) % MOD;
            }
        }
        prev = cur;
    }

    return prev[n - 1][0];
};
// @lc code=end

// TEST:
console.log(numberOfPaths([[5,2,4],[3,0,5],[0,7,2]], 3)); // 2
console.log(numberOfPaths([[0,0]], 5)); // 1
console.log(numberOfPaths([[7,3,4,9],[2,3,6,2],[2,3,7,0]], 1)); // 10
console.log(numberOfPaths([[1,2],[3,4]], 5)); // 0
console.log(numberOfPaths([[5]], 5)); // 1
