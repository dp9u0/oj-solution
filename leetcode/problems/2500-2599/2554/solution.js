/*
 * @lc app=leetcode id=2554 lang=javascript
 *
 * [2554] Maximum Number of Integers to Choose From a Range I
 */

// @lc code=start
/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
  const ban = new Set(banned);
  let sum = 0, count = 0;
  for (let i = 1; i <= n; i++) {
    if (ban.has(i)) continue;
    if (sum + i > maxSum) break;
    sum += i;
    count++;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(maxCount([1, 6, 5], 5, 6)); // 2
console.log(maxCount([1, 2, 3, 4, 5, 6, 7], 8, 1)); // 0
console.log(maxCount([11], 7, 50)); // 7
