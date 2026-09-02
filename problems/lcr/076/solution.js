/*
 * @lc app=leetcode.cn id=LCR 076 lang=javascript
 *
 * [LCR 076] 数组中的第 K 个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const heap = []; // min-heap
  const push = (v) => {
    heap.push(v);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let j = 0;
      const L = heap.length;
      for (;;) {
        const l = 2 * j + 1;
        const r = 2 * j + 2;
        let s = j;
        if (l < L && heap[l] < heap[s]) s = l;
        if (r < L && heap[r] < heap[s]) s = r;
        if (s === j) break;
        [heap[j], heap[s]] = [heap[s], heap[j]];
        j = s;
      }
    }
    return top;
  };
  for (const v of nums) {
    push(v);
    if (heap.length > k) pop();
  }
  return heap[0];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5);
assert.strictEqual(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);
assert.strictEqual(findKthLargest([1], 1), 1);
assert.strictEqual(findKthLargest([5, 5, 5], 1), 5);
assert.strictEqual(findKthLargest([5, 5, 5], 3), 5);
assert.strictEqual(findKthLargest([1, 2, 3, 4], 1), 4);
assert.strictEqual(findKthLargest([1, 2, 3, 4], 4), 1);

console.log('All tests passed!');
