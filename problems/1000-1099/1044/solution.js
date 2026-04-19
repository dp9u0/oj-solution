/*
 * @lc app=leetcode id=1044 lang=javascript
 *
 * [1044] Longest Duplicate Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
  const n = s.length;
  const MOD1 = 10n ** 9n + 7n;
  const MOD2 = 10n ** 9n + 9n;
  const BASE1 = 26n;
  const BASE2 = 31n;

  const check = (len) => {
    if (len === 0) return 0;
    const seen = new Map();
    let h1 = 0n, h2 = 0n;
    let pow1 = 1n, pow2 = 1n;

    for (let i = 0; i < len; i++) {
      h1 = (h1 * BASE1 + BigInt(s.charCodeAt(i) - 97)) % MOD1;
      h2 = (h2 * BASE2 + BigInt(s.charCodeAt(i) - 97)) % MOD2;
      if (i < len - 1) {
        pow1 = (pow1 * BASE1) % MOD1;
        pow2 = (pow2 * BASE2) % MOD2;
      }
    }

    const key = `${h1}_${h2}`;
    seen.set(key, 0);

    for (let i = len; i < n; i++) {
      h1 = ((h1 - BigInt(s.charCodeAt(i - len) - 97) * pow1) % MOD1 + MOD1) % MOD1;
      h1 = (h1 * BASE1 + BigInt(s.charCodeAt(i) - 97)) % MOD1;

      h2 = ((h2 - BigInt(s.charCodeAt(i - len) - 97) * pow2) % MOD2 + MOD2) % MOD2;
      h2 = (h2 * BASE2 + BigInt(s.charCodeAt(i) - 97)) % MOD2;

      const k = `${h1}_${h2}`;
      if (seen.has(k)) return i - len + 1;
      seen.set(k, i - len + 1);
    }

    return -1;
  };

  let lo = 0, hi = n;
  let result = 0;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    const pos = check(mid);
    if (pos >= 0) {
      result = pos;
      lo = mid;
    } else {
      hi = mid - 1;
    }
  }

  return s.slice(result, result + lo);
};
// @lc code=end

// TEST:
console.log(longestDupSubstring("banana"));  // "ana"
console.log(longestDupSubstring("abcd"));    // ""
console.log(longestDupSubstring("aa"));      // "a"
console.log(longestDupSubstring("abcabc"));  // "abc"
