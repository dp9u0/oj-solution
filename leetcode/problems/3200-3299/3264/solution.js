/*
 * @lc app=leetcode id=3264 lang=javascript
 *
 * [3264] Final Array State After K Multiplication Operations I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for (let i = 0; i < k; i++) {
        let minIdx = 0;
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] < nums[minIdx]) minIdx = j;
        }
        nums[minIdx] *= multiplier;
    }
    return nums;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getFinalState([2,1,3,5,6], 5, 2))); // [8,4,6,5,6]
console.log(JSON.stringify(getFinalState([1,2], 3, 4))); // [16,8]
console.log(JSON.stringify(getFinalState([1,1,1], 2, 2))); // [2,2,1]
