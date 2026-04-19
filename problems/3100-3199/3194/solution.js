/*
 * @lc app=leetcode id=3194 lang=javascript
 *
 * [3194] Minimum Average of Smallest and Largest Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a, b) => a - b);
    let result = Infinity;
    for (let l = 0, r = nums.length - 1; l < r; l++, r--) {
        result = Math.min(result, (nums[l] + nums[r]) / 2);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minimumAverage([7,8,3,4,15,13,4,1])); // 5.5
console.log(minimumAverage([1,9,8,3,10,5])); // 5.5
console.log(minimumAverage([1,2,3,7,8,9])); // 5
