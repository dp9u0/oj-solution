/*
 * @lc app=leetcode.cn id=562 lang=javascript
 *
 * [562] 矩阵中最长的连续1线段
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var longestLine = function(mat) {
    const m = mat.length, n = mat[0].length;
    // per-cell runs in 4 directions: 0 left, 1 up, 2 up-left, 3 up-right
    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => [0, 0, 0, 0]));
    let best = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] !== 1) continue;
            dp[i][j][0] = (j > 0 ? dp[i][j - 1][0] : 0) + 1;
            dp[i][j][1] = (i > 0 ? dp[i - 1][j][1] : 0) + 1;
            dp[i][j][2] = (i > 0 && j > 0 ? dp[i - 1][j - 1][2] : 0) + 1;
            dp[i][j][3] = (i > 0 && j < n - 1 ? dp[i - 1][j + 1][3] : 0) + 1;
            for (const v of dp[i][j]) {
                if (v > best) best = v;
            }
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(longestLine([[0,1,1,0],[0,1,1,0],[0,0,0,1]])); // 3
console.log(longestLine([[1,1,1,1],[0,1,1,0],[0,0,0,1]])); // 4
console.log(longestLine([[0]])); // 0
console.log(longestLine([[1]])); // 1
console.log(longestLine([[1,0],[0,1]])); // 2 (anti-diagonal)
console.log(longestLine([[0,1],[1,0]])); // 2 (diagonal)
