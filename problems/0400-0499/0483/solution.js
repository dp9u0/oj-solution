/*
 * @lc app=leetcode id=483 lang=javascript
 *
 * [483] Smallest Good Base
 */

// @lc code=start
/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function(n) {
    const num = BigInt(n);
    // 校验 k 进制下 m 位全 1 的等比和是否恰为 target
    const check = (k, m, target) => {
        let sum = 1n, term = 1n;
        for (let i = 1; i < m; i++) {
            term *= k;
            sum += term;
            if (sum > target) return false;
        }
        return sum === target;
    };
    // 位数 m 越大进制越小，从大到小枚举 m
    for (let m = 63; m >= 2; m--) {
        const k0 = Math.floor(Math.pow(Number(num), 1 / (m - 1)));
        // 浮点取根可能偏移，校验附近候选值
        for (let d = -2; d <= 2; d++) {
            const k = BigInt(k0 + d);
            if (k < 2n) continue;
            if (check(k, m, num)) return k.toString();
        }
    }
    return (num - 1n).toString();
};
// @lc code=end

// TEST:
console.log(smallestGoodBase("13")); // "3"
console.log(smallestGoodBase("4681")); // "8"
console.log(smallestGoodBase("1000000000000000000")); // "999999999999999999"
console.log(smallestGoodBase("3")); // "2"
console.log(smallestGoodBase("15")); // "2" (1111 base 2)
console.log(smallestGoodBase("7")); // "2" (111 base 2)
console.log(smallestGoodBase("821499496486627118")); // "2" (60 位全 1)
console.log(smallestGoodBase("2251799813685247")); // "2" (2^51 - 1)
console.log(smallestGoodBase("999999999999999999")); // "999999999999999998" (仅 "11" 满足)
console.log(smallestGoodBase("6")); // "5" (11 base 5)
