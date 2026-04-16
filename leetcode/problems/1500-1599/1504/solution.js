/*
 * @lc app=leetcode id=1504 lang=javascript
 *
 * [1504] Count Submatrices With All Ones
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    const m = mat.length, n = mat[0].length;
    const h = new Array(n).fill(0);
    let result = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            h[j] = mat[i][j] ? h[j] + 1 : 0;
        }
        // Monotonic stack approach for each row
        const stack = [];
        const sum = new Array(n).fill(0);
        for (let j = 0; j < n; j++) {
            while (stack.length > 0 && h[stack[stack.length - 1]] >= h[j]) {
                stack.pop();
            }
            if (stack.length > 0) {
                const prev = stack[stack.length - 1];
                sum[j] = sum[prev] + h[j] * (j - prev);
            } else {
                sum[j] = h[j] * (j + 1);
            }
            stack.push(j);
        }
        result += sum.reduce((a, b) => a + b, 0);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(numSubmat([[1,0,1],[1,1,0],[1,1,0]])); // 13
console.log(numSubmat([[0,1,1,0],[0,1,1,1],[1,1,1,0]])); // 24
console.log(numSubmat([[1,1,1],[1,1,1],[1,1,1]])); // 36
