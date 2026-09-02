/*
 * @lc app=leetcode.cn id=LCP 11 lang=javascript
 *
 * [LCP 11] 期望个数统计
 */

// @lc code=start
/**
 * @param {number[]} scores
 * @return {number}
 */
var expectNumber = function(scores) {
  return new Set(scores).size;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(expectNumber([1, 2, 3]), 3);
assert.strictEqual(expectNumber([1, 1]), 1);
assert.strictEqual(expectNumber([1, 1, 2]), 2);
// all identical
assert.strictEqual(expectNumber([7, 7, 7, 7]), 1);
// all distinct
assert.strictEqual(expectNumber([5, 1, 3, 2, 4]), 5);
// single element
assert.strictEqual(expectNumber([0]), 1);
// duplicates spread out
assert.strictEqual(expectNumber([2, 2, 3, 3, 3, 1]), 3);
// includes 0
assert.strictEqual(expectNumber([0, 0, 1, 0, 2, 2]), 3);

console.log('All tests passed!');
console.log('expectNumber([1,2,3]) =', expectNumber([1, 2, 3]));
