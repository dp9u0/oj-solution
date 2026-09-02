/*
 * @lc app=leetcode.cn id=LCR 008 lang=javascript
 *
 * [LCR 008] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0;
  let sum = 0;
  let best = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      best = Math.min(best, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return best === Infinity ? 0 : best;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2);
assert.strictEqual(minSubArrayLen(4, [1, 4, 4]), 1);
assert.strictEqual(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]), 0);
// whole array barely meets target
assert.strictEqual(minSubArrayLen(15, [1, 2, 3, 4, 5]), 5);
// single element meets
assert.strictEqual(minSubArrayLen(5, [5, 6, 7]), 1);
assert.strictEqual(minSubArrayLen(3, [1, 1, 1]), 3);
assert.strictEqual(minSubArrayLen(6, [10]), 1);
// large target needs all
assert.strictEqual(minSubArrayLen(100, [1, 2, 3]), 0);

console.log('All tests passed!');
console.log('minSubArrayLen(7, [2,3,1,2,4,3]) =', minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
