/*
 * @lc app=leetcode.cn id=4081 lang=javascript
 *
 * [4081] 选择质数子集 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} s
 * @return {number[]}
 */
function maxPrimeSubset(n, s) {
  const limit = Math.min(n, s);
  const sieve = new Uint8Array(limit + 1);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) continue;
    for (let j = i * i; j <= limit; j += i) sieve[j] = 1;
    primes.push(i);
  }
  const m = primes.length;
  const INF = 0x3f3f;
  const dp = new Array(m + 1);
  dp[m] = new Int16Array(s + 1).fill(INF);
  dp[m][0] = 0;
  for (let i = m - 1; i >= 0; i--) {
    const nxt = dp[i + 1];
    const row = new Int16Array(s + 1).fill(INF);
    const p = primes[i];
    for (let t = 0; t <= s; t++) {
      let best = nxt[t];
      if (t >= p && nxt[t - p] + 1 < best) best = nxt[t - p] + 1;
      row[t] = best;
    }
    dp[i] = row;
  }
  let best = s;
  while (best > 0 && dp[0][best] === INF) best--;
  if (best === 0) return [];
  const res = [];
  let t = best;
  let c = dp[0][t];
  for (let i = 0; i < m && c > 0; i++) {
    const p = primes[i];
    if (t >= p && dp[i + 1][t - p] === c - 1) {
      res.push(p);
      t -= p;
      c--;
    }
  }
  return res;
}
// @lc code=end

// TEST:
console.log(JSON.stringify(maxPrimeSubset(7, 20)) === JSON.stringify([2,3,5,7]));
console.log(JSON.stringify(maxPrimeSubset(15, 18)) === JSON.stringify([5,13]));
console.log(JSON.stringify(maxPrimeSubset(5, 1)) === JSON.stringify([]));
console.log(JSON.stringify(maxPrimeSubset(15, 15)) === JSON.stringify([2,13]));
console.log(JSON.stringify(maxPrimeSubset(1, 1000)) === JSON.stringify([]));
console.log(JSON.stringify(maxPrimeSubset(3, 3)) === JSON.stringify([3]));
console.log(JSON.stringify(maxPrimeSubset(11, 10)) === JSON.stringify([3,7]));
