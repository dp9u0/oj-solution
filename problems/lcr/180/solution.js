/*
 * @lc app=leetcode.cn id=LCR 180 lang=javascript
 *
 * [LCR 180] 文件组合
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number[][]}
 */
var fileCombination = function (target) {
  const res = []
  let l = 1
  let r = 2
  while (l < r) {
    const sum = ((l + r) * (r - l + 1)) / 2
    if (sum === target) {
      const cur = []
      for (let i = l; i <= r; i++) cur.push(i)
      res.push(cur)
      l++
    } else if (sum < target) {
      r++
    } else {
      l++
    }
  }
  return res
}
// @lc code=end

// TEST:
const assert = require('assert')
assert.deepStrictEqual(fileCombination(12), [[3, 4, 5]])
assert.deepStrictEqual(fileCombination(18), [[3, 4, 5, 6], [5, 6, 7]])
assert.deepStrictEqual(fileCombination(9), [[2, 3, 4], [4, 5]])
assert.deepStrictEqual(fileCombination(1), [])
assert.deepStrictEqual(fileCombination(15), [[1, 2, 3, 4, 5], [4, 5, 6], [7, 8]])
assert.deepStrictEqual(fileCombination(100), [[9, 10, 11, 12, 13, 14, 15, 16], [18, 19, 20, 21, 22]])
console.log('All tests passed!')
