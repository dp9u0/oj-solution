/*
 * @lc app=leetcode.cn id=163 lang=javascript
 *
 * [163] 缺失的区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const res = [];
    let prev = lower - 1;
    for (let i = 0; i <= nums.length; i++) {
        const cur = i < nums.length ? nums[i] : upper + 1;
        if (cur > prev + 1) res.push([prev + 1, cur - 1]);
        prev = cur;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99)); // [[2,2],[4,49],[51,74],[76,99]]
console.log(findMissingRanges([-1], -1, -1)); // []
console.log(findMissingRanges([], 1, 3)); // [[1,3]]
console.log(findMissingRanges([5], 1, 10)); // [[1,4],[6,10]]
console.log(findMissingRanges([1, 2, 3], 1, 3)); // []
