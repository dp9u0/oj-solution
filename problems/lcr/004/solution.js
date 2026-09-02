/*
 * @lc app=leetcode.cn id=LCR 004 lang=javascript
 *
 * [LCR 004] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    let cnt = 0;
    for (const num of nums) {
      cnt += (num >> i) & 1;
    }
    // values appearing 3x contribute bit counts in multiples of 3;
    // the leftover belongs to the single element
    if (cnt % 3 !== 0) {
      res |= (1 << i);
    }
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(singleNumber([2, 2, 3, 2]), 3);
assert.strictEqual(singleNumber([0, 1, 0, 1, 0, 1, 100]), 100);
assert.strictEqual(singleNumber([5]), 5);
// single is negative, others triple
assert.strictEqual(singleNumber([-7, 3, 3, 3]), -7);
assert.strictEqual(singleNumber([300, 1, 300, 300]), 1);
// large range values
assert.strictEqual(singleNumber([2147483647, 2147483647, 2147483647, -2147483648]), -2147483648);
assert.strictEqual(singleNumber([0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 42, 42, 9]), 9);

console.log('All tests passed!');
console.log('singleNumber([2,2,3,2]) =', singleNumber([2, 2, 3, 2]));
