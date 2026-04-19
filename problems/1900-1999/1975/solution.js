/*
 * @lc app=leetcode id=1975 lang=javascript
 *
 * [1975] Maximum Matrix Sum
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let n = matrix.length;
    let sum = 0, minAbs = Infinity, negCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let v = matrix[i][j];
            sum += Math.abs(v);
            minAbs = Math.min(minAbs, Math.abs(v));
            if (v < 0) negCount++;
        }
    }
    if (negCount % 2 === 1) sum -= 2 * minAbs;
    return sum;
};
// @lc code=end

// TEST:
console.log(maxMatrixSum([[1,-1],[-1,1]]));
console.log(maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]]));
console.log(maxMatrixSum([[-1,-2],[-3,-4]]));
