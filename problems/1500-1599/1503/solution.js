/*
 * @lc app=leetcode id=1503 lang=javascript
 *
 * [1503] Last Moment Before All Ants Fall Out of a Plank
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
  let maxLeft = 0;
  for (const pos of left) {
    maxLeft = Math.max(maxLeft, pos);
  }
  let minRight = n;
  for (const pos of right) {
    minRight = Math.min(minRight, pos);
  }
  return Math.max(maxLeft, n - minRight);
};
// @lc code=end

// TEST:
console.log(getLastMoment(4, [4,3], [0,1])); // 4
console.log(getLastMoment(7, [], [0,1,2,3,4,5,6,7])); // 7
console.log(getLastMoment(7, [0,1,2,3,4,5,6,7], [])); // 7
