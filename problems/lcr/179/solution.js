/*
 * @lc app=leetcode.cn id=LCR 179 lang=javascript
 *
 * [LCR 179] 查找总价格为目标值的两个商品
 */

// @lc code=start
/**
 * @param {number[]} price
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(price, target) {
  let l = 0;
  let r = price.length - 1;
  while (l < r) {
    const sum = price[l] + price[r];
    if (sum === target) return [price[l], price[r]];
    if (sum < target) l++;
    else r--;
  }
  return [];
};
// @lc code=end

// TEST:
const assert = require('assert');

const sorted = (arr) => arr.slice().sort((a, b) => a - b);
assert.deepStrictEqual(sorted(twoSum([3, 9, 12, 15], 18)), [3, 15]);
assert.deepStrictEqual(sorted(twoSum([8, 21, 27, 34, 52, 66], 61)), [27, 34]);
assert.deepStrictEqual(sorted(twoSum([1, 2], 3)), [1, 2]);
// pair uses extremes
assert.deepStrictEqual(sorted(twoSum([1, 3, 5, 7], 8)), [1, 7]);
// pair in the middle
assert.deepStrictEqual(sorted(twoSum([1, 2, 4, 8, 16], 12)), [4, 8]);
// no valid pair (test expects empty or nothing specified); check not found path
assert.deepStrictEqual(twoSum([1, 2, 3], 10), []);

console.log('All tests passed!');
console.log('twoSum([3,9,12,15], 18) =', JSON.stringify(sorted(twoSum([3, 9, 12, 15], 18))));
