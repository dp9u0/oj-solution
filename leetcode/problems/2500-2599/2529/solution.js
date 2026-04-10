/*
 * @lc app=leetcode id=2529 lang=javascript
 *
 * [2529] Maximum Count of Positive Integer and Negative Integer
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    const n = nums.length;

    // Find first index >= 0 (start of non-negative)
    let lo = 0, hi = n;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (nums[mid] >= 0) hi = mid;
        else lo = mid + 1;
    }
    const neg = lo;

    // Find first index >= 1 (start of positive)
    lo = 0, hi = n;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (nums[mid] >= 1) hi = mid;
        else lo = mid + 1;
    }
    const pos = n - lo;

    return Math.max(neg, pos);
};
// @lc code=end

// TEST:
console.log(maximumCount([-2,-1,-1,1,2,3])); // 3
console.log(maximumCount([-3,-2,-1,0,0,1,2])); // 3
console.log(maximumCount([5,20,66,1314])); // 4
console.log(maximumCount([0,0,0])); // 0
