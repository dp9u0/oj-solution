/*
 * @lc app=leetcode id=1671 lang=javascript
 *
 * [1671] Minimum Number of Removals to Make Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    const n = nums.length;

    // LIS ending at i
    const left = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                left[i] = Math.max(left[i], left[j] + 1);
            }
        }
    }

    // LDS starting at i
    const right = new Array(n).fill(1);
    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[i]) {
                right[i] = Math.max(right[i], right[j] + 1);
            }
        }
    }

    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        if (left[i] >= 2 && right[i] >= 2) {
            maxLen = Math.max(maxLen, left[i] + right[i] - 1);
        }
    }

    return n - maxLen;
};
// @lc code=end

// TEST:
console.log(minimumMountainRemovals([1,3,1])); // 0
console.log(minimumMountainRemovals([2,1,1,5,6,2,3,1])); // 3
console.log(minimumMountainRemovals([1,2,3,2,1])); // 0
console.log(minimumMountainRemovals([2,3,4,3,2,1])); // 0
console.log(minimumMountainRemovals([100,92,89,77,74,66,64,66,64])); // 6
