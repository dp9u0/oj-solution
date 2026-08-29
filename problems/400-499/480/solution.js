/*
 * @lc app=leetcode id=480 lang=javascript
 *
 * [480] Sliding Window Median
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  const n = nums.length;
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  const C = sorted.length;
  const idx = new Map();
  for (let i = 0; i < C; i++) idx.set(sorted[i], i + 1);

  const tree = Array(C + 1).fill(0);
  const add = (i, d) => {
    for (; i <= C; i += i & -i) tree[i] += d;
  };
  let LOG = 1;
  while ((LOG << 1) <= C) LOG <<= 1;
  const kth = (rank) => {
    let pos = 0;
    let rem = rank;
    for (let pw = LOG; pw > 0; pw >>= 1) {
      if (pos + pw <= C && tree[pos + pw] < rem) {
        pos += pw;
        rem -= tree[pos];
      }
    }
    return sorted[pos];
  };

  const res = [];
  for (let s = 0; s + k <= n; s++) {
    if (s === 0) {
      for (let j = 0; j < k; j++) add(idx.get(nums[j]), 1);
    } else {
      add(idx.get(nums[s - 1]), -1);
      add(idx.get(nums[s + k - 1]), 1);
    }
    if (k % 2 === 1) {
      res.push(kth((k + 1) >> 1));
    } else {
      res.push((kth(k >> 1) + kth((k >> 1) + 1)) / 2);
    }
  }
  return res;
};
// @lc code-end

// TEST:
const eq = (a, b) => a.length === b.length && a.every((v, i) => Math.abs(v - b[i]) < 1e-9);
console.log(eq(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3), [1, -1, -1, 3, 5, 6]));
console.log(eq(medianSlidingWindow([1, 2, 3, 4, 2, 3, 1, 4, 2], 3), [2, 3, 3, 3, 2, 3, 2]));
console.log(eq(medianSlidingWindow([2, 2], 2), [2]));
console.log(eq(medianSlidingWindow([1, 2], 2), [1.5]));
console.log(eq(medianSlidingWindow([7], 1), [7]));
console.log(eq(medianSlidingWindow([2147483647, -2147483648], 2), [-0.5]));
console.log(eq(medianSlidingWindow([5, 5, 5, 5], 4), [5]));
