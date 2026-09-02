/*
 * @lc app=leetcode.cn id=LCR 148 lang=javascript
 *
 * [LCR 148] 验证图书取出顺序
 */

// @lc code=start
/**
 * @param {number[]} putIn
 * @param {number[]} takeOut
 * @return {boolean}
 */
var validateBookSequences = function(putIn, takeOut) {
  const stack = [];
  let j = 0;
  for (const v of putIn) {
    stack.push(v);
    while (stack.length && stack[stack.length - 1] === takeOut[j]) {
      stack.pop();
      j++;
    }
  }
  return j === takeOut.length;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(validateBookSequences([6, 7, 8, 9, 10, 11], [9, 11, 10, 8, 7, 6]), true);
assert.strictEqual(validateBookSequences([6, 7, 8, 9, 10, 11], [11, 9, 8, 10, 6, 7]), false);
assert.strictEqual(validateBookSequences([1], [1]), true);
assert.strictEqual(validateBookSequences([1], [1]), true);
assert.strictEqual(validateBookSequences([1, 2, 3], [3, 2, 1]), true);
assert.strictEqual(validateBookSequences([1, 2, 3], [1, 2, 3]), true);
assert.strictEqual(validateBookSequences([1, 2, 3], [2, 1, 3]), true);
assert.strictEqual(validateBookSequences([1, 2, 3], [3, 1, 2]), false);
assert.strictEqual(validateBookSequences([], []), true);

console.log('All tests passed!');
console.log('validateBookSequences([6,7,8,9,10,11],[9,11,10,8,7,6]) =', validateBookSequences([6, 7, 8, 9, 10, 11], [9, 11, 10, 8, 7, 6]));
