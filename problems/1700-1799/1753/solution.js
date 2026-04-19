/*
 * @lc app=leetcode id=1753 lang=javascript
 *
 * [1753] Maximum Score From Removing Stones
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
  const [x, y, z] = [a, b, c].sort((v1, v2) => v1 - v2);
  return Math.min(x + y, (x + y + z) >> 1);
};
// @lc code=end

// TEST:
console.log(maximumScore(2, 4, 6)); // 6
console.log(maximumScore(4, 4, 6)); // 7
console.log(maximumScore(1, 8, 8)); // 8
