/*
 * @lc app=leetcode.cn id=LCR 060 lang=javascript
 *
 * [LCR 060] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const freq = new Map();
  for (const num of nums) freq.set(num, (freq.get(num) || 0) + 1);

  // min-heap of [freq, value] keeping top k
  const heap = [];
  const push = (item) => {
    heap.push(item);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
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
        if (l < L && heap[l][0] < heap[s][0]) s = l;
        if (r < L && heap[r][0] < heap[s][0]) s = r;
        if (s === j) break;
        [heap[j], heap[s]] = [heap[s], heap[j]];
        j = s;
      }
    }
    return top;
  };

  for (const [value, f] of freq) {
    push([f, value]);
    if (heap.length > k) pop();
  }
  return heap.map(item => item[1]);
};
// @lc code=end

// TEST:
const assert = require('assert');

const sorted = (a) => a.slice().sort((x, y) => x - y);
assert.deepStrictEqual(sorted(topKFrequent([1, 1, 1, 2, 2, 3], 2)), [1, 2]);
assert.deepStrictEqual(sorted(topKFrequent([1], 1)), [1]);
assert.deepStrictEqual(sorted(topKFrequent([1, 2, 2, 3, 3, 3], 2)), [2, 3]);
assert.deepStrictEqual(sorted(topKFrequent([4, 4, 4, 4], 1)), [4]);
assert.deepStrictEqual(sorted(topKFrequent([1, 2, 3, 4, 5], 5)), [1, 2, 3, 4, 5]);

console.log('All tests passed!');
console.log('topKFrequent([1,1,1,2,2,3],2) =', JSON.stringify(sorted(topKFrequent([1, 1, 1, 2, 2, 3], 2))));
