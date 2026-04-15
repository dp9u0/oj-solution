/*
 * @lc app=leetcode id=3346 lang=javascript
 *
 * [3346] Maximum Frequency of an Element After Performing Operations I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function(nums, k, numOperations) {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    const freq = new Map();
    for (const v of nums) freq.set(v, (freq.get(v) || 0) + 1);

    // Binary search helpers
    const lowerBound = (target) => {
        let lo = 0, hi = n;
        while (lo < hi) { const m = (lo + hi) >> 1; nums[m] < target ? lo = m + 1 : hi = m; }
        return lo;
    };
    const upperBound = (target) => {
        let lo = 0, hi = n;
        while (lo < hi) { const m = (lo + hi) >> 1; nums[m] <= target ? lo = m + 1 : hi = m; }
        return lo;
    };

    let ans = 0;

    // Case 1: target is an existing value
    const unique = [...freq.keys()].sort((a, b) => a - b);
    for (const v of unique) {
        const inRange = upperBound(v + k) - lowerBound(v - k);
        const f = freq.get(v);
        ans = Math.max(ans, f + Math.min(inRange - f, numOperations));
    }

    // Case 2: target is not an existing value — use sliding window
    let left = 0;
    for (let right = 0; right < n; right++) {
        while (nums[right] - nums[left] > 2 * k) left++;
        ans = Math.max(ans, Math.min(right - left + 1, numOperations));
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maxFrequency([1,4,5], 1, 2));              // 2
console.log(maxFrequency([5,11,20,20], 5, 1));          // 2
console.log(maxFrequency([1,2,3,4,5], 1, 2));           // 3
