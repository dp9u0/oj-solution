/*
 * @lc app=leetcode.cn id=LCR 158 lang=javascript
 *
 * [LCR 158] 库存管理 II
 */

// @lc code=start
/**
 * @param {number[]} stock
 * @return {number}
 */
var inventoryManagement = function(stock) {
  let candidate = stock[0];
  let count = 0;
  for (const id of stock) {
    if (count === 0) candidate = id;
    count += id === candidate ? 1 : -1;
  }
  return candidate;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(inventoryManagement([6, 1, 3, 1, 1, 1]), 1);
assert.strictEqual(inventoryManagement([2, 2, 1, 1, 1, 2, 2]), 2);
assert.strictEqual(inventoryManagement([1]), 1);
assert.strictEqual(inventoryManagement([3, 3, 3]), 3);
assert.strictEqual(inventoryManagement([1, 2, 3, 2, 2]), 2);
assert.strictEqual(inventoryManagement([5, 5, 5, 1, 5]), 5);

console.log('All tests passed!');
console.log('inventoryManagement([6,1,3,1,1,1]) =', inventoryManagement([6, 1, 3, 1, 1, 1]));
