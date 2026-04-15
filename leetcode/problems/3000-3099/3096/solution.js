/*
 * @lc app=leetcode id=3096 lang=javascript
 *
 * [3096] Minimum Levels to Gain More Points
 */

// @lc code=start
/**
 * @param {number[]} possible
 * @return {number}
 */
var minimumLevels = function(possible) {
  const n = possible.length;
  const scores = possible.map(v => v === 1 ? 1 : -1);
  const total = scores.reduce((a, b) => a + b, 0);
  let aliceSum = 0;
  for (let i = 0; i < n - 1; i++) {
    aliceSum += scores[i];
    if (2 * aliceSum > total) return i + 1;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(minimumLevels([1, 0, 1, 0])); // 1
console.log(minimumLevels([1, 1, 1, 1, 1])); // 3
console.log(minimumLevels([0, 0])); // -1
