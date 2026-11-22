/*
 * @lc app=leetcode.cn id=2912 lang=javascript
 *
 * [2912] 在网格上移动到目的地的方法数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @param {number[]} source
 * @param {number[]} dest
 * @return {number}
 */
var numberOfWays = function(n, m, k, source, dest) {
    const MOD = 1000000007n;
    const seqCount = (size, s, d, steps) => {
        const S = BigInt(size), s0 = BigInt(s), d0 = BigInt(d);
        const res = new Array(steps + 1);
        if (s0 === d0) {
            let ats = 1n, oth = 0n;
            for (let r = 0; r <= steps; r++) {
                res[r] = ats;
                const nats = oth;
                const noth = ats * (S - 1n) + oth * (S - 2n);
                ats = nats % MOD;
                oth = noth % MOD;
            }
        } else {
            let ats = 1n, atd = 0n, oth = 0n;
            for (let r = 0; r <= steps; r++) {
                res[r] = atd;
                const nats = oth + atd;
                const natd = ats + oth;
                const noth = ats * (S - 2n) + atd * (S - 2n) + oth * (S - 3n);
                ats = nats % MOD;
                atd = natd % MOD;
                oth = noth % MOD;
            }
        }
        return res;
    };
    const xF = seqCount(n, source[0], dest[0], k);
    const yF = seqCount(m, source[1], dest[1], k);
    // binomials C(k, i) mod MOD
    const fact = new Array(k + 1);
    fact[0] = 1n;
    for (let i = 1; i <= k; i++) fact[i] = fact[i - 1] * BigInt(i) % MOD;
    const invFact = new Array(k + 1);
    // modular inverse via Fermat
    const pow = (b, e) => {
        let r = 1n, base = b % MOD;
        while (e > 0n) {
            if (e & 1n) r = r * base % MOD;
            base = base * base % MOD;
            e >>= 1n;
        }
        return r;
    };
    invFact[k] = pow(fact[k], MOD - 2n);
    for (let i = k; i >= 1; i--) invFact[i - 1] = invFact[i] * BigInt(i) % MOD;
    const binom = (a, b) => (b < 0n || b > a) ? 0n : fact[a] * invFact[b] % MOD * invFact[a - b] % MOD;
    let ans = 0n;
    for (let i = 0; i <= k; i++) {
        ans = (ans + yF[i] * xF[k - i] % MOD * binom(BigInt(k), BigInt(i))) % MOD;
    }
    return Number(ans);
};
// @lc code=end

// TEST:
console.log(numberOfWays(3, 2, 2, [1,1], [2,2])); // 2
console.log(numberOfWays(3, 4, 3, [1,2], [2,3])); // 9
console.log(numberOfWays(2, 2, 1, [1,1], [1,2])); // 1
console.log(numberOfWays(2, 2, 1, [1,1], [1,1])); // 0
console.log(numberOfWays(1000000000, 1000000000, 1, [5,5], [6,5])); // 1
