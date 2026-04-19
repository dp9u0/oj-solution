/*
 * @lc app=leetcode id=2652 lang=javascript
 *
 * [2652] Sum Multiples
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
  const sumDiv = (k) => k * Math.floor(n / k) * (Math.floor(n / k) + 1) / 2;
  return sumDiv(3) + sumDiv(5) + sumDiv(7) - sumDiv(15) - sumDiv(21) - sumDiv(35) + sumDiv(105);
};
// @lc code=end

// TEST:
console.log(sumOfMultiples(7)); // 21
console.log(sumOfMultiples(10)); // 40
console.log(sumOfMultiples(9)); // 30
