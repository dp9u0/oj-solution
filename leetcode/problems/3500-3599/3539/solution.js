/*
 * @lc app=leetcode id=3539 lang=javascript
 *
 * [3539] Find Sum of Array Product of Magical Sequences
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} k
 * @param {number[]} nums
 * @return {number}
 */
var magicalSum = function(m, k, nums) {
    const MOD = 1000000007;
    const mul = (a, b) => {
        const a1 = a >>> 21, a0 = a & 2097151, b1 = b >>> 21, b0 = b & 2097151;
        return (a1 * b1 % MOD * 1046480325 % MOD + (a1 * b0 % MOD + a0 * b1 % MOD) % MOD * 2097152 % MOD + a0 * b0 % MOD) % MOD;
    };
    const pow = (b, e) => { let r = 1; b %= MOD; while (e > 0) { if (e & 1) r = mul(r, b); b = mul(b, b); e >>= 1; } return r; };

    const fact = [1];
    for (let i = 1; i <= m; i++) fact.push(mul(fact[i - 1], i));
    const ifact = new Array(m + 1);
    ifact[m] = pow(fact[m], MOD - 2);
    for (let i = m - 1; i >= 0; i--) ifact[i] = mul(ifact[i + 1], i + 1);

    const pw = nums.map(v => {
        const p = [1]; let c = 1;
        for (let cnt = 1; cnt <= m; cnt++) { c = mul(c, v); p.push(mul(c, ifact[cnt])); }
        return p;
    });

    const S = m + 1;
    const dp = new Int32Array(S * S * (k + 1));
    dp[m * S * (k + 1)] = 1;

    for (let j = 0; j < nums.length; j++) {
        const ndp = new Int32Array(S * S * (k + 1));
        const pwj = pw[j];
        for (let rem = 0; rem <= m; rem++) {
            for (let carry = 0; carry < S; carry++) {
                for (let bits = 0; bits <= k; bits++) {
                    const vi = rem * S * (k + 1) + carry * (k + 1) + bits;
                    const v = dp[vi];
                    if (!v) continue;
                    for (let cnt = 0; cnt <= rem; cnt++) {
                        const total = cnt + carry;
                        const nb = bits + (total & 1);
                        if (nb > k) continue;
                        const nc = total >> 1;
                        const ni = (rem - cnt) * S * (k + 1) + nc * (k + 1) + nb;
                        ndp[ni] = (ndp[ni] + mul(v, pwj[cnt])) % MOD;
                    }
                }
            }
        }
        for (let i = 0; i < ndp.length; i++) if (ndp[i] >= MOD) ndp[i] -= MOD;
        dp.set(ndp);
    }

    let res = 0;
    for (let carry = 0; carry < S; carry++) {
        const pop = carry.toString(2).replace(/0/g, '').length;
        for (let bits = 0; bits <= k; bits++) {
            if (bits + pop === k) {
                res = (res + dp[carry * (k + 1) + bits]) % MOD;
            }
        }
    }

    return mul(res, fact[m]);
};
// @lc code=end

// TEST:
console.log(magicalSum(5, 5, [1,10,100,10000,1000000])); // 991600007
console.log(magicalSum(2, 2, [5,4,3,2,1])); // 170
console.log(magicalSum(1, 1, [28])); // 28
