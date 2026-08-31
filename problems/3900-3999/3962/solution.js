/*
 * @lc app=leetcode id=3962 lang=javascript
 *
 * [3962] Maximum Subarray Sum After k Swaps
 */

// @lc code=start
/**
 * For an interval [l, r] (A = inside, B = outside), the greedy swap brings in the
 * t largest elements of B and removes the t smallest of A. Gain is concave in t,
 * optimal t* = largest t with (t-th largest B) > (t-th smallest A).
 *
 * Key facts:
 *   t* = max_r min(#A <= comp[r], #B > comp[r])
 *   Let P[r] = # global elements <= comp[r] (independent of interval), totalB = n - m.
 *   Then #B > comp[r] = totalB - (P[r] - #A <= comp[r]).
 *   With r1 = largest r such that P[r] <= totalB (depends only on m = r-l+1!):
 *     t* = max( #A <= comp[r1], totalB - P[r1+1] + #A <= comp[r1+1] )
 *   Both terms come from 2 Fenwick prefix-count queries on the inside set.
 *
 * Total: O(n^2 log n) with a tiny constant.
 */
var maxSum = function(nums, k) {
  const n = nums.length;
  const comp = [...new Set(nums)].sort((a, b) => a - b);
  const C = comp.length;
  const rank = new Map();
  for (let i = 0; i < C; i++) rank.set(comp[i], i);

  // global counts per rank and prefix counts P[r]
  const gcnt = new Int32Array(C);
  for (let i = 0; i < n; i++) gcnt[rank.get(nums[i])]++;
  const P = new Int32Array(C);
  let acc = 0;
  for (let r = 0; r < C; r++) { acc += gcnt[r]; P[r] = acc; }

  // r1[m] = largest rank r with P[r] <= n - m  (monotone in m)
  const r1m = new Int32Array(n + 1);
  {
    let ptr = C - 1;
    for (let m = 1; m <= n; m++) {
      const totalB = n - m;
      while (ptr >= 0 && P[ptr] > totalB) ptr--;
      r1m[m] = ptr;
    }
  }

  let hiPw = 1;
  while (hiPw <= C) hiPw <<= 1;
  hiPw >>= 1;

  // Fenwick over ranks (0-based rank r -> index r+1)
  const mkFen = () => ({ cnt: new Int32Array(C + 1), sum: new Float64Array(C + 1) });
  const upd = (f, r, dc, ds) => {
    for (let i = r + 1; i <= C; i += i & -i) {
      f.cnt[i] += dc;
      f.sum[i] += ds;
    }
  };
  const qCnt = (f, r) => {
    if (r < 0) return 0;
    let s = 0;
    for (let i = r + 1; i > 0; i -= i & -i) s += f.cnt[i];
    return s;
  };
  // sum of the q smallest elements in the fenwick (q <= total count)
  const sumSmallest = (f, q) => {
    if (q <= 0) return 0;
    let pos = 0;
    let cnt = 0;
    let s = 0;
    for (let pw = hiPw; pw > 0; pw >>= 1) {
      const np = pos + pw;
      if (np <= C && cnt + f.cnt[np] < q) {
        pos = np;
        cnt += f.cnt[np];
        s += f.sum[np];
      }
    }
    return s + (q - cnt) * comp[pos];
  };

  const pre = new Float64Array(n + 1);
  for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + nums[i];

  let ans = -Infinity;
  for (let l = 0; l < n; l++) {
    const inF = mkFen();
    const outF = mkFen();
    let totalB = n;
    let totalBsum = pre[n];
    for (let i = 0; i < n; i++) upd(outF, rank.get(nums[i]), 1, nums[i]);
    for (let r = l; r < n; r++) {
      const v = nums[r];
      const rr = rank.get(v);
      upd(inF, rr, 1, v);
      upd(outF, rr, -1, -v);
      totalB--;
      totalBsum -= v;

      const m = r - l + 1;
      const r1 = r1m[m];
      const cA1 = qCnt(inF, r1);                 // #A with value <= comp[r1]
      const cA2 = qCnt(inF, r1 + 1);             // #A with value <= comp[r1+1]
      const cB2 = totalB - P[r1 + 1] + cA2;      // #B with value > comp[r1+1]
      const t = Math.min(Math.max(cA1, cB2), k); // optimal swaps, capped by k

      const base = pre[r + 1] - pre[l];
      const gain = (totalBsum - sumSmallest(outF, totalB - t)) - sumSmallest(inF, t);
      const cand = base + gain;
      if (cand > ans) ans = cand;
    }
  }
  return ans;
};
// @lc code=end

/**
// TEST:
console.log(maxSum([1, -1, 0, 2], 1) === 3);
console.log(maxSum([4, 3, 2, 4], 2) === 13);
console.log(maxSum([-1, -2], 0) === -1);
console.log(maxSum([-5], 3) === -5);
console.log(maxSum([2, 2, 2], 0) === 6);
console.log(maxSum([0, -5, 3, -2, 5, 1], 0) === 7);

// brute cross-check
function brute(nums, k) {
  const n = nums.length;
  let best = -Infinity;
  for (let l = 0; l < n; l++) {
    for (let r = l; r < n; r++) {
      const inside = nums.slice(l, r + 1);
      const outside = [];
      for (let i = 0; i < n; i++) if (i < l || i > r) outside.push(nums[i]);
      const m = inside.length;
      for (let mask = 0; mask < (1 << m); mask++) {
        let t = 0;
        let keep = 0;
        for (let b = 0; b < m; b++) {
          if (mask & (1 << b)) t++;
          else keep += inside[b];
        }
        if (t > k) continue;
        const outs = outside.slice().sort((a, b) => b - a);
        let add = 0;
        for (let q = 0; q < t; q++) add += outs[q];
        if (keep + add > best) best = keep + add;
      }
    }
  }
  return best;
}
let seed = 77;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 11 - 5;
let ok = true;
for (let t = 0; t < 400; t++) {
  const arr = Array.from({ length: 1 + t % 8 }, rnd);
  const kk = t % 3;
  const a = maxSum(arr.slice(), kk);
  const b = brute(arr.slice(), kk);
  if (a !== b) { ok = false; console.log('MISMATCH', JSON.stringify(arr), 'k=' + kk, 'fast=' + a, 'brute=' + b); break; }
}
console.log(ok);

*/
