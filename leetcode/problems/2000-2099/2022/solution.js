/*
 * @lc app=leetcode id=2022 lang=javascript
 *
 * [2022] Convert 1D Array Into 2D Array
 */

// @lc code=start
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (original.length !== m * n) return [];
    let res = [];
    for (let i = 0; i < m; i++) {
        res.push(original.slice(i * n, i * n + n));
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(construct2DArray([1,2,3,4], 2, 2)));
console.log(JSON.stringify(construct2DArray([1,2,3], 1, 3)));
console.log(JSON.stringify(construct2DArray([1,2], 1, 1)));
