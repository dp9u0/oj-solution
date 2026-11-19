/*
 * @lc app=leetcode.cn id=1060 lang=javascript
 *
 * [1060] 有序数组中的缺失元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
    const n = nums.length;
    const missing = (i) => nums[i] - nums[0] - i; // count of missing values before nums[i]
    // largest index i with missing(i) < k
    let lo = 0, hi = n - 1;
    while (lo < hi) {
        const mid = (lo + hi + 1) >> 1;
        if (missing(mid) < k) lo = mid;
        else hi = mid - 1;
    }
    return nums[lo] + k - missing(lo); // extrapolates past the array naturally
};
// @lc code=end

// TEST:
console.log(missingElement([4,7,9,10], 1)); // 5
console.log(missingElement([4,7,9,10], 3)); // 8
console.log(missingElement([1,2,4], 3)); // 6
console.log(missingElement([1,2,3], 2)); // 5 (nothing missing inside, extrapolate)
console.log(missingElement([5], 10)); // 15
