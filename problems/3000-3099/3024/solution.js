/*
 * @lc app=leetcode id=3024 lang=javascript
 *
 * [3024] Type of Triangle
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    nums.sort((a, b) => a - b);
    if (nums[0] + nums[1] <= nums[2]) return 'none';
    if (nums[0] === nums[1] && nums[1] === nums[2]) return 'equilateral';
    if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) return 'isosceles';
    return 'scalene';
};
// @lc code=end

// TEST:
console.log(triangleType([3,3,3]));   // equilateral
console.log(triangleType([3,4,5]));   // scalene
console.log(triangleType([5,3,4]));   // scalene
console.log(triangleType([5,5,3]));   // isosceles
console.log(triangleType([1,2,10]));  // none
