/*
 * @lc app=leetcode id=3881 lang=javascript
 *
 * [3881] Direction Assignments with Exactly K Visible People
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} pos
 * @param {number} k
 * @return {number}
 */
var countVisiblePeople = function(n, pos, k) {
    const MOD = 1e9 + 7;
    const MOD_BI = 1000000007n;
    if (k > n - 1) return 0;

    const N = n - 1;
    const fact = new Array(N + 1);
    const invFact = new Array(N + 1);
    fact[0] = 1;
    for (let i = 1; i <= N; i++) fact[i] = fact[i - 1] * i % MOD;

    const modPow = (base, exp) => {
        let r = 1n, b = BigInt(base);
        while (exp > 0) {
            if (exp & 1) r = r * b % MOD_BI;
            b = b * b % MOD_BI;
            exp >>= 1;
        }
        return Number(r);
    };

    invFact[N] = modPow(fact[N], MOD - 2);
    for (let i = N - 1; i >= 0; i--) invFact[i] = invFact[i + 1] * (i + 1) % MOD;

    const comb = (nn, kk) => {
        if (kk < 0 || kk > nn) return 0;
        return Number(BigInt(fact[nn]) * BigInt(invFact[kk]) % MOD_BI * BigInt(invFact[nn - kk]) % MOD_BI);
    };

    return 2 * comb(N, k) % MOD;
};
// @lc code=end

// TEST:
console.log(countVisiblePeople(3, 1, 0));  // 2
console.log(countVisiblePeople(3, 2, 1));  // 4
console.log(countVisiblePeople(1, 0, 0));  // 2
console.log(countVisiblePeople(5, 2, 2));  // 12
console.log(countVisiblePeople(4, 0, 2));  // 6
