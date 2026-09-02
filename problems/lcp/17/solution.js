/*
 * @lc app=leetcode.cn id=LCP 17 lang=javascript
 *
 * [LCP 17] 速算机器人
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let x = 1;
  let y = 0;
  for (const ch of s) {
    if (ch === 'A') x = 2 * x + y;
    else y = 2 * y + x;
  }
  return x + y;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(calculate('AB'), 4);
assert.strictEqual(calculate(''), 1);
assert.strictEqual(calculate('A'), 2);
assert.strictEqual(calculate('B'), 2);
assert.strictEqual(calculate('BA'), 4);
assert.strictEqual(calculate('AAAA'), 16);
assert.strictEqual(calculate('BBBB'), 16);

console.log('All tests passed!');
console.log('calculate("AB") =', calculate('AB'));
