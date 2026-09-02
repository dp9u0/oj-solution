/*
 * @lc app=leetcode.cn id=LCR 191 lang=javascript
 *
 * [LCR 191] 按规则计算统计结果
 */

// @lc code=start
/**
 * @param {number[]} arrayA
 * @return {number[]}
 */
var statisticalResult = function(arrayA) {
  const n = arrayA.length;
  if (n === 0) return [];
  const res = new Array(n);
  // left products
  res[0] = 1;
  for (let i = 1; i < n; i++) res[i] = res[i - 1] * arrayA[i - 1];
  // multiply by right products
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= arrayA[i];
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(statisticalResult([2, 4, 6, 8, 10]), [1920, 960, 640, 480, 384]);
assert.deepStrictEqual(statisticalResult([1, 2, 3]), [6, 3, 2]);
assert.deepStrictEqual(statisticalResult([1]), [1]);
assert.deepStrictEqual(statisticalResult([0, 1, 2]), [2, 0, 0]);
assert.deepStrictEqual(statisticalResult([1, 0, 0]), [0, 0, 0]);
assert.deepStrictEqual(statisticalResult([]), []);

console.log('All tests passed!');
console.log('statisticalResult([2,4,6,8,10]) =', JSON.stringify(statisticalResult([2, 4, 6, 8, 10])));
