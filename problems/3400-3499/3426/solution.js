/*
 * @lc app=leetcode id=3426 lang=javascript
 *
 * [3426] Manhattan Distances of All Arrangements of Pieces
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var distanceSum = function(m, n, k) {
  const MOD = 1e9 + 7;
  const N = m * n;

  const mulMod = (a, b) => Number(BigInt(a) * BigInt(b) % BigInt(MOD));

  const powMod = (base, exp) => {
    let r = 1n, b = BigInt(base), mod = BigInt(MOD);
    while (exp > 0) {
      if (exp & 1) r = r * b % mod;
      b = b * b % mod;
      exp >>= 1;
    }
    return Number(r);
  };

  // Factorials
  const fact = new Array(N + 1);
  const invFact = new Array(N + 1);
  fact[0] = 1;
  for (let i = 1; i <= N; i++) fact[i] = fact[i - 1] * i % MOD;
  invFact[N] = powMod(fact[N], MOD - 2);
  for (let i = N; i >= 1; i--) invFact[i - 1] = mulMod(invFact[i], i);

  const comb = (n, r) => {
    if (r < 0 || r > n) return 0;
    return mulMod(mulMod(fact[n], invFact[r]), invFact[n - r]);
  };

  const C = comb(N - 2, k - 2);
  const inv6 = powMod(6, MOD - 2);

  // Row: n^2 * m(m-1)(m+1)/6, Col: m^2 * n(n-1)(n+1)/6
  const rowPart = mulMod(mulMod(m, m - 1), m + 1);
  const rowSum = mulMod(mulMod(n, n), rowPart);
  const colPart = mulMod(mulMod(n, n - 1), n + 1);
  const colSum = mulMod(mulMod(m, m), colPart);
  const distSum = mulMod((rowSum + colSum) % MOD, inv6);

  return mulMod(C, distSum);
};
// @lc code=end

// TEST:
console.log(distanceSum(2, 2, 2) === 8);
console.log(distanceSum(1, 4, 3) === 20);
console.log(distanceSum(2, 3, 2) === 25);
console.log(distanceSum(1, 5, 2) === 20);
console.log(distanceSum(3, 3, 2) === 72);
