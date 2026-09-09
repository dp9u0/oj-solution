/*
 * @lc app=leetcode.cn id=4046 lang=javascript
 *
 * [4046] 至多 K 次转向的最小路径代价
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var minCost = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    if (m === 1 && n === 1) return grid[0][0];
    const INF = Infinity;
    // directions: 0 up, 1 down, 2 left, 3 right
    const di = [-1, 1, 0, 0], dj = [0, 0, -1, 1];
    // layer 0: straight runs from (0, 0)
    let prev = [0, 1, 2, 3].map(() => Array.from({ length: m }, () => new Array(n).fill(INF)));
    let s = 0;
    for (let i = 0; i < m; i++) { s += grid[i][0]; prev[1][i][0] = s; }
    s = 0;
    for (let j = 0; j < n; j++) { s += grid[0][j]; prev[3][0][j] = s; }
    for (let t = 1; t <= k; t++) {
        const cur = [0, 1, 2, 3].map(() => Array.from({ length: m }, () => new Array(n).fill(INF)));
        for (let d = 0; d < 4; d++) {
            for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) cur[d][i][j] = prev[d][i][j];
        }
        for (let d = 0; d < 4; d++) {
            const relax = (i, j) => {
                const pi = i - di[d], pj = j - dj[d];
                if (pi < 0 || pi >= m || pj < 0 || pj >= n) return;
                let best = cur[d][pi][pj];                    // straight, same layer
                for (let dp = 0; dp < 4; dp++) {              // turn, previous layer
                    if (dp !== d && prev[dp][pi][pj] < best) best = prev[dp][pi][pj];
                }
                if (best < INF && best + grid[i][j] < cur[d][i][j]) cur[d][i][j] = best + grid[i][j];
            };
            if (d === 0) { for (let i = m - 1; i >= 0; i--) for (let j = 0; j < n; j++) relax(i, j); }
            else if (d === 1) { for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) relax(i, j); }
            else if (d === 2) { for (let i = 0; i < m; i++) for (let j = n - 1; j >= 0; j--) relax(i, j); }
            else { for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) relax(i, j); }
        }
        prev = cur;
    }
    let ans = INF;
    for (let d = 0; d < 4; d++) ans = Math.min(ans, prev[d][m - 1][n - 1]);
    return ans === INF ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minCost([[2, 7, 3], [1, 4, 5]], 1) === 12);
console.log(minCost([[4, 1, 9], [3, 2, 5], [4, 8, 6]], 2) === 20);
console.log(minCost([[1, 9], [3, 4]], 0) === -1);
console.log(minCost([[5]], 0) === 5);
console.log(minCost([[1, 2, 3]], 0) === 6);                    // single row, straight right
console.log(minCost([[1], [2], [3]], 0) === 6);                // single column, straight down
console.log(minCost([[9, 1], [1, 1]], 1) === 11);             // right then down, 1 turn
console.log(minCost([[9, 1], [1, 1]], 0) === -1);              // 0 turns cannot reach
