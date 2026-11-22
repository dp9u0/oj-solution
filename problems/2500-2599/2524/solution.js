/*
 * @lc app=leetcode.cn id=2524 lang=javascript
 *
 * [2524] 子数组的最大频率分数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequencyScore = function(nums, k) {
    const MOD = 1000000007;
    const modpow = (v, e) => {
        let base = BigInt(v) % BigInt(MOD), r = 1n;
        const B = BigInt(MOD);
        while (e > 0) {
            if (e & 1) r = (r * base) % B;
            base = (base * base) % B;
            e >>= 1;
        }
        return Number(r);
    };
    const cnt = new Map();
    const powCache = new Map();
    let total = 0;
    const enter = (x) => {
        const c = cnt.get(x) || 0;
        const old = powCache.get(x) || 0;
        if (c > 0) total = (total - old + MOD) % MOD;
        const nc = c + 1;
        cnt.set(x, nc);
        const nw = nc === 1 ? x % MOD : (old * x) % MOD;
        powCache.set(x, nw);
        total = (total + nw) % MOD;
    };
    const leave = (x) => {
        const c = cnt.get(x);
        const old = powCache.get(x);
        total = (total - old + MOD) % MOD;
        if (c === 1) {
            cnt.delete(x);
            powCache.delete(x);
        } else {
            cnt.set(x, c - 1);
            const nw = Number((BigInt(old) * BigInt(modpow(x, MOD - 2))) % BigInt(MOD));
            powCache.set(x, nw);
            total = (total + nw) % MOD;
        }
    };
    for (let i = 0; i < k; i++) enter(nums[i]);
    let best = total;
    for (let i = k; i < nums.length; i++) {
        leave(nums[i - k]);
        enter(nums[i]);
        if (total > best) best = total;
    }
    return best;
};
// @lc code=end

// TEST:
console.log(maxFrequencyScore([1,1,1,2,1,2], 3)); // 5
console.log(maxFrequencyScore([1,1,1,1,1,1], 4)); // 1
console.log(maxFrequencyScore([5,4,5,7,4,4], 6)); // 96 (4^3 + 5^2 + 7)
console.log(maxFrequencyScore([2], 1)); // 2
console.log(maxFrequencyScore([1000000,1000000], 2)); // (2 * 1e6^2) % p — big value, just sanity no crash
