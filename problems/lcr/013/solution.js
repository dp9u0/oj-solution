/*
 * @lc app=leetcode.cn id=LCR 013 lang=javascript
 *
 * [LCR 013] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    // pre[i][j] = sum of rectangle (0,0) .. (i-1, j-1)
    this.pre = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            this.pre[i + 1][j + 1] =
                this.pre[i][j + 1] + this.pre[i + 1][j] - this.pre[i][j] + matrix[i][j];
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    const pre = this.pre;
    return pre[row2 + 1][col2 + 1] - pre[row1][col2 + 1] - pre[row2 + 1][col1] + pre[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

// TEST:
const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
];
const numMatrix = new NumMatrix(matrix);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // expect 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // expect 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // expect 12

// Single element
const single = new NumMatrix([[5]]);
console.log(single.sumRegion(0, 0, 0, 0)); // expect 5

// 1 x N row
const rowMat = new NumMatrix([[-1, -2, 3]]);
console.log(rowMat.sumRegion(0, 0, 0, 2)); // expect 0
console.log(rowMat.sumRegion(0, 1, 0, 2)); // expect 1

// N x 1 column with negatives
const colMat = new NumMatrix([[1], [-3], [2]]);
console.log(colMat.sumRegion(0, 0, 2, 0)); // expect 0
console.log(colMat.sumRegion(1, 0, 2, 0)); // expect -1
