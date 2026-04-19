/*
 * @lc app=leetcode id=2338 lang=javascript
 *
 * [2338] Count the Number of Ideal Arrays
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function(n, maxValue) {
  const MOD = 1e9 + 7;
  const BM = BigInt(MOD);

  const mulMod = (a, b) => Number(BigInt(a) * BigInt(b) % BM);

  const powMod = (base, exp) => {
    let r = 1n, b = BigInt(base);
    while (exp > 0n) {
      if (exp & 1n) r = r * b % BM;
      b = b * b % BM;
      exp >>= 1n;
    }
    return Number(r);
  };

  // Smallest prime factor sieve
  const spf = new Array(maxValue + 1).fill(0);
  for (let i = 2; i <= maxValue; i++) {
    if (spf[i] === 0) {
      spf[i] = i;
      for (let j = i * i; j <= maxValue; j += i) {
        if (spf[j] === 0) spf[j] = i;
      }
    }
  }

  // Factorials and inverse factorials
  const maxF = n + 14;
  const fact = new Array(maxF + 1);
  const invFact = new Array(maxF + 1);
  fact[0] = 1;
  for (let i = 1; i <= maxF; i++) fact[i] = fact[i - 1] * i % MOD;
  invFact[maxF] = powMod(fact[maxF], BM - 2n);
  for (let i = maxF - 1; i >= 0; i--) invFact[i] = invFact[i + 1] * (i + 1) % MOD;

  const comb = (nn, k) => {
    if (k < 0 || k > nn) return 0;
    return mulMod(mulMod(fact[nn], invFact[k]), invFact[nn - k]);
  };

  let result = 0;
  for (let v = 1; v <= maxValue; v++) {
    let temp = v;
    let product = 1;
    while (temp > 1) {
      const p = spf[temp];
      let exp = 0;
      while (temp % p === 0) {
        temp = temp / p | 0;
        exp++;
      }
      product = mulMod(product, comb(exp + n - 1, exp));
    }
    result = (result + product) % MOD;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(idealArrays(2, 5));    // 10
console.log(idealArrays(5, 3));    // 11
console.log(idealArrays(1, 1));    // 1
console.log(idealArrays(3, 6));    // 28
console.log(idealArrays(10, 10));  // 196
