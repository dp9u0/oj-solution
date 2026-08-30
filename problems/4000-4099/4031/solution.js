/*
 * @lc app=leetcode id=4031 lang=javascript
 *
 * [4031] Find All Numbers Disappeared in an Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findDisappearedNumbers = function(nums, lower, upper) {
  const present = new Set(nums);
  const res = [];
  let start = -1;
  for (let v = lower; v <= upper; v++) {
    if (present.has(v)) {
      if (start !== -1) {
        res.push([start, v - 1]);
        start = -1;
      }
    } else if (start === -1) {
      start = v;
    }
  }
  if (start !== -1) {
    res.push([start, upper]);
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');
assert.deepStrictEqual(findDisappearedNumbers([3, 9, 7], 1, 12), [[1, 2], [4, 6], [8, 8], [10, 12]]);
assert.deepStrictEqual(findDisappearedNumbers([1, 1], 5, 7), [[5, 7]]);
assert.deepStrictEqual(findDisappearedNumbers([2, 3, 5], 2, 3), []);
assert.deepStrictEqual(findDisappearedNumbers([5], 5, 5), []);
assert.deepStrictEqual(findDisappearedNumbers([], 1, 5), [[1, 5]]);
assert.deepStrictEqual(findDisappearedNumbers([1, 2, 3, 4, 5], 1, 5), []);
assert.deepStrictEqual(findDisappearedNumbers([2, 4], 1, 6), [[1, 1], [3, 3], [5, 6]]);
console.log('All tests passed');
