/*
 * @lc app=leetcode.cn id=694 lang=javascript
 *
 * [694] 不同岛屿的数量
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    const m = grid.length, n = grid[0].length;
    const seen = new Set();
    const shapes = new Set();
    const dfs = (i, j, si, sj, sig) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 1 || seen.has(i * n + j)) return;
        seen.add(i * n + j);
        sig.push((i - si) + ',' + (j - sj)); // offset relative to the discovery cell
        dfs(i + 1, j, si, sj, sig);
        dfs(i - 1, j, si, sj, sig);
        dfs(i, j + 1, si, sj, sig);
        dfs(i, j - 1, si, sj, sig);
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && !seen.has(i * n + j)) {
                const sig = [];
                dfs(i, j, i, j, sig);
                shapes.add(sig.join(';'));
            }
        }
    }
    return shapes.size;
};
// @lc code=end

// TEST:
console.log(numDistinctIslands([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]])); // 1
console.log(numDistinctIslands([[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]])); // 3
console.log(numDistinctIslands([[1]])); // 1
console.log(numDistinctIslands([[0,0],[0,0]])); // 0
console.log(numDistinctIslands([[1,0],[0,1]])); // 1 (two single cells: same shape)
console.log(numDistinctIslands([[1,1,1],[0,1,0]])); // 1 (one T island)
