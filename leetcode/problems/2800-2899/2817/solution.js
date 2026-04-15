/*
 * @lc app=leetcode id=2817 lang=javascript
 *
 * [2817] Minimum Absolute Difference Between Elements With Constraint
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minAbsoluteDifference = function(nums, x) {
    const n = nums.length;
    const sorted = [];
    let result = Infinity;

    for (let j = x; j < n; j++) {
        // Insert nums[j - x] into sorted array
        const val = nums[j - x];
        let lo = 0, hi = sorted.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (sorted[mid] < val) lo = mid + 1;
            else hi = mid;
        }
        sorted.splice(lo, 0, val);

        // Binary search nums[j] in sorted
        let left = 0, right = sorted.length;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (sorted[mid] < nums[j]) left = mid + 1;
            else right = mid;
        }
        if (left < sorted.length) result = Math.min(result, sorted[left] - nums[j]);
        if (left > 0) result = Math.min(result, nums[j] - sorted[left - 1]);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(minAbsoluteDifference([4,3,2,4], 2));          // 0
console.log(minAbsoluteDifference([5,3,2,10,15], 1));      // 1
console.log(minAbsoluteDifference([1,2,3,4], 3));          // 3
