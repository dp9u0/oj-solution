/*
 * @lc app=leetcode id=2954 lang=javascript
 *
 * [2954] Count the Number of Infection Sequences
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} sick
 * @return {number}
 */
var numberOfSequence = function(n, sick) {
    const MOD = 1e9 + 7;
    const N = n - sick.length;

    if (N === 0) return 1;

    const mulMod = (a, b) => {
        const a0 = a & 0x7FFF, a1 = a >> 15;
        return ((a1 * b % MOD) * 0x8000 + a0 * b) % MOD;
    };

    const modPow = (base, exp) => {
        base %= MOD;
        let r = 1;
        while (exp > 0) {
            if (exp & 1) r = mulMod(r, base);
            base = mulMod(base, base);
            exp = Math.floor(exp / 2);
        }
        return r;
    };

    const fact = new Array(N + 1);
    const invFact = new Array(N + 1);
    fact[0] = 1;
    for (let i = 1; i <= N; i++) fact[i] = fact[i - 1] * i % MOD;
    invFact[N] = modPow(fact[N], MOD - 2);
    for (let i = N - 1; i >= 0; i--) invFact[i] = invFact[i + 1] * (i + 1) % MOD;

    let ans = fact[N];

    // Left boundary
    if (sick[0] > 0) ans = mulMod(ans, invFact[sick[0]]);

    // Interior segments
    let pow2Exp = 0;
    for (let i = 1; i < sick.length; i++) {
        const len = sick[i] - sick[i - 1] - 1;
        if (len > 0) {
            ans = mulMod(ans, invFact[len]);
            pow2Exp += len - 1;
        }
    }

    // Right boundary
    const rightLen = n - 1 - sick[sick.length - 1];
    if (rightLen > 0) ans = mulMod(ans, invFact[rightLen]);

    if (pow2Exp > 0) ans = mulMod(ans, modPow(2, pow2Exp));

    return ans;
};
// @lc code=end

// TEST:
console.log(numberOfSequence(5, [0, 4])); // 4
console.log(numberOfSequence(4, [1])); // 3
console.log(numberOfSequence(2, [0])); // 1
console.log(numberOfSequence(2, [1])); // 1
console.log(numberOfSequence(3, [1])); // 2
console.log(numberOfSequence(5, [2])); // 6
