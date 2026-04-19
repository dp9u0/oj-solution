/*
 * @lc app=leetcode id=3028 lang=javascript
 *
 * [3028] Ant on the Boundary
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let pos = 0, count = 0;
    for (const n of nums) {
        pos += n;
        if (pos === 0) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(returnToBoundaryCount([2,3,-5])); // 1
console.log(returnToBoundaryCount([3,2,-3,-4])); // 0
console.log(returnToBoundaryCount([1,-1,1,-1])); // 2
