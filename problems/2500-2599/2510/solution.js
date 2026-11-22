/*
 * @lc app=leetcode.cn id=2510 lang=javascript
 *
 * [2510] 检查是否有路径经过相同数量的 0 和 1
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var isThereAPath = function(grid) {
    const m = grid.length, n = grid[0].length;
    const OFF = 100;
    const reach = Array.from({ length: m }, () => Array.from({ length: n }, () => new Uint8Array(201)));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const d = grid[i][j] === 1 ? 1 : -1;
            const cur = reach[i][j];
            if (i === 0 && j === 0) {
                cur[OFF + d] = 1;
                continue;
            }
            if (i > 0) {
                const up = reach[i - 1][j];
                for (let k = 0; k < 201; k++) {
                    if (up[k]) cur[k + d] = 1;
                }
            }
            if (j > 0) {
                const left = reach[i][j - 1];
                for (let k = 0; k < 201; k++) {
                    if (left[k]) cur[k + d] = 1;
                }
            }
        }
    }
    return reach[m - 1][n - 1][OFF] === 1;
};
// @lc code=end

// TEST:
console.log(isThereAPath([[0,1,0,0],[0,1,0,0],[1,0,1,0]])); // true
console.log(isThereAPath([[1,1,0],[0,0,1],[1,0,0]])); // false
console.log(isThereAPath([[0,0],[0,0]])); // false (all zeros, balance -4)
console.log(isThereAPath([[0,1],[1,0]])); // false (every path has balance -1)
