/*
 * @lc app=leetcode.cn id=LCR 162 lang=javascript
 *
 * [LCR 162] 数字 1 的个数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var digitOneInNumber = function(num) {
  let count = 0;
  let factor = 1;
  while (factor <= num) {
    const high = Math.floor(num / (factor * 10));
    const cur = Math.floor(num / factor) % 10;
    const low = num % factor;
    if (cur === 0) count += high * factor;
    else if (cur === 1) count += high * factor + low + 1;
    else count += (high + 1) * factor;
    factor *= 10;
  }
  return count;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(digitOneInNumber(0), 0);
assert.strictEqual(digitOneInNumber(13), 6);
assert.strictEqual(digitOneInNumber(1), 1);
assert.strictEqual(digitOneInNumber(9), 1);
assert.strictEqual(digitOneInNumber(10), 2);
assert.strictEqual(digitOneInNumber(99), 20);
assert.strictEqual(digitOneInNumber(100), 21);
assert.strictEqual(digitOneInNumber(111), 36);
assert.strictEqual(digitOneInNumber(999), 300);

console.log('All tests passed!');
console.log('digitOneInNumber(13) =', digitOneInNumber(13));
