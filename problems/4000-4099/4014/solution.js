/*
 * @lc app=leetcode id=4014 lang=javascript
 *
 * [4014] Minimum Possible Sum of Final Prices
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number[]} discounts
 * @return {number}
 */
var minPrice = function(prices, discounts) {
  prices.sort((a, b) => b - a);
  discounts.sort((a, b) => b - a);
  let sum = 0;
  const m = Math.min(prices.length, discounts.length);
  for (let i = 0; i < prices.length; i++) {
    if (i < m) {
      sum += (prices[i] * (100 - discounts[i])) / 100;
    } else {
      sum += prices[i];
    }
  }
  return sum;
};
// @lc code-end

// TEST:
const close = (a, b) => Math.abs(a - b) < 1e-9;
console.log(close(minPrice([10, 30, 21], [50, 60]), 32.5));
console.log(close(minPrice([100, 70], [10, 40, 50]), 92));
console.log(close(minPrice([7, 3, 9], [100, 100]), 3));
console.log(close(minPrice([5], [0]), 5));
console.log(close(minPrice([2, 2], [50]), 3));
