/*
 * @lc app=leetcode id=1716 lang=javascript
 *
 * [1716] Calculate Money in Leetcode Bank
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  const weeks = Math.floor(n / 7);
  const days = n % 7;
  // Complete weeks: week i (0-indexed) sums to 7*i + 28
  let total = weeks * 28 + 7 * (weeks - 1) * weeks / 2;
  // Remaining days: weeks+1, weeks+2, ..., weeks+days
  total += days * (weeks + 1) + days * (days - 1) / 2;
  return total;
};
// @lc code=end

// TEST:
console.log(totalMoney(4));   // 10
console.log(totalMoney(10));  // 37
console.log(totalMoney(20));  // 96
