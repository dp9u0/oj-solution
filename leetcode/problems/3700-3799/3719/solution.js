/*
 * @lc app=leetcode id=3719 lang=javascript
 *
 * [3719] Longest Balanced Subarray I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    const n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const evens = new Set(), odds = new Set();
        for (let j = i; j < n; j++) {
            if (nums[j] % 2 === 0) evens.add(nums[j]);
            else odds.add(nums[j]);
            if (evens.size === odds.size) {
                ans = Math.max(ans, j - i + 1);
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(longestBalanced([2,5,4,3])); // 4
console.log(longestBalanced([3,2,2,5,4])); // 5
console.log(longestBalanced([1,2,3,2])); // 3
console.log(longestBalanced([1])); // 0
console.log(longestBalanced([2,4,6])); // 0
console.log(longestBalanced([1,3,2])); // 3
