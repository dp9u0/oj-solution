/*
 * @lc app=leetcode.cn id=LCR 131 lang=javascript
 *
 * [LCR 131] 砍竹子 I
 */

// @lc code=start
/**
 * @param {number} bamboo_len
 * @return {number}
 */
var cuttingBamboo = function(bamboo_len) {
  if (bamboo_len <= 3) return bamboo_len - 1;
  const q = Math.floor(bamboo_len / 3);
  const r = bamboo_len % 3;
  if (r === 0) return Math.pow(3, q);
  if (r === 1) return Math.pow(3, q - 1) * 4;
  return Math.pow(3, q) * 2;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(cuttingBamboo(12), 81);
assert.strictEqual(cuttingBamboo(2), 1);
assert.strictEqual(cuttingBamboo(3), 2);
assert.strictEqual(cuttingBamboo(4), 4);
assert.strictEqual(cuttingBamboo(5), 6);
assert.strictEqual(cuttingBamboo(6), 9);
assert.strictEqual(cuttingBamboo(8), 18);
assert.strictEqual(cuttingBamboo(10), 36);

console.log('All tests passed!');
console.log('cuttingBamboo(12) =', cuttingBamboo(12));
