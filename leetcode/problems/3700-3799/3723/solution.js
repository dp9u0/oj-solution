/*
 * @lc app=leetcode id=3723 lang=javascript
 *
 * [3723] Maximize Sum of Squares of Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
  if (sum > 9 * num) return '';

  const nines = Math.floor(sum / 9);
  const remaining = sum - 9 * nines;

  if (remaining === 0) {
    return '9'.repeat(nines) + '0'.repeat(num - nines);
  }
  return '9'.repeat(nines) + String(remaining) + '0'.repeat(num - nines - 1);
};
// @lc code=end

// TEST:
console.log(maxSumOfSquares(2, 3)); // "30"
console.log(maxSumOfSquares(2, 17)); // "98"
console.log(maxSumOfSquares(1, 10)); // ""
console.log(maxSumOfSquares(3, 18)); // "990"
console.log(maxSumOfSquares(5, 1)); // "10000"
