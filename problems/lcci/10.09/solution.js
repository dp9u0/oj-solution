/*
 * @lc app=leetcode.cn id=面试题 10.09 lang=javascript
 *
 * [面试题 10.09] 排序矩阵查找
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 右上角阶梯搜索：大于 target 左移，小于 target 下移
    if (!matrix.length || !matrix[0].length) return false;
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        const val = matrix[row][col];
        if (val === target) return true;
        if (val > target) {
            col--;
        } else {
            row++;
        }
    }
    return false;
};
// @lc code=end

// TEST:
const m = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
console.log(searchMatrix(m, 5) === true);
console.log(searchMatrix(m, 20) === false);
console.log(searchMatrix([], 1) === false);
console.log(searchMatrix([[]], 1) === false);
console.log(searchMatrix([[1]], 1) === true);
console.log(searchMatrix([[1]], 2) === false);
console.log(searchMatrix(m, 1) === true); // 左上角
console.log(searchMatrix(m, 30) === true); // 右下角
console.log(searchMatrix([[1, 2], [3, 4]], 4) === true);
