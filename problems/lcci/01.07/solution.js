/*
 * @lc app=leetcode.cn id=面试题 01.07 lang=javascript
 *
 * [面试题 01.07] 旋转矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 转置 + 每行翻转 = 顺时针 90°
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (const row of matrix) row.reverse();
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const m1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(m1);
console.log(eq(m1, [[7, 4, 1], [8, 5, 2], [9, 6, 3]]));
const m2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(m2);
console.log(eq(m2, [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]));
const m3 = [[1]];
rotate(m3);
console.log(eq(m3, [[1]]));
const m4 = [[1, 2], [3, 4]];
rotate(m4);
console.log(eq(m4, [[3, 1], [4, 2]]));
