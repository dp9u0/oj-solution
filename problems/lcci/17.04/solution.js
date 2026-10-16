/*
 * @lc app=leetcode.cn id=面试题 17.04 lang=javascript
 *
 * [面试题 17.04] 消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 异或消去：初值 n，再与下标 0..n-1 及所有元素异或，成对抵消后剩下缺失数字
    let res = nums.length;
    for (let i = 0; i < nums.length; i++) {
        res ^= i ^ nums[i];
    }
    return res;
};
// @lc code=end

// TEST:
console.log(missingNumber([3, 0, 1]) === 2);
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) === 8);
console.log(missingNumber([0]) === 1);
console.log(missingNumber([1]) === 0);
console.log(missingNumber([0, 1]) === 2);
console.log(missingNumber([1, 2]) === 0);
