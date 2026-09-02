/*
 * @lc app=leetcode.cn id=LCR 075 lang=javascript
 *
 * [LCR 075] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const cnt = new Map();
  for (const v of arr1) cnt.set(v, (cnt.get(v) || 0) + 1);
  const res = [];
  // arr2 order
  for (const v of arr2) {
    const c = cnt.get(v) || 0;
    for (let i = 0; i < c; i++) res.push(v);
    cnt.delete(v);
  }
  // remaining ascending
  const rest = [...cnt.keys()].sort((a, b) => a - b);
  for (const v of rest) {
    const c = cnt.get(v);
    for (let i = 0; i < c; i++) res.push(v);
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]), [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]);
assert.deepStrictEqual(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]), [22, 28, 8, 6, 17, 44]);
assert.deepStrictEqual(relativeSortArray([1], [1]), [1]);
assert.deepStrictEqual(relativeSortArray([0, 0, 0], [0]), [0, 0, 0]);

console.log('All tests passed!');
