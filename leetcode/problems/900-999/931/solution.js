/*
 * @lc app=leetcode id=931 lang=javascript
 *
 * [931] Minimum Falling Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const n = matrix.length;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const best = matrix[i - 1][j];
            const left = j > 0 ? matrix[i - 1][j - 1] : Infinity;
            const right = j < n - 1 ? matrix[i - 1][j + 1] : Infinity;
            matrix[i][j] += Math.min(best, left, right);
        }
    }

    return Math.min(...matrix[n - 1]);
};
// @lc code=end

// TEST:
console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]])); // 13
console.log(minFallingPathSum([[-19,57],[-40,-5]])); // -59
console.log(minFallingPathSum([[100]])); // 100
