/*
 * @lc app=leetcode.cn id=LCR 192 lang=javascript
 *
 * [LCR 192] 把字符串转换成整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const n = str.length;
  let i = 0;
  while (i < n && str[i] === ' ') i++;
  let sign = 1;
  if (i < n && (str[i] === '+' || str[i] === '-')) {
    if (str[i] === '-') sign = -1;
    i++;
  }
  let num = 0;
  const LIMIT = 2147483648; // 2^31
  while (i < n && str[i] >= '0' && str[i] <= '9') {
    num = num * 10 + (str.charCodeAt(i) - 48);
    if (num >= LIMIT) {
      // clamp early
      return sign === 1 ? LIMIT - 1 : -LIMIT;
    }
    i++;
  }
  return sign * num;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(myAtoi('42'), 42);
assert.strictEqual(myAtoi('   -42'), -42);
assert.strictEqual(myAtoi('4193 with words'), 4193);
assert.strictEqual(myAtoi('words and 987'), 0);
assert.strictEqual(myAtoi('-91283472332'), -2147483648);
assert.strictEqual(myAtoi('91283472332'), 2147483647);
assert.strictEqual(myAtoi(''), 0);
assert.strictEqual(myAtoi('+1'), 1);
assert.strictEqual(myAtoi('  0000000000012345678'), 12345678);
assert.strictEqual(myAtoi('  0 12'), 0);
assert.strictEqual(myAtoi('3.14159'), 3);
assert.strictEqual(myAtoi('-0') + 0, 0); // -0 equals 0

console.log('All tests passed!');