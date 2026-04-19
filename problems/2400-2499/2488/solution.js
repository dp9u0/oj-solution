/*
 * @lc app=leetcode id=2488 lang=javascript
 *
 * [2488] Count Subarrays With Median K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const n = nums.length;
    const pos = nums.indexOf(k);

    // Transform: >k -> +1, <k -> -1, =k -> 0
    const arr = nums.map(x => x > k ? 1 : x < k ? -1 : 0);

    // Build prefix sum array
    const P = new Array(n + 1);
    P[0] = 0;
    for (let i = 0; i < n; i++) P[i + 1] = P[i] + arr[i];

    // Count prefix sums P[0] to P[pos] (left boundaries)
    const leftCount = new Map();
    for (let j = 0; j <= pos; j++) {
        const val = P[j];
        leftCount.set(val, (leftCount.get(val) || 0) + 1);
    }

    // For right boundary i (i >= pos), we want P[j] = P[i+1] or P[i+1]-1
    let result = 0;
    for (let i = pos; i < n; i++) {
        const target = P[i + 1];
        result += (leftCount.get(target) || 0);
        result += (leftCount.get(target - 1) || 0);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(countSubarrays([3,2,1,4,5], 4)); // 3
console.log(countSubarrays([2,3,1], 3)); // 1
console.log(countSubarrays([1], 1)); // 1
console.log(countSubarrays([2,1,3], 1)); // 1
console.log(countSubarrays([3,1,2,4], 2)); // 2 ([2], [1,2])
console.log(countSubarrays([5,4,3,2,1], 3)); // 1
