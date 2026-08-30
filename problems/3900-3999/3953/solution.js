/*
 * @lc app=leetcode id=3953 lang=javascript
 *
 * [3953] Maximum Coprime Score
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} maxVal
 * @return {number}
 */
var maxScore = function(nums, maxVal) {
  const n = nums.length;
  const MAX = 100000;
  // smallest prime factor sieve
  const spf = Array(MAX + 1);
  for (let i = 0; i <= MAX; i++) spf[i] = i;
  for (let i = 2; i * i <= MAX; i++) {
    if (spf[i] === i) {
      for (let j = i * i; j <= MAX; j += i) if (spf[j] === j) spf[j] = i;
    }
  }
  const distinctPrimes = (x) => {
    const ps = [];
    while (x > 1) {
      const p = spf[x];
      ps.push(p);
      while (x % p === 0) x /= p;
    }
    return ps;
  };
  // cnt[m] = #elements divisible by m (m squarefree)
  const cnt = new Map();
  const exists = new Uint8Array(MAX + 1);
  for (const v of nums) {
    exists[v] = 1;
    const ps = distinctPrimes(v);
    const k = ps.length;
    for (let mask = 0; mask < (1 << k); mask++) {
      let m = 1;
      for (let b = 0; b < k; b++) if (mask & (1 << b)) m *= ps[b];
      cnt.set(m, (cnt.get(m) || 0) + 1);
    }
  }
  const notCoprimeOf = (v) => {
    const ps = distinctPrimes(v);
    const k = ps.length;
    let coprime = 0;
    for (let mask = 0; mask < (1 << k); mask++) {
      let m = 1;
      let bits = 0;
      for (let b = 0; b < k; b++) if (mask & (1 << b)) { m *= ps[b]; bits++; }
      const c = cnt.get(m) || 0;
      coprime += bits % 2 === 0 ? c : -c;
    }
    return n - coprime;
  };
  let ans = -Infinity;
  // candidates: keep an original value as selected (may exceed maxVal, no change cost for it)
  for (const u of cnt.keys()) {
    if (u === 1) continue;
  }
  const seenKeep = new Set();
  for (const v0 of nums) {
    if (seenKeep.has(v0)) continue;
    seenKeep.add(v0);
    const score = v0 - Math.max(0, notCoprimeOf(v0) - 1);
    if (score > ans) ans = score;
  }
  for (let v = 1; v <= maxVal; v++) {
    const ps = distinctPrimes(v);
    const k = ps.length;
    let coprime = 0;
    for (let mask = 0; mask < (1 << k); mask++) {
      let m = 1;
      let bits = 0;
      for (let b = 0; b < k; b++) if (mask & (1 << b)) { m *= ps[b]; bits++; }
      const c = cnt.get(m) || 0;
      coprime += bits % 2 === 0 ? c : -c;
    }
    const notCoprime = n - coprime;
    let changes;
    if (exists[v]) changes = Math.max(0, notCoprime - 1);
    else changes = notCoprime > 0 ? notCoprime : 1;
    const score = v - changes;
    if (score > ans) ans = score;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxScore([3, 4, 6], 5) === 4);
console.log(maxScore([1], 1) === 1);
console.log(maxScore([2, 4], 10) === 8);
console.log(maxScore([2, 3], 10) === 9);

// brute
function brute(nums, maxVal) {
  const n = nums.length;
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  let best = -Infinity;
  const cands = [];
  for (let v = 1; v <= maxVal; v++) cands.push(v);
  for (const u of new Set(nums)) cands.push(u); // keep original
  for (const v of cands) {
    for (let i = 0; i < n; i++) {
      // change selected i to v; others must be coprime with v (change if not)
      let changes = nums[i] === v ? 0 : 1;
      for (let j = 0; j < n; j++) {
        if (j === i) continue;
        if (gcd(nums[j], v) !== 1) changes++;
      }
      if (v - changes > best) best = v - changes;
    }
  }
  return best;
}
let seed = 20;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 30 + 1;
let ok = true;
for (let t = 0; t < 300; t++) {
  const arr = Array.from({ length: 1 + t % 7 }, rnd);
  const mv = 1 + (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 30;
  const a = maxScore(arr.slice(), mv);
  const b = brute(arr.slice(), mv);
  if (a !== b) { ok = false; console.log('MISMATCH', JSON.stringify(arr), mv, a, b); break; }
}
console.log(ok);
