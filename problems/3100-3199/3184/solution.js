/*
 * @lc app=leetcode id=3184 lang=javascript
 *
 * [3184] Count Pairs That Form a Complete Day I
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
  const cnt = new Array(24).fill(0);
  let pairs = 0;
  for (const h of hours) {
    const r = h % 24;
    pairs += cnt[(24 - r) % 24];
    cnt[r]++;
  }
  return pairs;
};
// @lc code=end

// TEST:
console.log(countCompleteDayPairs([12,12,30,24,24])); // 2
console.log(countCompleteDayPairs([72,48,24,3])); // 3
console.log(countCompleteDayPairs([12])); // 0
console.log(countCompleteDayPairs([24,24,24])); // 3
console.log(countCompleteDayPairs([1,23])); // 1
