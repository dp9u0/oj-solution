/*
 * @lc app=leetcode id=2514 lang=javascript
 *
 * [2514] Count Anagrams
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countAnagrams = function(s) {
    const MOD = 1e9 + 7;
    const words = s.split(' ');

    // Precompute factorials and inverse factorials
    const maxLen = s.length;
    const fact = new Array(maxLen + 1).fill(1);
    const invFact = new Array(maxLen + 1).fill(1);

    for (let i = 1; i <= maxLen; i++) fact[i] = Number(BigInt(fact[i - 1]) * BigInt(i) % BigInt(MOD));
    invFact[maxLen] = Number(modPow(BigInt(fact[maxLen]), BigInt(MOD - 2), BigInt(MOD)));
    for (let i = maxLen - 1; i >= 0; i--) {
        invFact[i] = Number(BigInt(invFact[i + 1]) * BigInt(i + 1) % BigInt(MOD));
    }

    function modPow(base, exp, mod) {
        let result = 1n;
        while (exp > 0n) {
            if (exp & 1n) result = result * base % mod;
            base = base * base % mod;
            exp >>= 1n;
        }
        return result;
    }

    let ans = 1;
    for (const word of words) {
        const cnt = new Array(26).fill(0);
        for (const c of word) cnt[c.charCodeAt(0) - 97]++;
        let perm = fact[word.length];
        for (const c of cnt) {
            if (c > 1) perm = Number(BigInt(perm) * BigInt(invFact[c]) % BigInt(MOD));
        }
        ans = Number(BigInt(ans) * BigInt(perm) % BigInt(MOD));
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(countAnagrams("too hot")); // 18
console.log(countAnagrams("aa")); // 1
console.log(countAnagrams("abc")); // 6
console.log(countAnagrams("aaa")); // 1
console.log(countAnagrams("ab cd")); // 4
