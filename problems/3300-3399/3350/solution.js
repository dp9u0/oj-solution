/*
 * @lc app=leetcode id=3350 lang=javascript
 *
 * [3350] Adjacent Increasing Subarrays Detection II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    const n = nums.length;
    // inc[i] = length of strictly increasing run ending at i
    const inc = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) inc[i] = inc[i - 1] + 1;
    }
    // right[i] = length of strictly increasing run starting at i
    const right = new Array(n).fill(1);
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) right[i] = right[i + 1] + 1;
    }

    let maxK = 0;
    for (let i = 1; i < n; i++) {
        maxK = Math.max(maxK, Math.min(inc[i - 1], right[i]));
    }
    return maxK;
};
// @lc code=end

// TEST:
console.log(maxIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1]));    // 3
console.log(maxIncreasingSubarrays([1,2,3,4,4,4,4,5,6,7]));    // 2
console.log(maxIncreasingSubarrays([1,2,3,4,5,6]));             // 3
