/*
 * @lc app=leetcode id=1582 lang=javascript
 *
 * [1582] Special Positions in a Binary Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const m = mat.length, n = mat[0].length;
    const rowSum = new Array(m).fill(0);
    const colSum = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                rowSum[i]++;
                colSum[j]++;
            }
        }
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1 && rowSum[i] === 1 && colSum[j] === 1) count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(numSpecial([[1,0,0],[0,0,1],[1,0,0]]));
console.log(numSpecial([[1,0,0],[0,1,0],[0,0,1]]));
console.log(numSpecial([[0,0],[0,0]]));
