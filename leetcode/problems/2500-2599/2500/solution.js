/*
 * @lc app=leetcode id=2500 lang=javascript
 *
 * [2500] Delete Greatest Value in Each Row
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
  for (const row of grid) row.sort((a, b) => b - a);
  let ans = 0;
  const n = grid[0].length;
  for (let j = 0; j < n; j++) {
    let maxVal = 0;
    for (const row of grid) {
      maxVal = Math.max(maxVal, row[j]);
    }
    ans += maxVal;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(deleteGreatestValue([[1,2,4],[3,3,1]])); // 8
console.log(deleteGreatestValue([[10]])); // 10
console.log(deleteGreatestValue([[1,2,4],[3,3,1,5]])); // test with different lengths... no, grid is m x n
