/*
 * @lc app=leetcode id=3505 lang=javascript
 *
 * [3505] Minimum Operations to Make Elements Within K Subarrays Equal
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, x, k) {
  const n = nums.length;

  // ---- coordinate compression ----
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  const C = sorted.length;
  const idxOf = new Map();
  for (let i = 0; i < C; i++) idxOf.set(sorted[i], i + 1);

  // ---- two fenwick trees: count & weighted sum ----
  const cnt = Array(C + 1).fill(0);
  const sum = Array(C + 1).fill(0);
  const add = (i, dv, ds) => {
    for (; i <= C; i += i & -i) {
      cnt[i] += dv;
      sum[i] += ds;
    }
  };
  const queryCnt = (i) => {
    let r = 0;
    for (; i > 0; i -= i & -i) r += cnt[i];
    return r;
  };
  const querySum = (i) => {
    let r = 0;
    for (; i > 0; i -= i & -i) r += sum[i];
    return r;
  };

  let LOG = 1;
  while ((LOG << 1) <= C) LOG <<= 1;

  const kthValue = (rank) => {
    let pos = 0;
    let rem = rank;
    for (let pw = LOG; pw > 0; pw >>= 1) {
      if (pos + pw <= C && cnt[pos + pw] < rem) {
        pos += pw;
        rem -= cnt[pos];
      }
    }
    return sorted[pos];
  };

  let totalCnt = 0;
  let totalSum = 0;
  const addVal = (v) => {
    add(idxOf.get(v), 1, v);
    totalCnt++;
    totalSum += v;
  };
  const removeVal = (v) => {
    add(idxOf.get(v), -1, -v);
    totalCnt--;
    totalSum -= v;
  };
  const windowCost = () => {
    const m = totalCnt;
    const half = (m + 1) >> 1;
    const v = kthValue(half);
    const iv = idxOf.get(v);
    const cntLess = queryCnt(iv - 1);
    const sumLess = querySum(iv - 1);
    const sumLow = sumLess + (half - cntLess) * v;
    return totalSum - 2 * sumLow + v * (2 * half - m);
  };

  // ---- stage 1: cost of every window via sliding median ----
  const W = n - x + 1;
  const c = Array(W);
  for (let j = 0; j < x; j++) addVal(nums[j]);
  c[0] = windowCost();
  for (let s = 1; s < W; s++) {
    removeVal(nums[s - 1]);
    addVal(nums[s + x - 1]);
    c[s] = windowCost();
  }

  // ---- stage 2: partition dp ----
  let prev = Array(n + 1).fill(0);
  for (let j = 1; j <= k; j++) {
    const cur = Array(n + 1).fill(Infinity);
    for (let i = j * x; i <= n; i++) {
      cur[i] = Math.min(cur[i - 1], prev[i - x] + c[i - x]);
    }
    prev = cur;
  }
  return prev[n];
};
// @lc code=end

// TEST:
console.log(minOperations([5, -2, 1, 3, 7, 3, 6, 4, -1], 3, 2) === 8);
console.log(minOperations([9, -2, -2, -2, 1, 5], 2, 2) === 3);
console.log(minOperations([1, 2, 3], 2, 1) === 1);
console.log(minOperations([0, 0, 0, 0], 2, 2) === 0);
console.log(minOperations([1, 10, 1, 10, 1, 10], 2, 3) === 27);
console.log(minOperations([5, 5, 5, 1, 1, 1], 3, 2) === 0);
console.log(minOperations([3, 1, 2, 4], 2, 2) === 4);

// brute-force cross-check on small cases
function bruteForce(nums, x, k) {
  const n = nums.length;
  const medCost = (arr) => {
    const s = [...arr].sort((a, b) => a - b);
    const v = s[(s.length + 1 >> 1) - 1];
    let t = 0;
    for (const u of s) t += Math.abs(u - v);
    return t;
  };
  let best = Infinity;
  const rec = (start, left, cost) => {
    if (left === 0) {
      best = Math.min(best, cost);
      return;
    }
    for (let s = start; s + x + (left - 1) * x <= n; s++) {
      rec(s + x, left - 1, cost + medCost(nums.slice(s, s + x)));
    }
  };
  rec(0, k, 0);
  return best;
}
let seed = 12345;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 21 - 10;
let allOk = true;
for (let t = 0; t < 200; t++) {
  const len = 2 + t % 8;
  const arr = Array.from({ length: len }, rnd);
  const xx = 2 + t % Math.max(1, len >> 1);
  if (xx > len) continue;
  const kk = 1 + t % Math.max(1, Math.floor(len / xx));
  if (kk * xx > len) continue;
  const a = minOperations(arr, xx, kk);
  const b = bruteForce(arr, xx, kk);
  if (a !== b) {
    allOk = false;
    console.log(`MISMATCH arr=${JSON.stringify(arr)} x=${xx} k=${kk} fast=${a} brute=${b}`);
  }
}
console.log(allOk);
