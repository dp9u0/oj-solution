/*
 * @lc app=leetcode.cn id=LCR 186 lang=javascript
 *
 * [LCR 186] 文物朝代判断
 */

// @lc code=start
/**
 * @param {number[]} places
 * @return {boolean}
 */
var checkDynasty = function(places) {
  const seen = new Set();
  let min = 14;
  let max = 0;
  let hasNonZero = false;
  for (const p of places) {
    if (p === 0) continue; // unknown = wildcard
    hasNonZero = true;
    if (seen.has(p)) return false; // duplicate dynasty breaks the straight
    seen.add(p);
    if (p < min) min = p;
    if (p > max) max = p;
  }
  // all unknown -> can always represent 5 consecutive dynasties
  if (!hasNonZero) return true;
  // with 5 slots, non-zero numbers must fit within a window of 5
  return max - min < 5;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(checkDynasty([0, 6, 9, 0, 7]), true);
assert.strictEqual(checkDynasty([7, 8, 9, 10, 11]), true);
assert.strictEqual(checkDynasty([1, 2, 3, 4, 5]), true);
assert.strictEqual(checkDynasty([0, 0, 1, 2, 3]), true);
assert.strictEqual(checkDynasty([0, 0, 0, 0, 0]), true);
// duplicate non-zero
assert.strictEqual(checkDynasty([0, 0, 1, 1, 3]), false);
// 1,2,3,4,5 reachable with two wildcards filling 2 and 4
assert.strictEqual(checkDynasty([0, 0, 1, 3, 5]), true);
// exact 5 window from 9..13 (13 is max dynasty)
assert.strictEqual(checkDynasty([9, 10, 11, 12, 13]), true);
// wildcards fill 11,12 for a 9..13 run? [9,10,0,0,13] gap fine
assert.strictEqual(checkDynasty([9, 10, 0, 0, 13]), true);
// single valid card needs 4 zeros window
assert.strictEqual(checkDynasty([0, 0, 0, 0, 13]), true);

console.log('All tests passed!');
console.log('checkDynasty([0,6,9,0,7]) =', checkDynasty([0, 6, 9, 0, 7]));
