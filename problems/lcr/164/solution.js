/*
 * @lc app=leetcode.cn id=LCR 164 lang=javascript
 *
 * [LCR 164] 破解闯关密码
 */

// @lc code=start
/**
 * @param {number[]} password
 * @return {string}
 */
var crackPassword = function(password) {
    return password
        .map(String)
        .sort((a, b) => (a + b < b + a ? -1 : 1))
        .join('');
};
// @lc code=end

// TEST:
const assert = require('assert');
assert.strictEqual(crackPassword([15, 8, 7]), '1578');
assert.strictEqual(crackPassword([0, 3, 30, 34, 5, 9]), '03033459');
assert.strictEqual(crackPassword([3, 30, 34, 5, 9]), '3033459');
assert.strictEqual(crackPassword([1, 12, 121]), '112112');
assert.strictEqual(crackPassword([0, 0]), '00');
assert.strictEqual(crackPassword([9, 91, 912]), '912919');
console.log('All tests passed!');
