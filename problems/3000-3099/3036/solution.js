/*
 * @lc app=leetcode id=3036 lang=javascript
 *
 * [3036] Number of Subarrays That Match a Pattern II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 */
var countMatchingSubarrays = function(nums, pattern) {
    const n = nums.length, m = pattern.length;

    // Build comparison array: sign of adjacent differences
    const diff = new Array(n - 1);
    for (let i = 0; i < n - 1; i++) {
        diff[i] = nums[i + 1] > nums[i] ? 1 : (nums[i + 1] < nums[i] ? -1 : 0);
    }

    // KMP failure function on pattern
    const fail = new Array(m).fill(0);
    for (let i = 1; i < m; i++) {
        let j = fail[i - 1];
        while (j > 0 && pattern[i] !== pattern[j]) j = fail[j - 1];
        if (pattern[i] === pattern[j]) j++;
        fail[i] = j;
    }

    // Search pattern in diff
    let count = 0, j = 0;
    for (let i = 0; i < diff.length; i++) {
        while (j > 0 && diff[i] !== pattern[j]) j = fail[j - 1];
        if (diff[i] === pattern[j]) j++;
        if (j === m) {
            count++;
            j = fail[j - 1];
        }
    }

    return count;
};
// @lc code=end

// TEST:
console.log(countMatchingSubarrays([1,2,3,4,5,6], [1,1]));           // 4
console.log(countMatchingSubarrays([1,4,4,1,3,5,5,3], [1,0,-1]));    // 2
console.log(countMatchingSubarrays([1,2,3], [1]));                     // 2
console.log(countMatchingSubarrays([1,1,1], [0]));                     // 2
console.log(countMatchingSubarrays([3,2,1], [-1]));                    // 2
console.log(countMatchingSubarrays([1,2,1,2,1], [1,-1]));              // 2
