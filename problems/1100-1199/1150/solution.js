/*
 * @lc app=leetcode.cn id=1150 lang=javascript
 *
 * [1150] 检查一个数是否在数组中占绝大多数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function(nums, target) {
    const n = nums.length;
    // lower bound: first index with nums[i] >= target
    let lo = 0, hi = n;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (nums[mid] < target) lo = mid + 1; else hi = mid;
    }
    const first = lo;
    // upper bound: first index with nums[i] > target
    let lo2 = first, hi2 = n;
    while (lo2 < hi2) {
        const mid = (lo2 + hi2) >> 1;
        if (nums[mid] <= target) lo2 = mid + 1; else hi2 = mid;
    }
    return (lo2 - first) * 2 > n;
};
// @lc code=end

// TEST:
console.log(isMajorityElement([2, 4, 5, 5, 5, 5, 5, 6, 6], 5)); // true
console.log(isMajorityElement([10, 100, 101, 101], 101)); // false
console.log(isMajorityElement([1], 1)); // true
console.log(isMajorityElement([1, 2, 3], 2)); // false
console.log(isMajorityElement([5, 5, 5, 5], 5)); // true
