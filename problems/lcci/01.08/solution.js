/*
 * @lc app=leetcode.cn id=面试题 01.08 lang=javascript
 *
 * [面试题 01.08] 零矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    if (m === 0) return;
    const n = matrix[0].length;
    // 首行/首列自身是否需要清零，先记录避免被标记污染
    let firstRow = false;
    let firstCol = false;
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) firstRow = true;
    }
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) firstCol = true;
    }
    // 用首行/首列标记内部 0 所在的行列
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    // 按标记清零内部
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    // 最后处理首行/首列
    if (firstRow) matrix[0].fill(0);
    if (firstCol) {
        for (let i = 0; i < m; i++) matrix[i][0] = 0;
    }
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const m1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(m1);
console.log(eq(m1, [[1, 0, 1], [0, 0, 0], [1, 0, 1]]));
const m2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
setZeroes(m2);
console.log(eq(m2, [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]));
const m3 = [[1]];
setZeroes(m3);
console.log(eq(m3, [[1]]));
const m4 = [[0]];
setZeroes(m4);
console.log(eq(m4, [[0]]));
const m5 = [[1, 0], [1, 1]];
setZeroes(m5);
console.log(eq(m5, [[0, 0], [1, 0]]));
const m6 = [[1, 2, 3], [4, 0, 6]]; // 0 在中间行，首行列均受影响
setZeroes(m6);
console.log(eq(m6, [[1, 0, 3], [0, 0, 0]]));
