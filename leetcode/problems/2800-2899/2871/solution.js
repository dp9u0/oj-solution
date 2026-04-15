/*
 * @lc app=leetcode id=2871 lang=javascript
 *
 * [2871] Split Array Into Maximum Number of Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarrays = function(nums) {
    let count = 0, running = -1;
    for (let x of nums) {
        running &= x;
        if (running === 0) {
            count++;
            running = -1;
        }
    }
    return Math.max(1, count);
};
// @lc code=end

// TEST:
console.log(maxSubarrays([1,0,2,0,1,2])); // 3
console.log(maxSubarrays([5,7,1,3])); // 1
