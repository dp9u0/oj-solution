/*
 * @lc app=leetcode id=1438 lang=javascript
 *
 * [1438] Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    const maxQ = [], minQ = [];
    let left = 0, maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        while (maxQ.length && nums[maxQ[maxQ.length - 1]] < nums[right]) maxQ.pop();
        while (minQ.length && nums[minQ[minQ.length - 1]] > nums[right]) minQ.pop();
        maxQ.push(right);
        minQ.push(right);

        while (nums[maxQ[0]] - nums[minQ[0]] > limit) {
            left++;
            while (maxQ.length && maxQ[0] < left) maxQ.shift();
            while (minQ.length && minQ[0] < left) minQ.shift();
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
// @lc code=end

// TEST:
console.log(longestSubarray([8, 2, 4, 7], 4));
// Expected: 2

console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5));
// Expected: 4

console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0));
// Expected: 3
