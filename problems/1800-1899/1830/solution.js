/*
 * @lc app=leetcode id=1830 lang=javascript
 *
 * [1830] Minimum Number of Operations to Make String Sorted
 */

// @lc code=start
/**
 * @param {string} s
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

var makeStringSorted = function(s) {
  const MOD = 1000000007n;
  const n = s.length;
  const cnt = Array(26).fill(0);
  for (const ch of s) cnt[ch.charCodeAt(0) - 97]++;

  const fact = Array(n + 1).fill(1n);
  for (let i = 1; i <= n; i++) fact[i] = fact[i - 1] * BigInt(i) % MOD;
  const invFact = Array(n + 1).fill(1n);
  invFact[n] = modPow(fact[n], MOD - 2n, MOD);
  for (let i = n; i > 0; i--) invFact[i - 1] = invFact[i] * BigInt(i) % MOD;
  const inv = Array(n + 1).fill(1n);
  for (let i = 2; i <= n; i++) {
    inv[i] = (MOD - MOD / BigInt(i)) * inv[Number(MOD % BigInt(i))] % MOD;
  }

  let perms = fact[n];
  for (let k = 0; k < 26; k++) perms = perms * invFact[cnt[k]] % MOD;

  let ans = 0n;
  for (let i = 0; i < n; i++) {
    const L = n - i;
    const c = s.charCodeAt(i) - 97;
    let smaller = 0;
    for (let k = 0; k < c; k++) smaller += cnt[k];
    ans = (ans + perms * BigInt(smaller) % MOD * inv[L]) % MOD;
    perms = perms * inv[L] % MOD * BigInt(cnt[c]) % MOD;
    cnt[c]--;
  }
  return Number(ans);
};
// @lc code=end

// TEST:
console.log(makeStringSorted('cba') === 5);
console.log(makeStringSorted('aabaa') === 2);
console.log(makeStringSorted('a') === 0);
console.log(makeStringSorted('abc') === 0);
console.log(makeStringSorted('ba') === 1);
console.log(makeStringSorted('dcba') === 23);
console.log(makeStringSorted('zzzz') === 0);
console.log(makeStringSorted('cdab') === 16);
