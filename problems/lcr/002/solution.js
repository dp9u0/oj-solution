/*
 * @lc app=leetcode.cn id=LCR 002 lang=javascript
 *
 * [LCR 002] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let res = '';
  while (i >= 0 || j >= 0 || carry) {
    const bitA = i >= 0 ? Number(a[i]) : 0;
    const bitB = j >= 0 ? Number(b[j]) : 0;
    const sum = bitA + bitB + carry;
    res = (sum % 2) + res;
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(addBinary('11', '10'), '101');
assert.strictEqual(addBinary('1010', '1011'), '10101');
assert.strictEqual(addBinary('0', '0'), '0');
assert.strictEqual(addBinary('1', '1'), '10');
assert.strictEqual(addBinary('1', '0'), '1');
// differing lengths + carry cascade
assert.strictEqual(addBinary('111', '1'), '1000');
assert.strictEqual(addBinary('101', '101'), '1010');
assert.strictEqual(addBinary('1001', '1'), '1010');

console.log('All tests passed!');
console.log('addBinary("11","10") =', addBinary('11', '10'));
