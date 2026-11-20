/*
 * @lc app=leetcode.cn id=1428 lang=javascript
 *
 * [1428] 至少有一个 1 的最左端列
 */

// @lc code=start
/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    const [rows, cols] = binaryMatrix.dimensions();
    let r = 0, c = cols - 1;
    let ans = -1;
    while (r < rows && c >= 0) {
        if (binaryMatrix.get(r, c) === 1) {
            ans = c; // this row has a 1 at c; try further left
            c--;
        } else {
            r++; // rows below may still have a 1 at column c
        }
    }
    return ans;
};
// @lc code=end

// TEST:
const makeBM = (mat) => ({
    dimensions: () => [mat.length, mat[0].length],
    get: (r, c) => mat[r][c],
});
console.log(leftMostColumnWithOne(makeBM([[0,0],[1,1]]))); // 0
console.log(leftMostColumnWithOne(makeBM([[0,0],[0,1]]))); // 1
console.log(leftMostColumnWithOne(makeBM([[0,0],[0,0]]))); // -1
console.log(leftMostColumnWithOne(makeBM([[0,0,1],[0,1,1],[0,0,1]]))); // 1
