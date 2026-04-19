/*
 * @lc app=leetcode id=2831 lang=javascript
 *
 * [2831] Find the Longest Equal Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function(nums, k) {
    const groups = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!groups.has(nums[i])) groups.set(nums[i], []);
        groups.get(nums[i]).push(i);
    }
    let ans = 0;
    for (const pos of groups.values()) {
        let left = 0;
        for (let right = 0; right < pos.length; right++) {
            while (pos[right] - pos[left] - (right - left) > k) left++;
            ans = Math.max(ans, right - left + 1);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(longestEqualSubarray([1,3,2,3,1,3], 3)); // 3
console.log(longestEqualSubarray([1,1,2,2,1,1], 2)); // 4
console.log(longestEqualSubarray([1,2,3], 0)); // 1
console.log(longestEqualSubarray([1,1,1,1], 0)); // 4
console.log(longestEqualSubarray([1,2,1,2,1], 1)); // 2
