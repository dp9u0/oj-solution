/*
 * @lc app=leetcode id=3757 lang=javascript
 *
 * [3757] Number of Effective Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countEffective = function(nums) {
    const MOD = BigInt(1e9 + 7);
    const n = nums.length;
    let total = 0;
    for (const x of nums) total |= x;

    // collect bits of total
    const bits = [];
    for (let b = 0; b < 20; b++) {
        if (total & (1 << b)) bits.push(b);
    }
    const m = bits.length;

    // each element's bit mask relative to total's active bits
    const f = new BigInt64Array(1 << m);
    for (const x of nums) {
        let s = 0;
        for (let i = 0; i < m; i++) {
            if (x & (1 << bits[i])) s |= (1 << i);
        }
        f[s]++;
    }

    // SOS DP: g[T] = sum of f[S] where S is subset of T
    const g = new BigInt64Array(f);
    for (let i = 0; i < m; i++) {
        for (let s = 0; s < (1 << m); s++) {
            if (s & (1 << i)) g[s] += g[s ^ (1 << i)];
        }
    }

    // precompute powers of 2
    const pow2 = [1n];
    for (let i = 1; i <= n; i++) pow2.push(pow2[i - 1] * 2n % MOD);

    // Inclusion-exclusion over non-empty subsets T of active bits
    // "lose all bits in T" = must remove all elements contributing to T
    // union_sz(T) = n - g[~T & fullMask]
    const full = (1 << m) - 1;
    let ans = 0n;

    for (let T = 1; T <= full; T++) {
        const complement = full ^ T;
        const notContributing = g[complement]; // elements whose mask is subset of complement
        const unionSz = BigInt(n) - notContributing;
        const cnt = pow2[Number(notContributing)]; // remaining elements can be freely in/out of removal
        const sign = (bitCount(T) & 1) ? 1n : -1n;
        ans = (ans + sign * cnt % MOD + MOD) % MOD;
    }

    return Number(ans);
};

function bitCount(x) {
    let c = 0;
    while (x) { c++; x &= x - 1; }
    return c;
}
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(countEffective, [[1, 2, 3]], 3);
test(countEffective, [[7, 4, 6]], 4);
test(countEffective, [[8, 8]], 1);
test(countEffective, [[2, 2, 1]], 5);
test(countEffective, [[1]], 1);
