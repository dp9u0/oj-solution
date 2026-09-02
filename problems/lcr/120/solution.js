/*
 * @lc app=leetcode.cn id=LCR 120 lang=javascript
 *
 * [LCR 120] 寻找文件副本
 */

// @lc code=start
/**
 * @param {number[]} documents
 * @return {number}
 */
function findRepeatDocument(documents) {
  for (let i = 0; i < documents.length; i++) {
    while (documents[i] !== i) {
      const val = documents[i]
      if (documents[val] === val) {
        return val
      }
      ;[documents[i], documents[val]] = [documents[val], documents[i]]
    }
  }
  return -1
}
// @lc code=end

// TEST:
const assert = require('assert')

assert.ok([0, 5].includes(findRepeatDocument([2, 5, 3, 0, 5, 0])))
assert.strictEqual(findRepeatDocument([1, 1]), 1)
assert.strictEqual(findRepeatDocument([2, 2, 0]), 2)
assert.strictEqual(findRepeatDocument([0, 1, 2, 3, 4, 4]), 4)
assert.strictEqual(findRepeatDocument([1, 0, 3, 3, 2]), 3)
assert.strictEqual(findRepeatDocument([0, 0, 1]), 0)

console.log('All tests passed!')
