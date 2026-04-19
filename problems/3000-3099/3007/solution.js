/*
 * @lc app=leetcode id=3007 lang=javascript
 *
 * [3007] Maximum Number That Sum of the Prices Is Less Than or Equal to K
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} x
 * @return {number}
 */
var findMaximumNumber = function(k, x) {
    const bigK = BigInt(k);

    const countBits = (num, pos) => {
        const n = BigInt(num);
        const p = BigInt(pos);
        const full = (n + 1n) / (1n << p);
        const rem = (n + 1n) % (1n << p);
        return full * (1n << (p - 1n)) + (rem > (1n << (p - 1n)) ? rem - (1n << (p - 1n)) : 0n);
    };

    const accumulatedPrice = (num) => {
        let total = 0n;
        for (let pos = x; pos <= 60; pos += x) {
            total += countBits(num, pos);
        }
        return total;
    };

    let lo = 1n, hi = BigInt(10) ** 18n;
    while (lo < hi) {
        const mid = (lo + hi + 1n) / 2n;
        if (accumulatedPrice(mid) <= bigK) {
            lo = mid;
        } else {
            hi = mid - 1n;
        }
    }
    return Number(lo);
};
// @lc code=end

// TEST:
console.log(findMaximumNumber(9, 1));   // 6
console.log(findMaximumNumber(7, 2));   // 9
console.log(findMaximumNumber(1000000000000000, 1)); // large k
