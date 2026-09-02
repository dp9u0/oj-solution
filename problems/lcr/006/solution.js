/*
 * @lc app=leetcode.cn id=LCR 006 lang=javascript
 *
 * [LCR 006] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l, r];
    if (sum < target) l++;
    else r--;
  }
  return [];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(twoSum([1, 2, 4, 6, 10], 8), [1, 3]);
assert.deepStrictEqual(twoSum([2, 3, 4], 6), [0, 2]);
assert.deepStrictEqual(twoSum([-1, 0], -1), [0, 1]);
// 0-based indices
assert.deepStrictEqual(twoSum([1, 2, 3, 4], 5), [0, 3]);
assert.deepStrictEqual(twoSum([0, 0, 3, 4], 0), [0, 1]);
assert.deepStrictEqual(twoSum([-10, -3, 1, 8], -9), [0, 2]);

console.log('All tests passed!');
console.log('twoSum([1,2,4,6,10], 8) =', JSON.stringify(twoSum([1, 2, 4, 6, 10], 8)));
