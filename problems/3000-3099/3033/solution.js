/*
 * @lc app=leetcode id=3033 lang=javascript
 *
 * [3033] Modify the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const colMax = new Array(n).fill(-1);
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      colMax[j] = Math.max(colMax[j], matrix[i][j]);
    }
  }
  const answer = matrix.map(row => [...row]);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (answer[i][j] === -1) {
        answer[i][j] = colMax[j];
      }
    }
  }
  return answer;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(modifiedMatrix([[1, 2, -1], [4, -1, 6], [7, 8, 9]]))); // [[1,2,9],[4,8,6],[7,8,9]]
console.log(JSON.stringify(modifiedMatrix([[3, -1], [5, 2]]))); // [[3,2],[5,2]]
console.log(JSON.stringify(modifiedMatrix([[1, 2, 3], [4, 5, 6]]))); // [[1,2,3],[4,5,6]]
