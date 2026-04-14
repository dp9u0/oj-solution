/*
 * @lc app=leetcode id=2028 lang=javascript
 *
 * [2028] Find Missing Observations
 */

// @lc code=start
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
  const m = rolls.length;
  const total = mean * (m + n);
  const knownSum = rolls.reduce((a, b) => a + b, 0);
  const target = total - knownSum;
  if (target < n || target > 6 * n) return [];

  const base = Math.floor(target / n);
  const extra = target % n;
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(base + (i < extra ? 1 : 0));
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(missingRolls([3, 2, 4, 3], 4, 2))); // [6,6]
console.log(JSON.stringify(missingRolls([1, 5, 6], 3, 4))); // [2,3,2,2] or similar
console.log(JSON.stringify(missingRolls([1, 2, 3, 4], 6, 4))); // []
