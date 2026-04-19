/*
 * @lc app=leetcode id=3034 lang=javascript
 *
 * [3034] Number of Subarrays That Match a Pattern I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 */
var countMatchingSubarrays = function(nums, pattern) {
    const n = nums.length;
    const m = pattern.length;
    let count = 0;

    for (let i = 0; i <= n - m - 1; i++) {
        let match = true;
        for (let k = 0; k < m; k++) {
            const diff = nums[i + k + 1] - nums[i + k];
            const sign = diff > 0 ? 1 : diff < 0 ? -1 : 0;
            if (sign !== pattern[k]) {
                match = false;
                break;
            }
        }
        if (match) count++;
    }

    return count;
};
// @lc code=end

// TEST:
console.log(countMatchingSubarrays([1,2,3,4,5,6], [1,1])); // 4
console.log(countMatchingSubarrays([1,4,4,1,3,5,5,3], [1,0,-1])); // 2
console.log(countMatchingSubarrays([1,2,3,4,5,6], [1,0])); // 0
console.log(countMatchingSubarrays([1,1,1,1], [0,0])); // 2
console.log(countMatchingSubarrays([3,2,1], [-1,-1])); // 1
