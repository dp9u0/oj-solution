/*
 * @lc app=leetcode id=4002 lang=javascript
 *
 * [4002] Count Valid Sequences
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function modPow(base, exp, mod) {
  let result = 1n;
  base %= mod;
  while (exp > 0n) {
    if (exp & 1n) result = result * base % mod;
    base = base * base % mod;
    exp >>= 1n;
  }
  return result;
}

var countValidSequences = function(n, k) {
  const MOD = 1000000007n;
  const fact = Array(n + 1).fill(1n);
  for (let i = 1; i <= n; i++) fact[i] = fact[i - 1] * BigInt(i) % MOD;
  const invFact = Array(n + 1).fill(1n);
  invFact[n] = modPow(fact[n], MOD - 2n, MOD);
  for (let i = n; i > 0; i--) invFact[i - 1] = invFact[i] * BigInt(i) % MOD;
  const comb = (a, b) => {
    if (b < 0 || b > a) return 0n;
    return fact[a] * invFact[b] % MOD * invFact[a - b] % MOD;
  };
  let ans = comb(n - 1, k - 1);
  if ((n - k) % 2 === 0) {
    ans = (ans - comb((n - k) / 2 + k - 1, k - 1) + MOD) % MOD;
  }
  return Number(ans);
};
// @lc code=end

// TEST:
console.log(countValidSequences(5, 3) === 3);
console.log(countValidSequences(3, 2) === 2);
console.log(countValidSequences(5, 5) === 0);
console.log(countValidSequences(1, 1) === 0);
console.log(countValidSequences(2, 1) === 1);
console.log(countValidSequences(4, 2) === 1);
console.log(countValidSequences(500000, 250000) >= 0);
