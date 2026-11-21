/*
 * @lc app=leetcode.cn id=2371 lang=javascript
 *
 * [2371] 最小化网格中的最大值
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var minScore = function(grid) {
    const m = grid.length, n = grid[0].length;
    const cells = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) cells.push([grid[r][c], r, c]);
    }
    cells.sort((a, b) => a[0] - b[0]);
    const rowBest = new Int32Array(m);
    const colBest = new Int32Array(n);
    for (const [, r, c] of cells) {
        const v = Math.max(rowBest[r], colBest[c]) + 1;
        grid[r][c] = v;
        rowBest[r] = v;
        colBest[c] = v;
    }
    return grid;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minScore([[3,1],[2,5]]))); // [[2,1],[1,2]]
console.log(JSON.stringify(minScore([[10]]))); // [[1]]
console.log(JSON.stringify(minScore([[5,3,1],[2,4,6]]))); // [[3,2,1],[1,3,4]]
console.log(JSON.stringify(minScore([[1,2],[3,4]]))); // [[1,2],[2,3]]
console.log(JSON.stringify(minScore([[100,1],[2,99]]))); // [[2,1],[1,2]]
