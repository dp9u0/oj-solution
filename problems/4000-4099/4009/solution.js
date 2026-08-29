/*
 * @lc app=leetcode id=4009 lang=javascript
 *
 * [4009] Minimum Possible Maximum Waiting Time
 */

// @lc code=start
/**
 * @param {number[]} demand
 * @param {number[]} fuel
 * @return {number}
 */
var minMaxWaitingTime = function(demand, fuel) {
  const n = demand.length;
  const memo = new Map();
  // returns [servedCount, maxWait] best pair (count desc, maxWait asc); maxWait -1 = none
  const solve = (i, f0, f1, d0, d1) => {
    if (i === n) return [0, -1];
    const key = i + ',' + f0 + ',' + f1 + ',' + d0 + ',' + d1;
    const hit = memo.get(key);
    if (hit) return hit;
    const di = demand[i];
    let best = [0, -1]; // process terminates here
    if (f0 >= di) {
      const shift = Math.max(0, d0);
      const sub = solve(i + 1, f0 - di, f1, di, d1 - shift);
      const cand = [sub[0] + 1, Math.max(sub[1], shift)];
      if (cand[0] > best[0] || (cand[0] === best[0] && cand[1] < best[1])) best = cand;
    }
    if (f1 >= di) {
      const shift = Math.max(0, d1);
      const sub = solve(i + 1, f0, f1 - di, d0 - shift, di);
      const cand = [sub[0] + 1, Math.max(sub[1], shift)];
      if (cand[0] > best[0] || (cand[0] === best[0] && cand[1] < best[1])) best = cand;
    }
    memo.set(key, best);
    return best;
  };
  const ans = solve(0, fuel[0], fuel[1], 0, 0);
  return ans[0] === 0 ? -1 : ans[1];
};
// @lc code-end

// TEST:
console.log(minMaxWaitingTime([6, 8, 4, 6, 5], [16, 13]) === 6);
console.log(minMaxWaitingTime([10, 15], [12, 17]) === 0);
console.log(minMaxWaitingTime([10, 5], [8, 8]) === -1);
console.log(minMaxWaitingTime([5], [5, 5]) === 0);
console.log(minMaxWaitingTime([3, 3], [6, 3]) === 0);
console.log(minMaxWaitingTime([2, 2, 2], [4, 2]) === 2);

// brute-force cross-check (small n)
function bruteForce(demand, fuel) {
  const n = demand.length;
  let bestCount = -1;
  let bestWait = -1;
  for (let mask = 0; mask < (1 << n); mask++) {
    const f = [fuel[0], fuel[1]];
    const free = [0, 0];
    let allowed = 0;
    let count = 0;
    let maxW = -1;
    let legal = true;
    for (let i = 0; i < n; i++) {
      const j = (mask >> i) & 1;
      if (f[j] < demand[i]) {
        if (f[1 - j] >= demand[i]) { legal = false; }
        break;
      }
      const start = Math.max(allowed, free[j]);
      maxW = Math.max(maxW, start - allowed);
      free[j] = start + demand[i];
      f[j] -= demand[i];
      allowed = start;
      count++;
    }
    if (!legal) continue;
    if (count > bestCount || (count === bestCount && maxW < bestWait)) {
      bestCount = count;
      bestWait = maxW;
    }
  }
  return bestCount === 0 ? -1 : bestWait;
}
let seed = 4242;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 20 + 1;
let allOk = true;
for (let t = 0; t < 300; t++) {
  const len = 1 + t % 10;
  const demand = Array.from({ length: len }, rnd);
  const fuel = [rnd(), rnd()];
  const a = minMaxWaitingTime(demand, fuel);
  const b = bruteForce(demand, fuel);
  if (a !== b) {
    allOk = false;
    console.log(`MISMATCH demand=${JSON.stringify(demand)} fuel=${JSON.stringify(fuel)} fast=${a} brute=${b}`);
  }
}
console.log(allOk);
