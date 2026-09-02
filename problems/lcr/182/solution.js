/*
 * @lc app=leetcode.cn id=LCR 182 lang=javascript
 *
 * [LCR 182] 动态口令
 */

// @lc code=start
/**
 * @param {string} password
 * @param {number} target
 * @return {string}
 */
var dynamicPassword = function(password, target) {
  return password.slice(target) + password.slice(0, target);
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(dynamicPassword('s3cur1tyC0d3', 4), 'r1tyC0d3s3cu');
assert.strictEqual(dynamicPassword('lrloseumgh', 6), 'umghlrlose');
// single shift
assert.strictEqual(dynamicPassword('abc', 1), 'bca');
assert.strictEqual(dynamicPassword('abc', 2), 'cab');
// all same
assert.strictEqual(dynamicPassword('aaa', 1), 'aaa');
// length 2
assert.strictEqual(dynamicPassword('xy', 1), 'yx');
// numbers and chars mixed
assert.strictEqual(dynamicPassword('a1b2', 2), 'b2a1');

console.log('All tests passed!');
console.log('dynamicPassword("s3cur1tyC0d3", 4) =', dynamicPassword('s3cur1tyC0d3', 4));
