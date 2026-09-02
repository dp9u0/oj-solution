/*
 * @lc app=leetcode.cn id=LCS 02 lang=javascript
 *
 * [LCS 02] 完成一半题目
 */

// @lc code=start
/**
 * @param {number[]} questions
 * @return {number}
 */
var halfQuestions = function(questions) {
  const n = questions.length / 2;
  const count = new Map();
  for (const q of questions) {
    count.set(q, (count.get(q) || 0) + 1);
  }
  // take the most frequent types until we cover at least N questions
  const freqs = Array.from(count.values()).sort((a, b) => b - a);
  let total = 0;
  let types = 0;
  for (const f of freqs) {
    total += f;
    types++;
    if (total >= n) break;
  }
  return types;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(halfQuestions([2, 1, 6, 2]), 1);
assert.strictEqual(halfQuestions([1, 5, 1, 3, 4, 5, 2, 5, 3, 3, 8, 6]), 2);
// all distinct -> need half of all questions, each type count 1
assert.strictEqual(halfQuestions([1, 2, 3, 4, 5, 6, 7, 8]), 4);
// one type repeats enough to cover N alone
assert.strictEqual(halfQuestions([1, 1, 1, 1, 1, 1, 2, 3]), 1);
// two dominant types
assert.strictEqual(halfQuestions([1, 1, 2, 2, 3, 3, 4, 5]), 2);
// need to combine many sparse types
assert.strictEqual(halfQuestions([1, 2, 2, 3, 4, 5]), 2);
// balanced pairs -> exactly half of types
assert.strictEqual(halfQuestions([1, 1, 2, 2, 3, 3]), 2);

console.log('All tests passed!');
console.log('halfQuestions([2,1,6,2]) =', halfQuestions([2, 1, 6, 2]));
