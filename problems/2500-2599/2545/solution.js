/*
 * @lc app=leetcode id=2545 lang=javascript
 *
 * [2545] Sort the Students by Their Kth Score
 */

// @lc code=start
/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
  return score.sort((a, b) => b[k] - a[k]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sortTheStudents([[10,6,9,1],[7,5,11,2],[4,8,3,15]], 2)));
// [[7,5,11,2],[10,6,9,1],[4,8,3,15]]
console.log(JSON.stringify(sortTheStudents([[3,4],[5,6]], 0))); // [[5,6],[3,4]]
console.log(JSON.stringify(sortTheStudents([[1]], 0))); // [[1]]
console.log(JSON.stringify(sortTheStudents([[5,1],[3,2],[4,3]], 1))); // [[4,3],[3,2],[5,1]]
