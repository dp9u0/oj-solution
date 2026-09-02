/*
 * @lc app=leetcode.cn id=LCR 072 lang=javascript
 *
 * [LCR 072] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) return x;
  let lo = 0;
  let hi = x;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (mid <= x / mid) lo = mid + 1; // mid*mid <= x (avoid overflow)
    else hi = mid;
  }
  return lo - 1;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(mySqrt(4), 2);
assert.strictEqual(mySqrt(8), 2);
assert.strictEqual(mySqrt(0), 0);
assert.strictEqual(mySqrt(1), 1);
assert.strictEqual(mySqrt(9), 3);
assert.strictEqual(mySqrt(15), 3);
assert.strictEqual(mySqrt(2147483647), 46340);

console.log('All tests passed!');
console.log('mySqrt(8) =', mySqrt(8));
