/*
 * @lc app=leetcode id=2057 lang=javascript
 *
 * [2057] Smallest Index With Equal Value
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) return i;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(smallestEqual([0,1,2])); // 0
console.log(smallestEqual([4,3,2,1])); // 2
console.log(smallestEqual([1,2,3,4,5,6,7,8,9,0])); // -1
