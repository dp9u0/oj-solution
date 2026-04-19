/*
 * @lc app=leetcode id=2928 lang=javascript
 *
 * [2928] Distribute Candies Among Children I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
  const c2 = (x) => x >= 2 ? x * (x - 1) / 2 : 0;

  const total = c2(n + 2);
  const a1 = 3 * c2(n - limit + 1);
  const a2 = 3 * c2(n - 2 * limit);
  const a3 = c2(n - 3 * limit - 1);

  return total - a1 + a2 - a3;
};
// @lc code=end

// TEST:
console.log(distributeCandies(5, 2)); // 3
console.log(distributeCandies(3, 3)); // 10
