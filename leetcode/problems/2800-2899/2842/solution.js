/*
 * @lc app=leetcode id=2842 lang=javascript
 *
 * [2842] Count K-Subsequences of a String With Maximum Beauty
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKSubsequencesWithMaxBeauty = function(s, k) {
  const MOD = 1e9 + 7;
  const BM = BigInt(MOD);
  const mulMod = (a, b) => Number(BigInt(a) * BigInt(b) % BM);

  // Count character frequencies
  const freq = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) freq[s.charCodeAt(i) - 97]++;

  // Sort descending
  const freqs = freq.filter(f => f > 0).sort((a, b) => b - a);
  if (freqs.length < k) return 0;

  const boundary = freqs[k - 1];
  let p = 0, q = 0, productAbove = 1;

  for (const f of freqs) {
    if (f > boundary) {
      p++;
      productAbove = productAbove * f % MOD;
    } else if (f === boundary) {
      q++;
    }
  }

  const r = k - p; // how many boundary-freq chars to choose

  // C(q, r) — q <= 26, exact integer
  let C = 1;
  for (let i = 0; i < r; i++) {
    C = C * (q - i) / (i + 1);
  }

  // boundary^r mod MOD (using BigInt for safe modular exponentiation)
  let bp = 1n, base = BigInt(boundary);
  for (let exp = r; exp > 0; exp >>= 1) {
    if (exp & 1) bp = bp * base % BM;
    base = base * base % BM;
  }

  return mulMod(mulMod(productAbove, C), Number(bp));
};
// @lc code=end

// TEST:
console.log(countKSubsequencesWithMaxBeauty('bcca', 2)); // 4
console.log(countKSubsequencesWithMaxBeauty('abbcd', 4)); // 2
console.log(countKSubsequencesWithMaxBeauty('abbbdd', 2)); // 5 (b,d: 3*2=6; a,d: 1*2=2; a,b: 1*3=3; max is b+d=5, count=6... wait)
console.log(countKSubsequencesWithMaxBeauty('abc', 3)); // 1
console.log(countKSubsequencesWithMaxBeauty('aaa', 1)); // 3
