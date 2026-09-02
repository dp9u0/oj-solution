/*
 * @lc app=leetcode.cn id=LCR 001 lang=javascript
 *
 * [LCR 001] 两数相除
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function(a, b) {
  // only overflowing case in 32-bit signed range
  if (a === -2147483648 && b === -1) return 2147483647;

  const neg = (a < 0) !== (b < 0);
  let dividend = Math.abs(a);
  let divisor = Math.abs(b);
  let result = 0;

  // subtract the largest multiple of divisor (found by doubling) each pass
  while (dividend >= divisor) {
    let temp = divisor;
    let multiple = 1;
    while (temp + temp <= dividend) {
      temp += temp;
      multiple += multiple;
    }
    dividend -= temp;
    result += multiple;
  }

  return neg ? -result : result;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(divide(15, 2), 7);
assert.strictEqual(divide(7, -3), -2);
assert.strictEqual(divide(0, 1), 0);
assert.strictEqual(divide(1, 1), 1);
// overflow -> 2^31 - 1
assert.strictEqual(divide(-2147483648, -1), 2147483647);
// boundaries
assert.strictEqual(divide(-2147483648, 1), -2147483648);
assert.strictEqual(divide(2147483647, 1), 2147483647);
// truncation toward zero
assert.strictEqual(divide(10, 3), 3);
assert.strictEqual(divide(-10, 3), -3);
assert.strictEqual(divide(10, -3), -3);
assert.strictEqual(divide(-10, -3), 3);
// small numerator
assert.strictEqual(divide(100, 1000), 0);
// negative divided by itself
assert.strictEqual(divide(-7, -7), 1);

console.log('All tests passed!');
console.log('divide(15, 2) =', divide(15, 2));
