/*
 * @lc app=leetcode id=2257 lang=javascript
 *
 * [2257] Count Unguarded Cells in the Grid
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    const grid = Array.from({ length: m }, () => new Int8Array(n));
    for (const [r, c] of guards) grid[r][c] = 1;
    for (const [r, c] of walls) grid[r][c] = 2;
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
    for (const [gr, gc] of guards) {
        for (const [dr, dc] of dirs) {
            let r = gr + dr, c = gc + dc;
            while (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] <= 0) {
                grid[r][c] = -1;
                r += dr;
                c += dc;
            }
        }
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countUnguarded(4, 6, [[0,0],[1,1],[2,3]], [[0,1],[2,2],[1,4]])); // 7
console.log(countUnguarded(3, 3, [[1,1]], [[0,1],[1,0],[2,1],[1,2]])); // 4
