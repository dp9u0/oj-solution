/*
 * @lc app=leetcode.cn id=LCR 100 lang=javascript
 *
 * [LCR 100] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  // 自底向上 DP,原地修改,避免额外空间
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      // 下一行同列与右邻列取小值,累加到当前格
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};
// @lc code=end

// TEST:
const assert = require('assert');

// case 1: 官方示例 1
assert.strictEqual(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]), 11, 'case 1');

// case 2: 单行单元素(负数)
assert.strictEqual(minimumTotal([[-10]]), -10, 'case 2');

// case 3: 两行,选较小分支
assert.strictEqual(minimumTotal([[-1], [2, 3]]), 1, 'case 3');

// case 4: 贪心陷阱,中间经 2 再走 4 最小
assert.strictEqual(minimumTotal([[1], [2, 3], [100, 4, 5]]), 7, 'case 4'); // 1+2+4=7

// case 5: 含负数的较大三角,全负取最小路径
assert.strictEqual(minimumTotal([[-1], [-2, -3], [-4, -5, -6]]), -10, 'case 5'); // -1 + -3 + -6 = -10
console.log('All test cases passed!');
