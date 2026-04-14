/*
 * @lc app=leetcode id=2536 lang=javascript
 *
 * [2536] Increment Submatrices by One
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
    const diff = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

    for (const [r1, c1, r2, c2] of queries) {
        diff[r1][c1]++;
        diff[r1][c2 + 1]--;
        diff[r2 + 1][c1]--;
        diff[r2 + 1][c2 + 1]++;
    }

    const mat = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) diff[i][j] += diff[i - 1][j];
            if (j > 0) diff[i][j] += diff[i][j - 1];
            if (i > 0 && j > 0) diff[i][j] -= diff[i - 1][j - 1];
            mat[i][j] = diff[i][j];
        }
    }
    return mat;
};
// @lc code=end

// TEST:
console.log(rangeAddQueries(3, [[1,1,2,2],[0,0,1,1]])); // [[1,1,0],[1,2,1],[0,1,1]]
console.log(rangeAddQueries(2, [[0,0,1,1]])); // [[1,1],[1,1]]
