/*
 * @lc app=leetcode.cn id=1099 lang=javascript
 *
 * [1099] 小于 K 的两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    nums.sort((a, b) => a - b);
    let best = -1, lo = 0, hi = nums.length - 1;
    while (lo < hi) {
        const s = nums[lo] + nums[hi];
        if (s < k) {
            best = Math.max(best, s);
            lo++;
        } else {
            hi--;
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60)); // 58
console.log(twoSumLessThanK([10, 20, 30], 15)); // -1
console.log(twoSumLessThanK([1, 2], 10)); // 3
console.log(twoSumLessThanK([5, 5, 5], 10)); // -1 (sum must be strictly less)
console.log(twoSumLessThanK([3, 1, 4, 1, 5], 100)); // 9
