/*
 * @lc app=leetcode.cn id=2098 lang=javascript
 *
 * [2098] 长度为 K 的最大偶数和子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestEvenSum = function(nums, k) {
    const odds = [], evens = [];
    for (const v of nums) (v & 1 ? odds : evens).push(v);
    odds.sort((a, b) => b - a);
    evens.sort((a, b) => b - a);
    const preO = [0], preE = [0];
    for (const v of odds) preO.push(preO[preO.length - 1] + v);
    for (const v of evens) preE.push(preE[preE.length - 1] + v);
    let best = -1;
    const aMin = Math.max(0, k - evens.length);
    const aMax = Math.min(k, odds.length);
    for (let a = aMin + ((aMin & 1) ? 1 : 0); a <= aMax; a += 2) {
        const sum = preO[a] + preE[k - a];
        if (sum > best) best = sum;
    }
    return best;
};
// @lc code=end

// TEST:
console.log(largestEvenSum([4,1,5,3,1], 3)); // 12
console.log(largestEvenSum([4,6,2], 3)); // 12
console.log(largestEvenSum([1,3,5], 1)); // -1
console.log(largestEvenSum([1,2,3,4], 2)); // 6 (4+2)
console.log(largestEvenSum([1,2], 2)); // -1 (only size-2 subsequence sums to 3, odd)
