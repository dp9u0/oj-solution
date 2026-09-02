/*
 * @lc app=leetcode.cn id=LCR 172 lang=javascript
 *
 * [LCR 172] 统计目标成绩的出现次数
 */

// @lc code=start
/**
 * @param {number[]} scores
 * @param {number} target
 * @return {number}
 */
var countTarget = function(scores, target) {
  const lowerBound = (t) => {
    let lo = 0;
    let hi = scores.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (scores[mid] < t) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };
  const first = lowerBound(target);
  const afterLast = lowerBound(target + 1);
  return afterLast - first;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(countTarget([2, 2, 3, 4, 4, 4, 5, 6, 6, 8], 4), 3);
assert.strictEqual(countTarget([1, 2, 3, 5, 7, 9], 6), 0);
assert.strictEqual(countTarget([], 1), 0);
assert.strictEqual(countTarget([5, 5, 5], 5), 3);
assert.strictEqual(countTarget([1, 2, 3], 1), 1);
assert.strictEqual(countTarget([1, 2, 3], 3), 1);
assert.strictEqual(countTarget([0, 0, 0, 0], 0), 4);

console.log('All tests passed!');
console.log('countTarget([2,2,3,4,4,4,5,6,6,8], 4) =', countTarget([2, 2, 3, 4, 4, 4, 5, 6, 6, 8], 4));
