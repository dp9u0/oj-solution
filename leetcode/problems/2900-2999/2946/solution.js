/*
 * @lc app=leetcode id=2946 lang=javascript
 *
 * [2946] Matrix Similarity After Cyclic Shifts
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    const n = mat[0].length;
    k = k % n;
    if (k === 0) return true;
    for (let i = 0; i < mat.length; i++) {
        const row = mat[i];
        for (let j = 0; j < n; j++) {
            const shift = i % 2 === 0 ? k : -k;
            if (row[j] !== row[((j + shift) % n + n) % n]) return false;
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(areSimilar([[1,2,3],[4,5,6],[7,8,9]], 4)); // false
console.log(areSimilar([[1,2,1,2],[5,5,5,5],[6,3,6,3]], 2)); // true
console.log(areSimilar([[2,2],[2,2]], 3)); // true
