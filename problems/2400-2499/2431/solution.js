/*
 * @lc app=leetcode.cn id=2431 lang=javascript
 *
 * [2431] 最大限度地提高购买水果的口味
 */

// @lc code=start
/**
 * @param {number[]} price
 * @param {number[]} tastiness
 * @param {number} maxAmount
 * @param {number} maxCoupons
 * @return {number}
 */
var maxTastiness = function(price, tastiness, maxAmount, maxCoupons) {
    const dp = Array.from({ length: maxAmount + 1 }, () => new Int32Array(maxCoupons + 1));
    const n = price.length;
    for (let i = 0; i < n; i++) {
        const full = price[i], half = price[i] >> 1, t = tastiness[i];
        for (let a = maxAmount; a >= 0; a--) {
            for (let c = maxCoupons; c >= 0; c--) {
                let best = dp[a][c];
                if (a >= full && dp[a - full][c] + t > best) best = dp[a - full][c] + t;
                if (a >= half && c >= 1 && dp[a - half][c - 1] + t > best) best = dp[a - half][c - 1] + t;
                dp[a][c] = best;
            }
        }
    }
    return dp[maxAmount][maxCoupons];
};
// @lc code=end

// TEST:
console.log(maxTastiness([10,20,20], [5,8,8], 20, 1)); // 13
console.log(maxTastiness([10,15,7], [5,8,20], 10, 2)); // 28
console.log(maxTastiness([1], [100], 0, 0)); // 0 (no budget)
console.log(maxTastiness([2], [7], 1, 1)); // 7 (coupon: half of 2 = 1 <= 1)
console.log(maxTastiness([0], [9], 0, 0)); // 9 (free fruit)
