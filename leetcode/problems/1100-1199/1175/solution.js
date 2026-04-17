/*
 * @lc app=leetcode id=1175 lang=javascript
 *
 * [1175] Prime Arrangements
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
  const MOD = 1e9 + 7;

  // Count primes using sieve
  const isPrime = new Uint8Array(n + 1).fill(1);
  isPrime[0] = isPrime[1] = 0;
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = 0;
      }
    }
  }
  let primeCount = 0;
  for (let i = 2; i <= n; i++) primeCount += isPrime[i];

  // Compute factorial mod
  let result = 1;
  for (let i = 2; i <= primeCount; i++) result = result * i % MOD;
  for (let i = 2; i <= n - primeCount; i++) result = result * i % MOD;

  return result;
};
// @lc code=end

// TEST:
console.log(numPrimeArrangements(5)); // 12
console.log(numPrimeArrangements(100)); // 682289015
console.log(numPrimeArrangements(1)); // 1
console.log(numPrimeArrangements(2)); // 1
console.log(numPrimeArrangements(10)); // ?
