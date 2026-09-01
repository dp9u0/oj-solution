/*
 * @lc app=leetcode id=553 lang=javascript
 *
 * [553] Optimal Division
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    if (nums.length === 1) return String(nums[0]);
    if (nums.length === 2) return nums[0] + '/' + nums[1];
    return nums[0] + '/(' + nums.slice(1).join('/') + ')';
};
// @lc code=end

// TEST:
console.log(optimalDivision([1000, 100, 10, 2]) === '1000/(100/10/2)');
console.log(optimalDivision([2, 3, 4]) === '2/(3/4)');
console.log(optimalDivision([2]) === '2');
console.log(optimalDivision([2, 3]) === '2/3');
console.log(optimalDivision([6, 2, 3, 4]) === '6/(2/3/4)');
