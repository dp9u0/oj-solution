/*
 * @lc app=leetcode.cn id=LCP 12 lang=javascript
 *
 * [LCP 12] 小张刷题计划
 */

// @lc code=start
/**
 * @param {number[]} time
 * @param {number} m
 * @return {number}
 */
var minTime = function(time, m) {
  const n = time.length;
  if (m >= n) return 0;

  // can we finish within m days, each day's spent time <= T
  const can = (T) => {
    let days = 1;
    let sum = 0;      // total problem times in current day (excluding helped)
    let max = 0;      // largest single problem time in current day
    for (const t of time) {
      // try adding t: spent becomes (sum+t) - max(prevMax, t)
      const newSum = sum + t;
      const newMax = Math.max(max, t);
      if (newSum - newMax <= T) {
        sum = newSum;
        max = newMax;
      } else {
        // start a new day with just this problem (help it -> spent 0)
        days++;
        sum = t;
        max = t;
      }
      if (days > m) return false;
    }
    return true;
  };

  let lo = 0;
  let hi = 0;
  for (const t of time) hi += t;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (can(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minTime([1, 2, 3, 3], 2), 3);
assert.strictEqual(minTime([999, 999, 999], 4), 0);
// every problem its own day -> 0
assert.strictEqual(minTime([1, 2, 3], 3), 0);
// single day: skip the largest, T = sum - max
assert.strictEqual(minTime([1, 2, 3], 1), 3);
assert.strictEqual(minTime([5, 1, 2], 1), 3);
// two problems one day
assert.strictEqual(minTime([4, 4], 1), 4);
// classic split
assert.strictEqual(minTime([3, 2, 4], 2), 2);
assert.strictEqual(minTime([100, 1, 1, 1], 2), 1);

console.log('All tests passed!');
console.log('minTime([1,2,3,3], 2) =', minTime([1, 2, 3, 3], 2));
