/*
 * @lc app=leetcode id=2733 lang=javascript
 *
 * [2733] Neither Minimum nor Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if (nums.length <= 2) return -1;
    const a = nums[0], b = nums[1], c = nums[2];
    if (a > Math.min(b, c) && a < Math.max(b, c)) return a;
    if (b > Math.min(a, c) && b < Math.max(a, c)) return b;
    return c;
};
// @lc code=end

// TEST:
console.log(findNonMinOrMax([3,2,1,4]) === 2 || findNonMinOrMax([3,2,1,4]) === 3);
console.log(findNonMinOrMax([1,2]) === -1);
console.log(findNonMinOrMax([2,1,3]) === 2);
console.log(findNonMinOrMax([5]) === -1);
console.log(findNonMinOrMax([3,1,2]) === 3 || findNonMinOrMax([3,1,2]) === 2);
