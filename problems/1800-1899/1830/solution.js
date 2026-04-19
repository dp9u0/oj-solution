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
var makeStringSorted = function(s) {
    const MOD = 1e9 + 7;
    const n = s.length;

    // Precompute factorials and inverse factorials
    const fact = new Array(n + 1).fill(1);
    const invFact = new Array(n + 1).fill(1);
    for (let i = 1; i <= n; i++) fact[i] = Number(BigInt(fact[i - 1]) * BigInt(i) % BigInt(MOD));
    invFact[n] = modPow(fact[n], MOD - 2, MOD);
    for (let i = n - 1; i >= 0; i--) invFact[i] = Number(BigInt(invFact[i + 1]) * BigInt(i + 1) % BigInt(MOD));

    function modPow(base, exp, mod) {
        let result = 1n, b = BigInt(base), m = BigInt(mod);
        while (exp > 0) {
            if (exp & 1) result = result * b % m;
            b = b * b % m;
            exp >>= 1;
        }
        return Number(result);
    }

    const cnt = new Array(26).fill(0);
    let ans = 0;

    for (let i = n - 1; i >= 0; i--) {
        const c = s.charCodeAt(i) - 97;
        cnt[c]++;

        // Count characters smaller than c in the suffix
        let less = 0;
        for (let j = 0; j < c; j++) less += cnt[j];

        // Permutations of remaining = (total-1)! / product(cnt[j]!)
        let totalFact = fact[n - 1 - i]; // (remaining count)!
        let denom = 1;
        for (let j = 0; j < 26; j++) {
            if (cnt[j] > 1) denom = Number(BigInt(denom) * BigInt(invFact[cnt[j]]) % BigInt(MOD));
        }

        const contrib = Number(BigInt(less) * BigInt(totalFact) % BigInt(MOD) * BigInt(denom) % BigInt(MOD));
        ans = (ans + contrib) % MOD;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(makeStringSorted('cba')); // 5
console.log(makeStringSorted('aabaa')); // 2
console.log(makeStringSorted('a')); // 0
console.log(makeStringSorted('ab')); // 0
console.log(makeStringSorted('ba')); // 1
