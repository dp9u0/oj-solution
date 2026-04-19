/*
 * @lc app=leetcode id=2576 lang=javascript
 *
 * [2576] Find the Maximum Number of Marked Indices
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let i = 0;
    let j = Math.floor((n + 1) / 2);

    while (j < n) {
        if (2 * nums[i] <= nums[j]) {
            i++;
        }
        j++;
    }

    return i * 2;
};
// @lc code=end

// TEST:
console.log(maxNumOfMarkedIndices([3,5,2,4])); // 2
console.log(maxNumOfMarkedIndices([9,2,5,4])); // 4
console.log(maxNumOfMarkedIndices([7,6,8])); // 0
