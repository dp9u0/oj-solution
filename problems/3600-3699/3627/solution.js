/*
 * @lc app=leetcode id=3627 lang=javascript
 *
 * [3627] Maximum Median Sum of Subsequences of Size 3
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumMedianSum = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let sum = 0;
    for (let i = Math.floor(n / 3); i < n; i += 2) {
        sum += nums[i];
    }
    return sum;
};
// @lc code=end

// TEST:
console.log(maximumMedianSum([2,1,3,2,1,3]));       // 5
console.log(maximumMedianSum([1,1,10,10,10,10]));    // 20
console.log(maximumMedianSum([1,2,3,4,5,6,7,8,9]));  // 18
console.log(maximumMedianSum([5,5,5]));               // 5
console.log(maximumMedianSum([1,2,3]));               // 2
