/*
 * @lc app=leetcode id=498 lang=javascript
 *
 * [498] Diagonal Traverse
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const m = mat.length, n = mat[0].length;
    const result = [];
    let r = 0, c = 0, up = true;
    for (let i = 0; i < m * n; i++) {
        result.push(mat[r][c]);
        if (up) {
            if (c === n - 1) { r++; up = false; }
            else if (r === 0) { c++; up = false; }
            else { r--; c++; }
        } else {
            if (r === m - 1) { c++; up = true; }
            else if (c === 0) { r++; up = true; }
            else { r++; c--; }
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))); // [1,2,4,7,5,3,6,8,9]
console.log(JSON.stringify(findDiagonalOrder([[1,2],[3,4]]))); // [1,2,3,4]
console.log(JSON.stringify(findDiagonalOrder([[1]]))); // [1]
console.log(JSON.stringify(findDiagonalOrder([[1,2,3,4]]))); // [1,2,3,4]
