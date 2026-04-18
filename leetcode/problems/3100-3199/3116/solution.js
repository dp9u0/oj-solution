/*
 * @lc app=leetcode id=3116 lang=javascript
 *
 * [3116] Kth Smallest Amount With Single Denomination Combination
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function(coins, k) {
    const gcd = (a, b) => { while (b) { [a, b] = [b, a % b]; } return a; };
    const n = coins.length;
    const total = 1 << n;
    const lcms = new Float64Array(total);
    lcms[0] = 1;

    for (let mask = 1; mask < total; mask++) {
        const bit = mask & -mask;
        const idx = 31 - Math.clz32(bit);
        const prev = mask ^ bit;
        const l = lcms[prev] / gcd(lcms[prev], coins[idx]) * coins[idx];
        lcms[mask] = l > 2e10 ? 2e10 : l;
    }

    const popcount = (x) => { let c = 0; while (x) { c++; x &= x - 1; } return c; };

    const count = (x) => {
        let cnt = 0;
        for (let mask = 1; mask < total; mask++) {
            const sign = (popcount(mask) & 1) ? 1 : -1;
            cnt += sign * Math.floor(x / lcms[mask]);
        }
        return cnt;
    };

    let lo = 1, hi = k * Math.max(...coins);
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (count(mid) >= k) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(findKthSmallest([3, 6, 9], 3)); // 9
console.log(findKthSmallest([5, 2], 7)); // 12
console.log(findKthSmallest([1], 5)); // 5
console.log(findKthSmallest([3], 4)); // 12
console.log(findKthSmallest([2, 3], 5)); // 8
