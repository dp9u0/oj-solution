/*
 * @lc app=leetcode id=2239 lang=javascript
 *
 * [2239] Find Closest Number to Zero
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let ans = nums[0];
    for (const num of nums) {
        if (Math.abs(num) < Math.abs(ans) || (Math.abs(num) === Math.abs(ans) && num > ans)) {
            ans = num;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(findClosestNumber([-4,-2,1,4,8])); // 1
console.log(findClosestNumber([2,-1,1]));       // 1
console.log(findClosestNumber([-5]));            // -5
