/*
 * @lc app=leetcode.cn id=LCR 035 lang=javascript
 *
 * [LCR 035] 最小时间差
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const mins = timePoints.map(t => {
    const h = Number(t.slice(0, 2));
    const m = Number(t.slice(3, 5));
    return h * 60 + m;
  });
  mins.sort((a, b) => a - b);
  let best = Infinity;
  for (let i = 1; i < mins.length; i++) {
    const diff = mins[i] - mins[i - 1];
    if (diff < best) best = diff;
    if (best === 0) return 0;
  }
  // circular wrap-around gap
  best = Math.min(best, 1440 - mins[mins.length - 1] + mins[0]);
  return best;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(findMinDifference(['23:59', '00:00']), 1);
assert.strictEqual(findMinDifference(['00:00', '23:59', '00:00']), 0);
// duplicates
assert.strictEqual(findMinDifference(['01:00', '01:00']), 0);
// adjacent minutes
assert.strictEqual(findMinDifference(['10:00', '10:01']), 1);
// wrap: 23:59 to 00:01 = 2
assert.strictEqual(findMinDifference(['23:59', '00:01']), 2);
// wrap dominates: 23:59 .. 00:13 = 14
assert.strictEqual(findMinDifference(['12:12', '00:13', '23:59', '01:00']), 14);

console.log('All tests passed!');
console.log('findMinDifference(["23:59","00:00"]) =', findMinDifference(['23:59', '00:00']));
