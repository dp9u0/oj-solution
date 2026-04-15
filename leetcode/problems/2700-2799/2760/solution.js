/*
 * @lc app=leetcode id=2760 lang=javascript
 *
 * [2760] Longest Even Odd Subarray With Threshold
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    let best = 0;
    for (let l = 0; l < nums.length; l++) {
        if (nums[l] % 2 !== 0 || nums[l] > threshold) continue;
        let r = l;
        while (r + 1 < nums.length && nums[r + 1] <= threshold && nums[r] % 2 !== nums[r + 1] % 2) {
            r++;
        }
        best = Math.max(best, r - l + 1);
    }
    return best;
};
// @lc code=end

// TEST:
console.log(longestAlternatingSubarray([3,2,5,4], 5)); // 3
console.log(longestAlternatingSubarray([1,2], 2)); // 1
console.log(longestAlternatingSubarray([2,3,4,5], 4)); // 3
