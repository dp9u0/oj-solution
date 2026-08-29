/*
 * @lc app=leetcode id=4023 lang=javascript
 *
 * [4023] Elevator Requests IV
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, start, requests) {
  const m = requests.length;
  const req = requests.slice().sort((a, b) => a - b);
  if (m === 1) return Math.abs(start - req[0]);
  const INF = Infinity;
  // dp[l][r][side]: fulfilled = [l..r], elevator at req[l] (0) or req[r] (1); min extra penalty
  const dp = Array.from({ length: m }, () =>
    Array.from({ length: m }, () => [INF, INF])
  );
  const solve = (l, r, side) => {
    if (l === 0 && r === m - 1) return 0;
    if (dp[l][r][side] !== INF) return dp[l][r][side];
    const U = l + (m - 1 - r);
    let best = INF;
    const pos = req[side === 0 ? l : r];
    if (side === 0) {
      if (l > 0) {
        const d = (pos - req[l - 1]) * U + solve(l - 1, r, 0);
        if (d < best) best = d;
      }
      if (r < m - 1) {
        const d = (req[r + 1] - pos) * U + solve(l, r + 1, 1);
        if (d < best) best = d;
      }
    } else {
      if (r < m - 1) {
        const d = (req[r + 1] - pos) * U + solve(l, r + 1, 1);
        if (d < best) best = d;
      }
      if (l > 0) {
        const d = (pos - req[l - 1]) * U + solve(l - 1, r, 0);
        if (d < best) best = d;
      }
    }
    dp[l][r][side] = best;
    return best;
  };
  // initial state
  let lo = 0;
  while (lo < m && req[lo] < start) lo++;
  if (lo < m && req[lo] === start) {
    return Math.min(solve(lo, lo, 0), solve(lo, lo, 1));
  }
  let ans = INF;
  if (lo > 0) {
    const first = (start - req[lo - 1]) * m;
    const cand = solve(lo - 1, lo - 1, 0);
    if (cand !== INF && first + cand < ans) ans = first + cand;
  }
  if (lo < m) {
    const first = (req[lo] - start) * m;
    const cand = solve(lo, lo, 1);
    if (cand !== INF && first + cand < ans) ans = first + cand;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(elevatorRequests(6, 4, [1, 5]) === 6);
console.log(elevatorRequests(8, 3, [3, 7, 1]) === 10);
console.log(elevatorRequests(10, 5, [0, 2, 9]) === 22);
console.log(elevatorRequests(100, 50, [50]) === 0);
console.log(elevatorRequests(100, 0, [99]) === 99);

// brute cross-check: BFS over (fulfilled mask, floor) with min penalty — small m
function brute(n, start, requests) {
  const m = requests.length;
  const states = new Map();
  const key = (mask, f) => mask * 200 + f;
  let mask0 = 0;
  const ri0 = requests.indexOf(start);
  if (ri0 !== -1) mask0 |= 1 << ri0;
  let pq = [[0, mask0, start]]; // [penalty, mask, floor]
  states.set(key(mask0, start), 0);
  let best = Infinity;
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [pen, mask, f] = pq.shift();
    if (mask === (1 << m) - 1) { best = Math.min(best, pen); continue; }
    const st = key(mask, f);
    if ((states.get(st) ?? Infinity) < pen) continue;
    for (const dir of [-1, 1]) {
      let nf = f;
      let nmask = mask;
      let pen2 = pen;
      while (true) {
        nf += dir;
        if (nf < 0 || nf >= n) break;
        pen2 += m - popcount(nmask); // all unfulfilled accrue this second
        const ri = requests.indexOf(nf);
        if (ri !== -1) nmask |= 1 << ri;
        const k2 = key(nmask, nf);
        if ((states.get(k2) ?? Infinity) > pen2) {
          states.set(k2, pen2);
          pq.push([pen2, nmask, nf]);
        }
        if (nmask === (1 << m) - 1) best = Math.min(best, pen2);
      }
    }
  }
  return best;
}
function popcount(x) { let c = 0; while (x) { x &= x - 1; c++; } return c; }
let seed = 55;
let ok = true;
for (let t = 0; t < 200; t++) {
  const n = 6 + t % 5;
  const cnt = 1 + t % 4;
  const pool = Array.from({ length: n }, (_, i) => i);
  const reqs = [];
  for (let i = 0; i < cnt; i++) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    const j = seed % pool.length;
    reqs.push(pool.splice(j, 1)[0]);
  }
  const s0 = (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % n;
  const a = elevatorRequests(n, s0, reqs.slice());
  const b = brute(n, s0, reqs.slice());
  if (a !== b) { ok = false; console.log('MISMATCH', n, s0, JSON.stringify(reqs), a, b); break; }
}
console.log(ok);
