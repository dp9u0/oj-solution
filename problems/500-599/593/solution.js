/*
 * @lc app=leetcode id=593 lang=javascript
 *
 * [593] Valid Square
 */

// @lc code=start
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  const dist2 = (a, b) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
  const d = [dist2(p1, p2), dist2(p1, p3), dist2(p1, p4), dist2(p2, p3), dist2(p2, p4), dist2(p3, p4)].sort((a, b) => a - b);
  return d[0] > 0 && d[0] === d[1] && d[1] === d[2] && d[2] === d[3] && d[4] === d[5] && d[4] === 2 * d[0];
};
// @lc code=end

// TEST:
console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 1]) === true);
console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 12]) === false);
console.log(validSquare([1, 0], [-1, 0], [0, 1], [0, -1]) === true);
console.log(validSquare([0, 0], [0, 0], [0, 0], [0, 0]) === false);
console.log(validSquare([0, 0], [2, 0], [2, 1], [0, 1]) === false);
console.log(validSquare([0, 0], [0, 0], [1, 0], [0, 1]) === false);
console.log(validSquare([0, 0], [5, 0], [5, 5], [0, 5]) === true);
