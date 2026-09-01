/*
 * @lc app=leetcode id=304 lang=javascript
 *
 * [304] Range Sum Query 2D - Immutable
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    // Create prefix sum matrix with extra row and column
    this.prefixSum = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    
    // Calculate prefix sums
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            this.prefixSum[i + 1][j + 1] = matrix[i][j] + 
                this.prefixSum[i + 1][j] + 
                this.prefixSum[i][j + 1] - 
                this.prefixSum[i][j];
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
    return this.prefixSum[row2 + 1][col2 + 1] - 
           this.prefixSum[row2 + 1][col1] - 
           this.prefixSum[row1][col2 + 1] + 
           this.prefixSum[row1][col1];
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
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // 12 
