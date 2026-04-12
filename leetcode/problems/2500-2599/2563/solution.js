/*
 * @lc app=leetcode id=2563 lang=javascript
 *
 * [2563] Count the Number of Fair Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let result = 0;

    const lowerBound = (lo, hi, target) => {
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (nums[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    const upperBound = (lo, hi, target) => {
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (nums[mid] <= target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    for (let i = 0; i < n - 1; i++) {
        const left = lowerBound(i + 1, n, lower - nums[i]);
        const right = upperBound(i + 1, n, upper - nums[i]);
        result += right - left;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(countFairPairs([0,1,7,4,4,5], 3, 6)); // 6
console.log(countFairPairs([1,7,9,2,5], 11, 11)); // 1
console.log(countFairPairs([0,0,0,0], 0, 0)); // 6
