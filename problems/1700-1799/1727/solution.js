/*
 * @lc app=leetcode id=1727 lang=javascript
 *
 * [1727] Largest Submatrix With Rearrangements
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const heights = new Array(n).fill(0);
    let result = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            heights[j] = matrix[i][j] === 1 ? heights[j] + 1 : 0;
        }
        const sorted = [...heights].sort((a, b) => b - a);
        for (let j = 0; j < n; j++) {
            result = Math.max(result, sorted[j] * (j + 1));
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(largestSubmatrix([[0,0,1],[1,1,1],[1,0,1]]));       // 4
console.log(largestSubmatrix([[1,0,1,0,1]]));                    // 3
console.log(largestSubmatrix([[1,1,0],[1,0,1]]));                // 2
