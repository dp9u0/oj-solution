/*
 * @lc app=leetcode id=1380 lang=javascript
 *
 * [1380] Lucky Numbers in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const colMax = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            colMax[j] = Math.max(colMax[j], matrix[i][j]);
        }
    }
    const result = [];
    for (let i = 0; i < m; i++) {
        const minVal = Math.min(...matrix[i]);
        const minIdx = matrix[i].indexOf(minVal);
        if (minVal === colMax[minIdx]) {
            result.push(minVal);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]))); // [15]
console.log(JSON.stringify(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]))); // [12]
console.log(JSON.stringify(luckyNumbers([[7,8],[1,2]]))); // [7]
