/*
 * @lc app=leetcode id=1493 lang=javascript
 *
 * [1493] Longest Subarray of 1's After Deleting One Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let zeros = 0;
    let maxLen = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeros++;
        while (zeros > 1) {
            if (nums[left] === 0) zeros--;
            left++;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
};
// @lc code=end

// TEST:
console.log(longestSubarray([1,1,0,1])); // 3
console.log(longestSubarray([0,1,1,1,0,1,1,0,1])); // 5
console.log(longestSubarray([1,1,1])); // 2
