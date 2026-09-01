/*
 * @lc app=leetcode.cn id=LCP 72 lang=javascript
 *
 * [LCP 72] 补给马车
 */

// @lc code=start
/**
 * @param {number[]} supplies
 * @return {number[]}
 */
var supplyWagon = function(supplies) {
  const target = Math.floor(supplies.length / 2);
  while (supplies.length > target) {
    let minSum = Infinity;
    let minIndex = 0;
    for (let i = 0; i < supplies.length - 1; i++) {
      const sum = supplies[i] + supplies[i + 1];
      if (sum < minSum) {
        minSum = sum;
        minIndex = i;
      }
    }
    supplies[minIndex] += supplies[minIndex + 1];
    supplies.splice(minIndex + 1, 1);
  }
  return supplies;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(supplyWagon([7, 3, 6, 1, 8]), [10, 15]);
assert.deepStrictEqual(supplyWagon([1, 3, 1, 5]), [5, 5]);
assert.deepStrictEqual(supplyWagon([5, 4, 3, 2, 1]), [9, 6]);
assert.deepStrictEqual(supplyWagon([1, 2]), [3]);
assert.deepStrictEqual(supplyWagon([1, 100, 1, 100]), [101, 101]);
assert.deepStrictEqual(supplyWagon([3, 1, 2, 5, 4]), [6, 9]);

console.log('All tests passed!');
