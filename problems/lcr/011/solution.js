/*
 * @lc app=leetcode.cn id=LCR 011 lang=javascript
 *
 * [LCR 011] 连续数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const first = new Map();
  first.set(0, -1);
  let pre = 0;
  let best = 0;
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i] === 0 ? -1 : 1;
    if (first.has(pre)) {
      best = Math.max(best, i - first.get(pre));
    } else {
      first.set(pre, i);
    }
  }
  return best;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(findMaxLength([0, 1]), 2);
assert.strictEqual(findMaxLength([0, 1, 0]), 2);
assert.strictEqual(findMaxLength([1, 1, 1, 0, 0, 0]), 6);
assert.strictEqual(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]), 6);
assert.strictEqual(findMaxLength([1, 1, 1]), 0);
assert.strictEqual(findMaxLength([0]), 0);
// whole array balanced
assert.strictEqual(findMaxLength([1, 0, 1, 0]), 4);
// best is in the middle: [0,1,0,0,1,1] = 3 zeros + 3 ones
assert.strictEqual(findMaxLength([0, 0, 1, 0, 0, 1, 1]), 6);

console.log('All tests passed!');
console.log('findMaxLength([0,1]) =', findMaxLength([0, 1]));
