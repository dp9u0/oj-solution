/*
 * @lc app=leetcode id=3957 lang=javascript
 *
 * [3957] Maximum Sum of M Non-Overlapping Subarrays II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var maximumSum = function(nums, m, l, r) {
  const n = nums.length;
  const pre = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + nums[i];

  // best single segment of length in [l, r]: sliding min of pre[t]
  let bestSingle = -Infinity;
  const dq = [];
  for (let i = 0; i <= n; i++) {
    while (dq.length && dq[0] < i - r) dq.shift();
    if (i >= l) {
      while (dq.length && pre[dq[dq.length - 1]] >= pre[i - l]) dq.pop();
      dq.push(i - l);
      while (dq.length && dq[0] < i - r) dq.shift();
      const s = pre[i] - pre[dq[0]];
      if (s > bestSingle) bestSingle = s;
    }
  }

  // aliens trick: g(lam) = max(sum - lam*count), with minimal count among optima
  const evalLam = (lam) => {
    // dp over prefix; dp[i] = [value, minCount]
    const val = Array(n + 1).fill(0);
    const cnt = Array(n + 1).fill(0);
    // deque of start indices t, ordered by (val[t]-pre[t] desc, cnt asc)
    const dqIdx = [];
    const dqVal = [];
    const dqCnt = [];
    for (let i = 1; i <= n; i++) {
      const t = i - l;
      if (t >= 0) {
        const v = val[t] - pre[t];
        const c = cnt[t];
        while (dqIdx.length) {
          const k = dqIdx.length - 1;
          if (dqVal[k] < v || (dqVal[k] === v && dqCnt[k] >= c)) {
            dqIdx.pop(); dqVal.pop(); dqCnt.pop();
          } else break;
        }
        dqIdx.push(t); dqVal.push(v); dqCnt.push(c);
      }
      while (dqIdx.length && dqIdx[0] < i - r) { dqIdx.shift(); dqVal.shift(); dqCnt.shift(); }
      let v = val[i - 1];
      let c = cnt[i - 1];
      if (dqIdx.length) {
        const tv = dqVal[0] + pre[i] - lam;
        const tc = dqCnt[0] + 1;
        if (tv > v || (tv === v && tc < c)) { v = tv; c = tc; }
      }
      val[i] = v;
      cnt[i] = c;
    }
    return [val[n], cnt[n]];
  };

  // bestSingle bounds lambda range; find smallest lam >= 0 with c(lam) <= m
  let lo = 0;
  let hi = Math.max(1, bestSingle + 1);
  if (evalLam(0)[1] <= m) {
    hi = 0;
  } else {
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (evalLam(mid)[1] <= m) hi = mid;
      else lo = mid + 1;
    }
  }
  const lam = lo;
  let ans0 = evalLam(lam)[0] + lam * m;
  if (lam > 0) {
    const h2 = evalLam(lam - 1)[0] + (lam - 1) * m;
    if (h2 < ans0) ans0 = h2;
  }
  return ans0 > 0 ? ans0 : bestSingle;
};
// @lc code-end

// exact reference dp for fuzz
function exactDP(nums, m, l, r) {
  const n = nums.length;
  const pre = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + nums[i];
  const mCap = Math.min(m, Math.floor(n / l));
  let prev = Array(n + 1).fill(0);
  let ans = -Infinity;
  for (let j = 1; j <= mCap; j++) {
    const cur = Array(n + 1).fill(-Infinity);
    for (let i = l; i <= n; i++) {
      let best = cur[i - 1];
      for (let t = Math.max(0, i - r); t <= i - l; t++) {
        if (prev[t] === -Infinity) continue;
        const v = prev[t] + pre[i] - pre[t];
        if (v > best) best = v;
      }
      cur[i] = best;
      if (best > ans) ans = best;
    }
    prev = cur;
  }
  return ans;
}

// TEST:
console.log(maximumSum([4, 1, -5, 2], 2, 1, 3) === 7);
console.log(maximumSum([1, 0, 3, 4], 2, 1, 2) === 8);
console.log(maximumSum([-1, 7, -4], 1, 2, 3) === 6);
console.log(maximumSum([-3, -4, -1], 2, 1, 2) === -1);
console.log(maximumSum([5], 1, 1, 1) === 5);
console.log(maximumSum([-5], 1, 1, 1) === -5);
console.log(maximumSum([1, -2, 3, -2, 5], 3, 1, 2) === 9);
console.log(maximumSum([2, 2, 2, 2], 2, 2, 2) === 8);

// fuzz vs exact dp
let seed = 88;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 13 - 6;
let ok = true;
for (let t = 0; t < 400; t++) {
  const len = 1 + t % 10;
  const arr = Array.from({ length: len }, rnd);
  const ll = 1 + t % Math.max(1, len);
  const rr = ll + t % Math.max(1, len - ll + 1);
  if (rr > len) continue;
  const mm = 1 + t % Math.max(1, Math.floor(len / ll));
  const a = maximumSum(arr, mm, ll, rr);
  const b = exactDP(arr, mm, ll, rr);
  if (a !== b) { ok = false; console.log('MISMATCH', JSON.stringify(arr), mm, ll, rr, 'fast=' + a, 'exact=' + b); break; }
}
console.log(ok);
// big negative case
console.log(maximumSum(Array(290000).fill(-1), 290000, 1, 3) === -1);
