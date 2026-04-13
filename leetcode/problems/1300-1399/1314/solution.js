/*
 * @lc app=leetcode id=1314 lang=javascript
 *
 * [1314] Matrix Block Sum
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    const m = mat.length;
    const n = mat[0].length;

    const prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            prefix[i + 1][j + 1] = mat[i][j] + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j];
        }
    }

    const answer = Array.from({ length: m }, () => new Array(n));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const r1 = Math.max(0, i - k), c1 = Math.max(0, j - k);
            const r2 = Math.min(m - 1, i + k), c2 = Math.min(n - 1, j + k);
            answer[i][j] = prefix[r2 + 1][c2 + 1] - prefix[r1][c2 + 1] - prefix[r2 + 1][c1] + prefix[r1][c1];
        }
    }

    return answer;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1))); // [[12,21,16],[27,45,33],[24,39,28]]
console.log(JSON.stringify(matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2))); // [[45,45,45],[45,45,45],[45,45,45]]
console.log(JSON.stringify(matrixBlockSum([[1]], 1))); // [[1]]
