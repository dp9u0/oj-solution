/*
 * @lc app=leetcode id=2713 lang=javascript
 *
 * [2713] Maximum Strictly Increasing Cells in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var maxIncreasingCells = function(mat) {
    const m = mat.length, n = mat[0].length;
    const cells = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            cells.push([mat[i][j], i, j]);
        }
    }
    cells.sort((a, b) => a[0] - b[0]);

    const rowBest = new Int32Array(m);
    const colBest = new Int32Array(n);
    let ans = 0;
    let i = 0;

    while (i < cells.length) {
        const val = cells[i][0];
        const group = [];
        while (i < cells.length && cells[i][0] === val) {
            group.push(cells[i]);
            i++;
        }
        // Compute dp for all cells in this group
        const dp = group.map(([, r, c]) => 1 + Math.max(rowBest[r], colBest[c]));
        // Update rowBest and colBest
        for (let k = 0; k < group.length; k++) {
            const r = group[k][1], c = group[k][2];
            rowBest[r] = Math.max(rowBest[r], dp[k]);
            colBest[c] = Math.max(colBest[c], dp[k]);
            ans = Math.max(ans, dp[k]);
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maxIncreasingCells([[3,1],[3,4]])); // 2
console.log(maxIncreasingCells([[1,1],[1,1]])); // 1
console.log(maxIncreasingCells([[3,1,6],[-9,5,7]])); // 4
console.log(maxIncreasingCells([[5]])); // 1
console.log(maxIncreasingCells([[1,2,3],[6,5,4]])); // 6
