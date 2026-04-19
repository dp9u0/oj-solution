/*
 * @lc app=leetcode id=1605 lang=javascript
 *
 * [1605] Find Valid Matrix Given Row and Column Sums
 */

// @lc code=start
/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    const m = rowSum.length;
    const n = colSum.length;
    const matrix = Array.from({ length: m }, () => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const val = Math.min(rowSum[i], colSum[j]);
            matrix[i][j] = val;
            rowSum[i] -= val;
            colSum[j] -= val;
        }
    }

    return matrix;
};
// @lc code=end

// TEST:
console.log(restoreMatrix([3,8], [4,7])); // [[3,0],[1,7]]
console.log(restoreMatrix([5,7,10], [8,6,8])); // [[5,0,0],[3,3,1],[0,3,7]] or similar
