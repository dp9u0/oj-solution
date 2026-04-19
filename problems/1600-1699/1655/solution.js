/*
 * @lc app=leetcode id=1655 lang=javascript
 *
 * [1655] Distribute Repeating Integers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} quantity
 * @return {boolean}
 */
var canDistribute = function(nums, quantity) {
    const freq = {};
    for (const x of nums) freq[x] = (freq[x] || 0) + 1;
    const cnt = Object.values(freq).sort((a, b) => b - a);
    const m = quantity.length;

    if (Math.max(...quantity) > cnt[0]) return false;

    const full = (1 << m) - 1;

    // Precompute sum for each submask
    const sumMask = new Int32Array(1 << m);
    for (let mask = 1; mask <= full; mask++) {
        const lsb = mask & (-mask);
        const i = 31 - Math.clz32(lsb);
        sumMask[mask] = sumMask[mask ^ lsb] + quantity[i];
    }

    let dp = new Uint8Array(1 << m);
    dp[0] = 1;

    for (let v = 0; v < cnt.length; v++) {
        const newDp = new Uint8Array(dp);
        for (let mask = 0; mask <= full; mask++) {
            if (!dp[mask]) continue;
            const remaining = full ^ mask;
            for (let sub = remaining; sub > 0; sub = (sub - 1) & remaining) {
                if (sumMask[sub] <= cnt[v]) {
                    newDp[mask | sub] = 1;
                }
            }
        }
        dp = newDp;
        if (dp[full]) return true;
    }

    return dp[full] === 1;
};
// @lc code=end

// TEST:
console.log(canDistribute([1, 2, 3, 4], [2]));            // false
console.log(canDistribute([1, 2, 3, 3], [2]));            // true
console.log(canDistribute([1, 1, 2, 2], [2, 2]));         // true
console.log(canDistribute([1, 1, 1, 1], [2, 2]));         // true
console.log(canDistribute([1, 2, 3, 4], [1, 1, 1, 1]));   // true
console.log(canDistribute([1], [2]));                       // false
