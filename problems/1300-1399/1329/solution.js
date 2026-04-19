/*
 * @lc app=leetcode id=1329 lang=javascript
 *
 * [1329] Sort the Matrix Diagonally
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const m = mat.length, n = mat[0].length;
    const diagMap = new Map();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const key = i - j;
            if (!diagMap.has(key)) diagMap.set(key, []);
            diagMap.get(key).push(mat[i][j]);
        }
    }
    for (const [, vals] of diagMap) {
        vals.sort((a, b) => a - b);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const key = i - j;
            mat[i][j] = diagMap.get(key).shift();
        }
    }
    return mat;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]]))); // [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
