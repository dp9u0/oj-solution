/*
 * @lc app=leetcode.cn id=LCR 115 lang=javascript
 *
 * [LCR 115] 序列重建
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
function sequenceReconstruction(nums, sequences) {
  const n = nums.length
  const inDegree = new Array(n + 1).fill(0)
  // graph[i] 存 i 的所有后继 (建边去重,避免入度重复累加)
  const graph = Array.from({ length: n + 1 }, () => new Set())

  for (const seq of sequences) {
    for (let i = 0; i < seq.length - 1; i++) {
      const a = seq[i]
      const b = seq[i + 1]
      if (!graph[a].has(b)) {
        graph[a].add(b)
        inDegree[b]++
      }
    }
  }

  // 队列:当前入度为 0 的节点
  const queue = []
  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0) queue.push(i)
  }

  // 唯一拓扑序的长度必须等于 n (覆盖全部节点),且每步唯一候选等于 nums 对应元素
  let idx = 0
  while (queue.length > 0) {
    if (queue.length !== 1) return false // 多个候选 → 拓扑序不唯一
    const cur = queue.shift()
    if (cur !== nums[idx]) return false // 拓扑序与 nums 不一致
    idx++
    for (const nxt of graph[cur]) {
      inDegree[nxt]--
      if (inDegree[nxt] === 0) queue.push(nxt)
    }
  }

  return idx === n
}
// @lc code=end

// TEST:
const assert = require('assert')

// case 1: 示例 1 — 存在两个最短超序列
assert.strictEqual(sequenceReconstruction([1, 2, 3], [[1, 2], [1, 3]]), false, 'case 1')

// case 2: 示例 2 — nums 不是最短超序列
assert.strictEqual(sequenceReconstruction([1, 2, 3], [[1, 2]]), false, 'case 2')

// case 3: 示例 3 — 唯一最短超序列
assert.strictEqual(sequenceReconstruction([1, 2, 3], [[1, 2], [1, 3], [2, 3]]), true, 'case 3')

// case 4: 单个元素
assert.strictEqual(sequenceReconstruction([1], [[1]]), true, 'case 4')

// case 5: 缺少约束导致拓扑序不唯一 (1 无前驱约束时,2 与 3 可互换)
assert.strictEqual(sequenceReconstruction([1, 2, 3], [[1, 2], [3, 2]]), false, 'case 5')

// case 6: 全序约束唯一确定
assert.strictEqual(sequenceReconstruction([4, 1, 5, 2, 6, 3], [[5, 2, 6, 3], [4, 1, 5, 2]]), true, 'case 6')

// case 7: 重边去重 — 同一约束重复给出也不影响唯一性
assert.strictEqual(sequenceReconstruction([1, 2, 3], [[1, 2], [1, 2, 3], [2, 3]]), true, 'case 7')

console.log('All test cases passed!')

