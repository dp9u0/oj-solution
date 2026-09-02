/*
 * @lc app=leetcode.cn id=LCR 092 lang=javascript
 *
 * [LCR 092] 将字符串翻转到单调递增
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  let zero = 0; // flips so prefix is all '0'
  let one = 0;  // flips so prefix is monotone (0*1*)
  for (const ch of s) {
    if (ch === '0') {
      // keep all-zeros: fine; or flip this 0 -> 1 to start/continue 1-part
      one = Math.min(zero, one) + 1;
      // zero stays as is
    } else {
      // flip this 1 -> 0 to stay all-zeros
      const newZero = zero + 1;
      // keep this 1 to continue monotone ending in 1
      one = Math.min(zero, one);
      zero = newZero;
    }
  }
  return Math.min(zero, one);
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minFlipsMonoIncr('00110'), 1);
assert.strictEqual(minFlipsMonoIncr('010110'), 2);
assert.strictEqual(minFlipsMonoIncr('00011000'), 2);
assert.strictEqual(minFlipsMonoIncr('0'), 0);
assert.strictEqual(minFlipsMonoIncr('1'), 0);
assert.strictEqual(minFlipsMonoIncr('111'), 0);
assert.strictEqual(minFlipsMonoIncr('000'), 0);
assert.strictEqual(minFlipsMonoIncr('10'), 1);

console.log('All tests passed!');
