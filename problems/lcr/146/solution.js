/*
 * @lc app=leetcode.cn id=LCR 146 lang=javascript
 *
 * [LCR 146] 螺旋遍历二维数组
 */

// @lc code=start
/**
 * @param {number[][]} array
 * @return {number[]}
 */
var spiralArray = function(array) {
  if (!array.length || !array[0].length) return [];
  const res = [];
  let top = 0;
  let bottom = array.length - 1;
  let left = 0;
  let right = array[0].length - 1;

  while (top <= bottom && left <= right) {
    // right across top row
    for (let c = left; c <= right; c++) res.push(array[top][c]);
    top++;
    // down along right col
    for (let r = top; r <= bottom; r++) res.push(array[r][right]);
    right--;
    // left across bottom row
    if (top <= bottom) {
      for (let c = right; c >= left; c--) res.push(array[bottom][c]);
      bottom--;
    }
    // up along left col
    if (left <= right) {
      for (let r = bottom; r >= top; r--) res.push(array[r][left]);
      left++;
    }
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(spiralArray([[1, 2, 3], [8, 9, 4], [7, 6, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assert.deepStrictEqual(spiralArray([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
// empty
assert.deepStrictEqual(spiralArray([]), []);
assert.deepStrictEqual(spiralArray([[]]), []);
// single row
assert.deepStrictEqual(spiralArray([[1, 2, 3]]), [1, 2, 3]);
// single column
assert.deepStrictEqual(spiralArray([[1], [2], [3]]), [1, 2, 3]);
// 2x3
assert.deepStrictEqual(spiralArray([[1, 2, 3], [6, 5, 4]]), [1, 2, 3, 4, 5, 6]);
// 3x2
assert.deepStrictEqual(spiralArray([[1, 2], [6, 3], [5, 4]]), [1, 2, 3, 4, 5, 6]);
// single cell
assert.deepStrictEqual(spiralArray([[7]]), [7]);

console.log('All tests passed!');
console.log('spiralArray([[1,2,3],[8,9,4],[7,6,5]]) =', JSON.stringify(spiralArray([[1, 2, 3], [8, 9, 4], [7, 6, 5]])));
