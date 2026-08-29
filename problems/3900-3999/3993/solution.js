/*
 * @lc app=leetcode id=3993 lang=javascript
 *
 * [3993] Maximum Value of an Alternating Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} s
 * @param {number} m
 * @return {number}
 */
var maximumValue = function(n, s, m) {
  if (n === 1) return s;
  return s + Math.floor(n / 2) * (m - 1) + 1;
};
// @lc code=end

// TEST:
console.log(maximumValue(4, 3, 5) === 12);
console.log(maximumValue(2, 4, 3) === 7);
console.log(maximumValue(1, 100, 5) === 100);
console.log(maximumValue(3, 1, 1) === 2);
console.log(maximumValue(5, 1, 1) === 2);
console.log(maximumValue(1000000000, 1, 100000) === 1 + 500000000 * 99999 + 1);
console.log(maximumValue(7, 10, 2) === 10 + 3 * 1 + 1);
