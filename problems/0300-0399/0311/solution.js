/*
 * @lc app=leetcode.cn id=311 lang=javascript
 *
 * [311] 稀疏矩阵的乘法
 */

// @lc code=start
/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function(mat1, mat2) {
    const m = mat1.length, k = mat1[0].length, n = mat2[0].length;
    const res = Array.from({ length: m }, () => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let p = 0; p < k; p++) {
            if (mat1[i][p] === 0) continue; // skip: whole mat2 row contributes nothing
            for (let j = 0; j < n; j++) {
                res[i][j] += mat1[i][p] * mat2[p][j];
            }
        }
    }
    return res;
};
// @lc code=end

// TEST:
console.log(multiply([[1, 0, 0], [-1, 0, 3]], [[7, 0, 0], [0, 0, 0], [0, 0, 1]])); // [[7,0,0],[-7,0,3]]
console.log(multiply([[0]], [[0]])); // [[0]]
console.log(multiply([[1, 2], [3, 4]], [[5, 6], [7, 8]])); // [[19,22],[43,50]]
console.log(multiply([[1, -2]], [[1], [3]])); // [[-5]]
