/*
 * @lc app=leetcode id=741 lang=javascript
 *
 * [741] Cherry Pickup
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const n = grid.length;
    const NEG_INF = -Infinity;
    // dp[r1][r2] = max cherries at current step k, path1 at row r1, path2 at row r2
    let dp = Array.from({ length: n }, () => new Array(n).fill(NEG_INF));
    dp[0][0] = grid[0][0];

    for (let k = 1; k <= 2 * (n - 1); k++) {
        const next = Array.from({ length: n }, () => new Array(n).fill(NEG_INF));
        for (let r1 = 0; r1 < n; r1++) {
            const c1 = k - r1;
            if (c1 < 0 || c1 >= n || grid[r1][c1] === -1) continue;
            for (let r2 = 0; r2 < n; r2++) {
                const c2 = k - r2;
                if (c2 < 0 || c2 >= n || grid[r2][c2] === -1) continue;
                // 4 transitions: both from up/left combinations
                let best = NEG_INF;
                for (let pr1 = r1 - 1; pr1 <= r1; pr1++) {
                    for (let pr2 = r2 - 1; pr2 <= r2; pr2++) {
                        if (pr1 >= 0 && pr2 >= 0) {
                            best = Math.max(best, dp[pr1][pr2]);
                        }
                    }
                }
                if (best === NEG_INF) continue;
                let cherries = grid[r1][c1];
                if (r1 !== r2) cherries += grid[r2][c2];
                next[r1][r2] = best + cherries;
            }
        }
        dp = next;
    }

    return Math.max(0, dp[n - 1][n - 1]);
};
// @lc code=end

// TEST:
console.log(cherryPickup([[0,1,-1],[1,0,-1],[1,1,1]])); // 5
console.log(cherryPickup([[1,1,-1],[1,-1,1],[-1,1,1]])); // 0
console.log(cherryPickup([[1]])); // 1
