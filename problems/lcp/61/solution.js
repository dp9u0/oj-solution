/*
 * @lc app=leetcode.cn id=LCP 61 lang=javascript
 *
 * [LCP 61] 气温变化趋势
 */

// @lc code=start
/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
var temperatureTrend = function(temperatureA, temperatureB) {
  const n = temperatureA.length;
  const trend = (arr, i) => {
    const d = arr[i + 1] - arr[i];
    return d > 0 ? 1 : d < 0 ? -1 : 0;
  };
  let best = 0;
  let cur = 0;
  for (let i = 0; i < n - 1; i++) {
    if (trend(temperatureA, i) === trend(temperatureB, i)) {
      cur++;
      if (cur > best) best = cur;
    } else {
      cur = 0;
    }
  }
  return best;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(temperatureTrend([21, 18, 18, 18, 31], [34, 32, 16, 16, 17]), 2);
assert.strictEqual(temperatureTrend([5, 10, 16, -6, 15, 11, 3], [16, 22, 23, 23, 25, 3, -16]), 3);
// all same trends
assert.strictEqual(temperatureTrend([1, 2, 3], [4, 5, 6]), 2);
assert.strictEqual(temperatureTrend([1, 1, 1], [2, 2, 2]), 2);
// none match
assert.strictEqual(temperatureTrend([1, 2], [2, 1]), 0);
assert.strictEqual(temperatureTrend([1, 1], [1, 2]), 0);
// single day pair
assert.strictEqual(temperatureTrend([1, 2], [1, 3]), 1);

console.log('All tests passed!');
console.log('temperatureTrend([21,18,18,18,31],[34,32,16,16,17]) =', temperatureTrend([21, 18, 18, 18, 31], [34, 32, 16, 16, 17]));
