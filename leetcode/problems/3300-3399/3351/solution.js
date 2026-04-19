/*
 * @lc app=leetcode id=3351 lang=javascript
 *
 * [3351] Sum of Good Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfGoodSubsequences = function(nums) {
    const MOD = 1e9 + 7;
    const count = new Map();
    const sum = new Map();

    for (const x of nums) {
        const cx = count.get(x) || 0;
        const sx = sum.get(x) || 0;
        const cPrev = count.get(x - 1) || 0;
        const sPrev = sum.get(x - 1) || 0;
        const cNext = count.get(x + 1) || 0;
        const sNext = sum.get(x + 1) || 0;

        const addCount = (cPrev + cNext + 1) % MOD;
        const addSum = (sPrev + sNext + x * addCount) % MOD;

        count.set(x, (cx + addCount) % MOD);
        sum.set(x, (sx + addSum) % MOD);
    }

    let ans = 0;
    for (const s of sum.values()) ans = (ans + s) % MOD;
    return ans;
};
// @lc code=end

// TEST:
console.log(sumOfGoodSubsequences([1, 2, 1])); // 14
console.log(sumOfGoodSubsequences([3, 4, 5])); // 40
console.log(sumOfGoodSubsequences([1])); // 1
console.log(sumOfGoodSubsequences([1, 3])); // 4
console.log(sumOfGoodSubsequences([1, 2, 3])); // 20
