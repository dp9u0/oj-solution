/*
 * @lc app=leetcode id=1337 lang=javascript
 *
 * [1337] The K Weakest Rows in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    return mat.map((row, i) => [row.reduce((s, v) => s + v, 0), i])
        .sort((a, b) => a[0] - b[0] || a[1] - b[1])
        .slice(0, k)
        .map(p => p[1]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(kWeakestRows([[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], 3)));
console.log(JSON.stringify(kWeakestRows([[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]], 2)));
