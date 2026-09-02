/*
 * @lc app=leetcode.cn id=LCR 135 lang=javascript
 *
 * [LCR 135] 报数
 */

// @lc code=start
/**
 * @param {number} cnt
 * @return {number[]}
 */
var countNumbers = function(cnt) {
  const max = Math.pow(10, cnt);
  const res = new Array(max - 1);
  for (let i = 1; i < max; i++) res[i - 1] = i;
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(countNumbers(1), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assert.strictEqual(countNumbers(2).length, 99);
assert.deepStrictEqual(countNumbers(2).slice(0, 3), [1, 2, 3]);
assert.deepStrictEqual(countNumbers(2).slice(-3), [97, 98, 99]);
assert.strictEqual(countNumbers(3).length, 999);
assert.strictEqual(countNumbers(3)[0], 1);
assert.strictEqual(countNumbers(3)[998], 999);

console.log('All tests passed!');
console.log('countNumbers(2).slice(0,5) =', JSON.stringify(countNumbers(2).slice(0, 5)));
