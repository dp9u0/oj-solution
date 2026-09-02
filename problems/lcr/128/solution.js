/*
 * @lc app=leetcode.cn id=LCR 128 lang=javascript
 *
 * [LCR 128] 库存管理 I
 */

// @lc code=start
/**
 * @param {number[]} stock
 * @return {number}
 */
var inventoryManagement = function(stock) {
  let lo = 0;
  let hi = stock.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (stock[mid] < stock[hi]) hi = mid;
    else if (stock[mid] > stock[hi]) lo = mid + 1;
    else hi--;
  }
  return stock[lo];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(inventoryManagement([4, 5, 8, 3, 4]), 3);
assert.strictEqual(inventoryManagement([5, 7, 9, 1, 2]), 1);
assert.strictEqual(inventoryManagement([1]), 1);
assert.strictEqual(inventoryManagement([2, 1]), 1);
assert.strictEqual(inventoryManagement([1, 2, 3]), 1);
assert.strictEqual(inventoryManagement([3, 1, 3]), 1);
assert.strictEqual(inventoryManagement([1, 1, 1]), 1);
assert.strictEqual(inventoryManagement([2, 2, 2, 0, 1]), 0);

console.log('All tests passed!');
console.log('inventoryManagement([4,5,8,3,4]) =', inventoryManagement([4, 5, 8, 3, 4]));
