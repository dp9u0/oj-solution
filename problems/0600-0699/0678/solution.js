/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let lo = 0;
  let hi = 0;
  for (const ch of s) {
    if (ch === '(') {
      lo++;
      hi++;
    } else if (ch === ')') {
      lo--;
      hi--;
    } else {
      lo--;
      hi++;
    }
    if (hi < 0) return false;
    if (lo < 0) lo = 0;
  }
  return lo === 0;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(checkValidString('()'), true);
assert.strictEqual(checkValidString('(*)'), true);
assert.strictEqual(checkValidString('(*))'), true);
assert.strictEqual(checkValidString('(*('), false); // trailing unmatched '('
assert.strictEqual(checkValidString(')'), false);
assert.strictEqual(checkValidString('*'), true);
assert.strictEqual(checkValidString('**((**'), true); // '' + '())' mix -> "(())"
assert.strictEqual(checkValidString('(((*)'), false);

console.log('All tests passed!');
