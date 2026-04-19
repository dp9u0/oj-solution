/*
 * @lc app=leetcode id=3708 lang=javascript
 *
 * [3708] Longest Fibonacci Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let n = nums.length;
    if (n <= 2) return n;
    let ans = 2, len = 2;
    for (let i = 2; i < n; i++) {
        if (nums[i] === nums[i - 1] + nums[i - 2]) {
            len++;
        } else {
            len = 2;
        }
        ans = Math.max(ans, len);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(longestSubarray([1,1,1,1,2,3,5,1])); // 5
console.log(longestSubarray([5,2,7,9,16])); // 5
console.log(longestSubarray([1000000000,1000000000,1000000000])); // 2
