/*
 * @lc app=leetcode id=3075 lang=javascript
 *
 * [3075] Maximize Happiness of Selected Children
 */

// @lc code=start
/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
  happiness.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += Math.max(0, happiness[i] - i);
  }
  return sum;
};
// @lc code=end

// TEST:
console.log(maximumHappinessSum([1, 2, 3], 2)); // 4
console.log(maximumHappinessSum([1, 1, 1, 1], 2)); // 1
console.log(maximumHappinessSum([2, 3, 4, 5], 1)); // 5
