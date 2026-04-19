/*
 * @lc app=leetcode id=2572 lang=javascript
 *
 * [2572] Count the Number of Square-Free Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var squareFreeSubsets = function(nums) {
    const MOD = 1e9 + 7;
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    const masks = new Map();
    for (let x = 2; x <= 30; x++) {
        let mask = 0, val = x, valid = true;
        for (let p = 0; p < primes.length; p++) {
            let cnt = 0;
            while (val % primes[p] === 0) { val = Math.floor(val / primes[p]); cnt++; }
            if (cnt > 1) { valid = false; break; }
            if (cnt === 1) mask |= (1 << p);
        }
        if (valid) masks.set(x, mask);
    }

    const dp = new Array(1024).fill(0);
    dp[0] = 1;
    let cnt1 = 0;

    for (const num of nums) {
        if (num === 1) { cnt1++; continue; }
        if (!masks.has(num)) continue;
        const m = masks.get(num);
        for (let mask = 1023; mask >= 0; mask--) {
            if ((mask & m) === 0)
                dp[mask | m] = (dp[mask | m] + dp[mask]) % MOD;
        }
    }

    let R = 0;
    for (let mask = 1; mask < 1024; mask++) R = (R + dp[mask]) % MOD;

    let pow2 = 1;
    for (let i = 0; i < cnt1; i++) pow2 = pow2 * 2 % MOD;
    const M = BigInt(MOD);
    return Number((BigInt(R + 1) * BigInt(pow2) - 1n + M) % M);
};
// @lc code=end

// TEST:
console.log(squareFreeSubsets([3,4,4,5])); // 3
console.log(squareFreeSubsets([1])); // 1
console.log(squareFreeSubsets([1,1])); // 3
console.log(squareFreeSubsets([1,2])); // 3
console.log(squareFreeSubsets([2,3,5])); // 7
