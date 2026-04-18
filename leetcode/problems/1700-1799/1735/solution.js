/*
 * @lc app=leetcode id=1735 lang=javascript
 *
 * [1735] Count Ways to Make Array With Product
 */

// @lc code=start
/**
 * @param {number[][]} queries
 * @return {number[]}
 */
var waysToFillArray = function(queries) {
  const MOD = 1e9 + 7;
  const MAX_K = 10000;
  const MAX_N = 10000;
  const MAX_F = MAX_N + 14;

  const mulMod = (a, b) => Number(BigInt(a) * BigInt(b) % BigInt(MOD));

  // SPF sieve
  const spf = new Array(MAX_K + 1);
  for (let i = 0; i <= MAX_K; i++) spf[i] = i;
  for (let i = 2; i * i <= MAX_K; i++) {
    if (spf[i] === i) {
      for (let j = i * i; j <= MAX_K; j += i) {
        if (spf[j] === j) spf[j] = i;
      }
    }
  }

  // Factorials and inverse factorials
  const fact = new Array(MAX_F + 1);
  const invFact = new Array(MAX_F + 1);
  fact[0] = 1;
  for (let i = 1; i <= MAX_F; i++) fact[i] = fact[i - 1] * i % MOD;

  const powMod = (base, exp) => {
    let r = 1n, b = BigInt(base), m = BigInt(MOD);
    while (exp > 0) {
      if (exp & 1) r = r * b % m;
      b = b * b % m;
      exp >>= 1;
    }
    return Number(r);
  };

  invFact[MAX_F] = powMod(fact[MAX_F], MOD - 2);
  for (let i = MAX_F; i >= 1; i--) invFact[i - 1] = mulMod(invFact[i], i);

  const comb = (n, r) => {
    if (r < 0 || r > n) return 0;
    return mulMod(mulMod(fact[n], invFact[r]), invFact[n - r]);
  };

  const factorize = (k) => {
    const f = [];
    while (k > 1) {
      const p = spf[k];
      let e = 0;
      while (k % p === 0) { e++; k /= p; }
      f.push(e);
    }
    return f;
  };

  const result = [];
  for (const [n, k] of queries) {
    if (k === 1) { result.push(1); continue; }
    const exps = factorize(k);
    let ways = 1;
    for (const e of exps) {
      ways = mulMod(ways, comb(e + n - 1, n - 1));
    }
    result.push(ways);
  }

  return result;
};
// @lc code=end

// TEST:
const deepEq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(deepEq(waysToFillArray([[2,6],[5,1],[73,660]]), [4,1,50734910]));
console.log(deepEq(waysToFillArray([[1,1],[2,2],[3,3],[4,4],[5,5]]), [1,2,3,10,5]));
console.log(deepEq(waysToFillArray([[1,6]]), [1]));
console.log(deepEq(waysToFillArray([[3,8]]), [10]));
console.log(deepEq(waysToFillArray([[2,1]]), [1]));
