/*
 * @lc app=leetcode id=688 lang=javascript
 *
 * [688] Knight Probability in Chessboard
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const dirs = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    let dp = new Float64Array(n * n);
    dp[row * n + column] = 1;

    for (let step = 0; step < k; step++) {
        const next = new Float64Array(n * n);
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                const prob = dp[r * n + c];
                if (prob === 0) continue;
                for (const [dr, dc] of dirs) {
                    const nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                        next[nr * n + nc] += prob / 8;
                    }
                }
            }
        }
        dp = next;
    }

    let result = 0;
    for (let i = 0; i < n * n; i++) result += dp[i];
    return result;
};
// @lc code=end

// TEST:
console.log(Math.abs(knightProbability(3, 2, 0, 0) - 0.0625) < 1e-5);
console.log(Math.abs(knightProbability(1, 0, 0, 0) - 1.0) < 1e-5);
console.log(Math.abs(knightProbability(1, 1, 0, 0) - 0.0) < 1e-5);
console.log(Math.abs(knightProbability(3, 1, 0, 0) - 0.25) < 1e-5);
console.log(knightProbability(3, 3, 0, 0) >= 0);
