/*
 * @lc app=leetcode id=1648 lang=javascript
 *
 * [1648] Sell Diminishing-Valued Colored Balls
 */

// @lc code=start
/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function(inventory, orders) {
    const MOD = BigInt(1e9 + 7);

    let maxInv = 0;
    for (const v of inventory) if (v > maxInv) maxInv = v;

    // Binary search: find largest T where cntAtOrAbove(T) >= orders
    let lo = 0, hi = maxInv + 1;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        let cnt = 0;
        for (const v of inventory) {
            cnt += Math.max(0, v - mid + 1);
            if (cnt >= orders) break;
        }
        if (cnt >= orders) lo = mid + 1;
        else hi = mid;
    }
    const T = lo - 1;

    let total = 0n;
    let cntAbove = 0;
    for (const v of inventory) {
        if (v > T) {
            const a = BigInt(T + 1), b = BigInt(v);
            total = (total + (a + b) * (b - a + 1n) / 2n) % MOD;
            cntAbove += v - T;
        }
    }

    total = (total + BigInt(orders - cntAbove) * BigInt(T)) % MOD;

    return Number(total);
};
// @lc code=end

// TEST:
console.log(maxProfit([2, 5], 4));          // 14
console.log(maxProfit([3, 5], 6));          // 19
console.log(maxProfit([2, 2], 3));          // 5
console.log(maxProfit([6], 3));             // 15
console.log(maxProfit([1], 1));             // 1
