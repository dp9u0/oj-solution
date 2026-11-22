/*
 * @lc app=leetcode.cn id=2927 lang=javascript
 *
 * [2927] 给小朋友们分糖果 III
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    const c2 = (x) => {
        const b = BigInt(x);
        return b >= 2n ? (b % 2n === 0n ? (b / 2n) * (b - 1n) : ((b - 1n) / 2n) * b) : 0n;
    };
    const res =
        c2(n + 2) -
        3n * c2(n - (limit + 1) + 2) +
        3n * c2(n - 2 * (limit + 1) + 2) -
        c2(n - 3 * (limit + 1) + 2);
    return Number(res);
};
// @lc code=end

// TEST:
console.log(distributeCandies(5, 2)); // 3
console.log(distributeCandies(3, 3)); // 10
console.log(distributeCandies(100000000, 1)); // 0
console.log(distributeCandies(6, 2)); // 7
console.log(distributeCandies(1, 100000000)); // 3
