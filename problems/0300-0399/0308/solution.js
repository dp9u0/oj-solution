/*
 * @lc app=leetcode.cn id=308 lang=javascript
 *
 * [308] 二维区域和检索 - 矩阵可修改
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.m = matrix.length;
    this.n = this.m ? matrix[0].length : 0;
    this.grid = matrix.map(r => r.slice()); // current values (update sets, not adds)
    // 2D Fenwick tree, 1-indexed
    this.tree = Array.from({ length: this.m + 1 }, () => new Array(this.n + 1).fill(0));
    for (let r = 0; r < this.m; r++) {
        for (let c = 0; c < this.n; c++) {
            this.addTree(r + 1, c + 1, matrix[r][c]);
        }
    }
};

NumMatrix.prototype.addTree = function(r, c, delta) {
    for (let i = r; i <= this.m; i += i & (-i)) {
        for (let j = c; j <= this.n; j += j & (-j)) {
            this.tree[i][j] += delta;
        }
    }
};

NumMatrix.prototype.prefixSum = function(r, c) {
    let s = 0;
    for (let i = r; i > 0; i -= i & (-i)) {
        for (let j = c; j > 0; j -= j & (-j)) {
            s += this.tree[i][j];
        }
    }
    return s;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
    const delta = val - this.grid[row][col];
    this.grid[row][col] = val;
    this.addTree(row + 1, col + 1, delta);
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.prefixSum(row2 + 1, col2 + 1)
        - this.prefixSum(row1, col2 + 1)
        - this.prefixSum(row2 + 1, col1)
        + this.prefixSum(row1, col1);
};
// @lc code=end

// TEST:
const m = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 0, 1, 7, 2], [0, 2, 5, 0, 3], [1, 0, 3, 0, 2]]);
console.log(m.sumRegion(2, 1, 4, 3)); // 8
m.update(3, 2, 2);
console.log(m.sumRegion(2, 1, 4, 3)); // 10
const m2 = new NumMatrix([[1]]);
console.log(m2.sumRegion(0, 0, 0, 0)); // 1
m2.update(0, 0, -5);
console.log(m2.sumRegion(0, 0, 0, 0)); // -5
const m3 = new NumMatrix([[1, 2], [3, 4]]);
console.log(m3.sumRegion(0, 0, 1, 1)); // 10
m3.update(1, 1, 0);
console.log(m3.sumRegion(0, 0, 1, 1)); // 6
console.log(m3.sumRegion(1, 0, 1, 1)); // 3

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
