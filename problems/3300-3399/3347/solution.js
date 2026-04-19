/*
 * @lc app=leetcode id=3347 lang=javascript
 *
 * [3347] Maximum Frequency of an Element After Performing Operations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function(nums, k, numOperations) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let ans = 0;

    // Collect candidate target values: each nums[i] and nums[i]+k, nums[i]-k
    const candidates = new Set();
    for (let i = 0; i < n; i++) {
        candidates.add(nums[i]);
        candidates.add(nums[i] - k);
        candidates.add(nums[i] + k);
    }

    for (const target of candidates) {
        const left = lowerBound(nums, target - k);
        const right = lowerBound(nums, target + k + 1);
        const rangeCount = right - left;

        const eqLeft = lowerBound(nums, target);
        const eqRight = lowerBound(nums, target + 1);
        const eqCount = eqRight - eqLeft;

        const freq = Math.min(rangeCount, eqCount + numOperations);
        ans = Math.max(ans, freq);
    }

    return ans;
};

function lowerBound(arr, val) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid] < val) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}
// @lc code=end

// TEST:
console.log(maxFrequency([1,4,5], 1, 2)); // 2
console.log(maxFrequency([5,11,20,20], 5, 1)); // 2
console.log(maxFrequency([1], 1, 0)); // 1
console.log(maxFrequency([1,2,3,4,5], 0, 2)); // 1
console.log(maxFrequency([5,64], 42, 2)); // 2
console.log(maxFrequency([1,1,1,2,2,3], 1, 3)); // 5