/*
 * @lc app=leetcode.cn id=LCP 39 lang=javascript
 *
 * [LCP 39] 无人机方阵
 */

// @lc code=start
/**
 * @param {number[][]} source
 * @param {number[][]} target
 * @return {number}
 */
var minimumSwitchingTimes = function(source, target) {
  const cnt = new Map()
  let ans = 0
  for (const row of source) {
    for (const color of row) {
      cnt.set(color, (cnt.get(color) || 0) + 1)
    }
  }
  for (const row of target) {
    for (const color of row) {
      if (cnt.get(color) > 0) {
        cnt.set(color, cnt.get(color) - 1)
      } else {
        ans++
      }
    }
  }
  return ans
};
// @lc code=end

// TEST: 官方示例
console.log(minimumSwitchingTimes([[1, 3], [5, 4]], [[3, 1], [6, 5]]) === 1)
console.log(minimumSwitchingTimes([[1, 2, 3], [3, 4, 5]], [[1, 3, 5], [2, 3, 4]]) === 0)
// TEST: 完全相同的图案
console.log(minimumSwitchingTimes([[1, 2], [3, 4]], [[1, 2], [3, 4]]) === 0)
// TEST: 全部都要切换
console.log(minimumSwitchingTimes([[1, 1], [1, 1]], [[2, 2], [2, 2]]) === 4)
// TEST: 部分相同
console.log(minimumSwitchingTimes([[1, 2], [3, 4]], [[1, 2], [5, 6]]) === 2)
// TEST: 单元素
console.log(minimumSwitchingTimes([[1]], [[2]]) === 1)
