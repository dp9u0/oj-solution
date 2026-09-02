/*
 * @lc app=leetcode.cn id=LCR 059 lang=javascript
 *
 * [LCR 059] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.heap = []; // min-heap of the k largest elements
  for (const num of nums) {
    this.add(num);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  const h = this.heap;
  h.push(val);
  // sift up
  let i = h.length - 1;
  while (i > 0) {
    const p = (i - 1) >> 1;
    if (h[p] <= h[i]) break;
    [h[p], h[i]] = [h[i], h[p]];
    i = p;
  }
  // keep only k elements: pop the min if too many
  if (h.length > this.k) {
    h[0] = h[h.length - 1];
    h.pop();
    // sift down
    let j = 0;
    const n = h.length;
    for (;;) {
      const l = 2 * j + 1;
      const r = 2 * j + 2;
      let smallest = j;
      if (l < n && h[l] < h[smallest]) smallest = l;
      if (r < n && h[r] < h[smallest]) smallest = r;
      if (smallest === j) break;
      [h[j], h[smallest]] = [h[smallest], h[j]];
      j = smallest;
    }
  }
  return h[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

// TEST:
const assert = require('assert');

const run = (ops, vals) => {
  let obj;
  const out = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'KthLargest') {
      obj = new KthLargest(vals[i][0], vals[i][1]);
      out.push(null);
    } else {
      out.push(obj.add(vals[i][0]));
    }
  }
  return out;
};

assert.deepStrictEqual(
  run(['KthLargest', 'add', 'add', 'add', 'add', 'add'], [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]),
  [null, 4, 5, 5, 8, 8]
);
// nums already bigger than k
assert.deepStrictEqual(
  run(['KthLargest', 'add'], [[2, [7, 1, 9, 4, 5]], [8]]),
  [null, 8]
);
// negatives; k=1 keeps the max so far
assert.deepStrictEqual(
  run(['KthLargest', 'add', 'add'], [[1, [-1, -3, -5]], [-7], [4]]),
  [null, -1, 4]
);
// k = length of initial nums; add too small to enter top-k
assert.deepStrictEqual(
  run(['KthLargest', 'add'], [[3, [10, 20, 30]], [5]]),
  [null, 10]
);
// only negative values stream
assert.deepStrictEqual(
  run(['KthLargest', 'add', 'add'], [[2, [-10, -20]], [-30], [-5]]),
  [null, -20, -10]
);

console.log('All tests passed!');
