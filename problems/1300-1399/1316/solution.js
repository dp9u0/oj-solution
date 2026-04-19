/*
 * @lc app=leetcode id=1316 lang=javascript
 *
 * [1316] Distinct Echo Substrings
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
  const n = text.length;
  const seen = new Set();

  // Precompute rolling hash
  const BASE = 31n;
  const MOD = 1000000007n;
  const pow = new Array(n + 1).fill(1n);
  const hash = new Array(n + 1).fill(0n);

  for (let i = 1; i <= n; i++) {
    pow[i] = pow[i - 1] * BASE % MOD;
    hash[i] = (hash[i - 1] * BASE + BigInt(text.charCodeAt(i - 1))) % MOD;
  }

  const getHash = (l, r) => {
    // hash of text[l..r-1]
    return (hash[r] - hash[l] * pow[r - l] % MOD + MOD) % MOD;
  };

  for (let i = 0; i < n; i++) {
    for (let l = 1; i + 2 * l <= n; l++) {
      const h1 = getHash(i, i + l);
      const h2 = getHash(i + l, i + 2 * l);
      if (h1 === h2) {
        seen.add(text.substring(i, i + 2 * l));
      }
    }
  }

  return seen.size;
};
// @lc code=end

// TEST:
console.log(distinctEchoSubstrings('abcabcabc') === 3);
console.log(distinctEchoSubstrings('leetcodeleetcode') === 2);
console.log(distinctEchoSubstrings('aa') === 1);
console.log(distinctEchoSubstrings('a') === 0);
console.log(distinctEchoSubstrings('aaaaa') === 2);
