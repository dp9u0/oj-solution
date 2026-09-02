/*
 * @lc app=leetcode.cn id=LCP 24 lang=javascript
 *
 * [LCP 24] 数字游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numsGame = function(nums) {
  const MOD = 1000000007;
  const n = nums.length;
  const res = new Array(n);

  // b[i] = nums[i] - i; want min over median t of sum |b[j]-t| for each prefix
  const low = [];   // max-heap of lower half (store negatives)
  const high = [];  // min-heap of upper half
  let sumLow = 0;
  let sumHigh = 0;

  const minPush = (heap, v) => {
    heap.push(v);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const minPop = (heap) => {
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

  for (let i = 0; i < n; i++) {
    const b = nums[i] - i;
    // insert into the correct side to keep ordering (all low <= all high)
    if (high.length === 0 || b <= high[0]) {
      minPush(low, -b);
      sumLow += b;
    } else {
      minPush(high, b);
      sumHigh += b;
    }
    // rebalance sizes: low.size = high.size or high.size + 1
    if (low.length > high.length + 1) {
      const moved = -minPop(low); // largest of low -> high
      sumLow -= moved;
      minPush(high, moved);
      sumHigh += moved;
    } else if (high.length > low.length) {
      const moved = minPop(high); // smallest of high -> low
      sumHigh -= moved;
      minPush(low, -moved);
      sumLow += moved;
    }
    // t = low.top is a valid median (low holds ceil(count/2) smallest)
    const t = -low[0];
    const cost = (t * low.length - sumLow) + (sumHigh - t * high.length);
    res[i] = cost % MOD;
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(numsGame([3, 4, 5, 1, 6, 7]), [0, 0, 0, 5, 6, 7]);
assert.deepStrictEqual(numsGame([1, 2, 3, 4, 5]), [0, 0, 0, 0, 0]);
assert.deepStrictEqual(numsGame([1, 1, 1, 2, 3, 4]), [0, 1, 2, 3, 3, 3]);
assert.deepStrictEqual(numsGame([1]), [0]);
// decreasing
assert.deepStrictEqual(numsGame([5, 4, 3]), [0, 2, 4]);

console.log('All tests passed!');
console.log('numsGame([3,4,5,1,6,7]) =', JSON.stringify(numsGame([3, 4, 5, 1, 6, 7])));
