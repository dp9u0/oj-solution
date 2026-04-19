/*
 * @lc app=leetcode id=2419 lang=javascript
 *
 * [2419] Longest Subarray With Maximum Bitwise AND
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const maxVal = Math.max(...nums);
    let ans = 0, cur = 0;
    for (const x of nums) {
        if (x === maxVal) {
            cur++;
            ans = Math.max(ans, cur);
        } else {
            cur = 0;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(longestSubarray([1,2,3,3,2,2]));   // 2
console.log(longestSubarray([1,2,3,4]));        // 1
console.log(longestSubarray([5,5,5,5]));        // 4
console.log(longestSubarray([1]));              // 1
console.log(longestSubarray([3,2,3,3,3,1]));   // 3
