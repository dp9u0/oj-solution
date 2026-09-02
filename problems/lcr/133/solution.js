/*
 * @lc app=leetcode.cn id=LCR 133 lang=javascript
 *
 * [LCR 133] 位 1 的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(hammingWeight(11), 3);
assert.strictEqual(hammingWeight(128), 1);
assert.strictEqual(hammingWeight(4294967293), 31); // JS: 4294967293 not 32-bit... see below
assert.strictEqual(hammingWeight(0), 0);
assert.strictEqual(hammingWeight(1), 1);
assert.strictEqual(hammingWeight(2 ** 31 - 1), 31);
assert.strictEqual(hammingWeight(255), 8);

console.log('All tests passed!');
console.log('hammingWeight(11) =', hammingWeight(11));
