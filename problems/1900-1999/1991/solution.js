/*
 * @lc app=leetcode id=1991 lang=javascript
 *
 * [1991] Find the Middle Index in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === total - leftSum - nums[i]) return i;
        leftSum += nums[i];
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(findMiddleIndex([2,3,-1,8,4])); // 3
console.log(findMiddleIndex([1,-1,4])); // 2
console.log(findMiddleIndex([2,5])); // -1
