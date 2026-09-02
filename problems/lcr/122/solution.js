/*
 * @lc app=leetcode.cn id=LCR 122 lang=javascript
 *
 * [LCR 122] 路径加密
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var pathEncryption = function(path) {
  return path.replace(/\./g, ' ');
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(pathEncryption('a.aef.qerf.bb'), 'a aef qerf bb');
assert.strictEqual(pathEncryption('abc'), 'abc');
assert.strictEqual(pathEncryption('...'), '   ');
assert.strictEqual(pathEncryption('.'), ' ');
assert.strictEqual(pathEncryption(''), '');

console.log('All tests passed!');
console.log('pathEncryption("a.aef.qerf.bb") =', pathEncryption('a.aef.qerf.bb'));
