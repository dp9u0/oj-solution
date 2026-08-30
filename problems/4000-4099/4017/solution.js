/*
 * @lc app=leetcode id=4017 lang=javascript
 *
 * [4017] Peaks in Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var countOfPeaks = function(nums, queries) {
  const n = nums.length;

  // --- Fenwick tree over peak indicators (array index a -> fenwick index a+1) ---
  const fen = new Int32Array(n + 1);
  const fenAdd = (i, d) => { for (; i <= n; i += i & -i) fen[i] += d; };
  const fenSum = (i) => { let s = 0; for (; i > 0; i -= i & -i) s += fen[i]; return s; };
  // smallest fenwick index with prefix count >= c (c >= 1), via binary lifting
  const fenKth = (c) => {
    let pos = 0, rem = c;
    for (let pw = 1 << 17; pw > 0; pw >>= 1) {
      if (pos + pw <= n && fen[pos + pw] < rem) { pos += pw; rem -= fen[pos]; }
    }
    return pos + 1;
  };
  const prevPeak = (k) => { // largest peak index < k, or -1
    const c = fenSum(k);
    return c === 0 ? -1 : fenKth(c) - 1;
  };
  const nextPeak = (k) => { // smallest peak index > k, or -1
    const c = fenSum(k + 1);
    return c === fenSum(n) ? -1 : fenKth(c + 1) - 1;
  };

  // --- Segment tree: range assign, range sum, range max ---
  const sm = new Float64Array(4 * n);
  const mx = new Float64Array(4 * n);
  const lz = new Float64Array(4 * n).fill(-1); // -1 = no pending assign
  const pull = (node) => {
    sm[node] = sm[node * 2] + sm[node * 2 + 1];
    mx[node] = Math.max(mx[node * 2], mx[node * 2 + 1]);
  };
  const applyAt = (node, len, v) => { sm[node] = v * len; mx[node] = v; lz[node] = v; };
  const pushDown = (node, lo, mid, hi) => {
    if (lz[node] !== -1) {
      applyAt(node * 2, mid - lo + 1, lz[node]);
      applyAt(node * 2 + 1, hi - mid, lz[node]);
      lz[node] = -1;
    }
  };
  const build = (node, lo, hi) => {
    if (lo === hi) { sm[node] = mx[node] = P[lo]; return; }
    const mid = (lo + hi) >> 1;
    build(node * 2, lo, mid);
    build(node * 2 + 1, mid + 1, hi);
    pull(node);
  };
  const assign = (node, lo, hi, l, r, v) => {
    if (r < lo || hi < l) return;
    if (l <= lo && hi <= r) { applyAt(node, hi - lo + 1, v); return; }
    const mid = (lo + hi) >> 1;
    pushDown(node, lo, mid, hi);
    assign(node * 2, lo, mid, l, r, v);
    assign(node * 2 + 1, mid + 1, hi, l, r, v);
    pull(node);
  };
  const querySum = (node, lo, hi, l, r) => {
    if (r < lo || hi < l) return 0;
    if (l <= lo && hi <= r) return sm[node];
    const mid = (lo + hi) >> 1;
    pushDown(node, lo, mid, hi);
    return querySum(node * 2, lo, mid, l, r) + querySum(node * 2 + 1, mid + 1, hi, l, r);
  };
  // leftmost index in [l, n-1] with P >= x (P is non-decreasing), or -1
  const findFirst = (node, lo, hi, l, x) => {
    if (hi < l || mx[node] < x) return -1;
    if (lo === hi) return lo;
    const mid = (lo + hi) >> 1;
    pushDown(node, lo, mid, hi);
    const res = findFirst(node * 2, lo, mid, l, x);
    if (res !== -1) return res;
    return findFirst(node * 2 + 1, mid + 1, hi, l, x);
  };

  // P[j] = largest peak index < j (0 = none); 0 is never a peak so it works as sentinel
  const P = new Int32Array(n);
  const isPeakArr = new Uint8Array(n);
  const isPeak = (k) => k > 0 && k < n - 1 && nums[k] > nums[k - 1] && nums[k] > nums[k + 1];
  let last = 0;
  for (let j = 0; j < n; j++) {
    P[j] = last;
    if (isPeak(j)) { isPeakArr[j] = 1; fenAdd(j + 1, 1); last = j; }
  }
  build(1, 0, n - 1);

  const ans = [];
  for (const q of queries) {
    if (q[0] === 1) {
      // answer = sum_{j in [j*, r]} (P[j] - l), j* = first j >= l with P[j] >= l + 1
      const l = q[1], r = q[2];
      const j = findFirst(1, 0, n - 1, l, l + 1);
      if (j === -1 || j > r) ans.push(0);
      else ans.push(querySum(1, 0, n - 1, j, r) - (r - j + 1) * l);
    } else {
      const idx = q[1];
      nums[idx] = q[2];
      for (let k = Math.max(1, idx - 1); k <= Math.min(n - 2, idx + 1); k++) {
        const np = isPeak(k) ? 1 : 0;
        if (np === isPeakArr[k]) continue;
        const nxt = nextPeak(k);
        const hiIdx = nxt === -1 ? n - 1 : nxt; // P[nxt] also flips from prev to k
        if (np) {
          fenAdd(k + 1, 1);
          if (k + 1 <= hiIdx) assign(1, 0, n - 1, k + 1, hiIdx, k);
        } else {
          const prv = prevPeak(k);
          fenAdd(k + 1, -1);
          if (k + 1 <= hiIdx) assign(1, 0, n - 1, k + 1, hiIdx, prv === -1 ? 0 : prv);
        }
        isPeakArr[k] = np;
      }
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(countOfPeaks([1,3,2,4], [[1,0,3],[2,1,1],[1,0,3]]).join(',') === '2,0');
console.log(countOfPeaks([9,8,9,8], [[1,1,3],[2,2,1],[1,0,2]]).join(',') === '1,0');
console.log(countOfPeaks([3,6,2,7,1], [[1,1,3],[2,3,0],[1,0,4]]).join(',') === '0,3');
console.log(countOfPeaks([3,2,3,2,3], [[1,0,4],[2,1,3],[1,0,4],[2,3,2],[1,0,4]]).join(',') === '4,0,0');
console.log(countOfPeaks([1,2,3,4,5], [[1,0,4],[1,0,2],[2,2,5],[1,0,4],[1,2,4]]).join(',') === '0,0,4,0');
console.log(countOfPeaks([5,4,3,2,1], [[1,0,4],[2,2,9],[1,0,4],[2,4,0],[1,0,4]]).join(',') === '0,4,4');
console.log(countOfPeaks([4,1,4,1,4], [[1,0,4],[1,1,3],[2,0,0],[1,0,4],[2,4,5],[1,0,4]]).join(',') === '4,1,4,4');
