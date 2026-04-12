/*
 * @lc app=leetcode id=2971 lang=javascript
 *
 * [2971] Find Polygon With the Largest Perimeter
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);

    let prefixSum = 0;
    let result = -1;

    for (let i = 0; i < nums.length; i++) {
        if (i >= 2 && prefixSum > nums[i]) {
            result = prefixSum + nums[i];
        }
        prefixSum += nums[i];
    }

    return result;
};
// @lc code=end

// TEST:
console.log(largestPerimeter([5, 5, 5]));
// Expected: 15

console.log(largestPerimeter([1, 12, 1, 2, 5, 50, 3]));
// Expected: 12

console.log(largestPerimeter([5, 5, 50]));
// Expected: -1
