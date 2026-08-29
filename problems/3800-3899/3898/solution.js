/*
 * @lc app=leetcode id=3898 lang=javascript
 *
 * [3898] Find the Degree of Each Vertex
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
  return matrix.map((row) => row.reduce((a, b) => a + b, 0));
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findDegrees([[0, 1, 1], [1, 0, 1], [1, 1, 0]])) === JSON.stringify([2, 2, 2]));
console.log(JSON.stringify(findDegrees([[0, 1, 0], [1, 0, 0], [0, 0, 0]])) === JSON.stringify([1, 1, 0]));
console.log(JSON.stringify(findDegrees([[0]])) === JSON.stringify([0]));
console.log(JSON.stringify(findDegrees([[0, 1], [1, 0]])) === JSON.stringify([1, 1]));
console.log(JSON.stringify(findDegrees([[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]])) === JSON.stringify([2, 2, 2, 2]));
