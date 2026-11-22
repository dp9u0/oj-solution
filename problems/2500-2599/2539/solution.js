/*
 * @lc app=leetcode.cn id=2539 lang=javascript
 *
 * [2539] 好子序列的个数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubsequences = function(s) {
    const MOD = 1000000007;
    const n = s.length;
    const cnt = new Int32Array(26);
    for (const ch of s) cnt[ch.charCodeAt(0) - 97]++;
    // factorials
    const fact = new Int32Array(n + 1);
    fact[0] = 1;
    for (let i = 1; i <= n; i++) fact[i] = (fact[i - 1] * i) % MOD;
    const inv = new Int32Array(n + 1);
    // inverse of fact[n] via modpow
    let base = BigInt(fact[n]), e = BigInt(MOD - 2), r = 1n;
    const B = BigInt(MOD);
    while (e > 0n) {
        if (e & 1n) r = (r * base) % B;
        base = (base * base) % B;
        e >>= 1n;
    }
    inv[n] = Number(r);
    for (let i = n; i >= 1; i--) inv[i - 1] = (inv[i] * i) % MOD;
    const binom = (a, b) => (b < 0 || b > a) ? 0 : Number((BigInt(fact[a]) * BigInt(inv[b]) * BigInt(inv[a - b])) % BigInt(MOD));
    let maxCnt = 0;
    for (let c = 0; c < 26; c++) if (cnt[c] > maxCnt) maxCnt = cnt[c];
    let ans = 0n;
    const BM = BigInt(MOD);
    for (let m = 1; m <= maxCnt; m++) {
        let prod = 1n;
        for (let c = 0; c < 26; c++) {
            if (cnt[c] >= m) prod = (prod * BigInt(binom(cnt[c], m) + 1)) % BM;
        }
        ans = (ans + prod - 1n + BM) % BM;
    }
    return Number(ans);
};
// @lc code=end

// TEST:
console.log(countGoodSubsequences("aabb")); // 11
console.log(countGoodSubsequences("leet")); // 12
console.log(countGoodSubsequences("abcd")); // 15
console.log(countGoodSubsequences("a")); // 1
console.log(countGoodSubsequences("aaaa")); // 15 (position subsets)
