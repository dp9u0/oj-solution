/*
 * @lc app=leetcode id=3833 lang=javascript
 *
 * [3833] Count Dominant Indices
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function(nums) {
    const n = nums.length;
    let suffixSum = 0;
    let count = 0;
    let result = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (count > 0 && nums[i] > suffixSum / count) {
            result++;
        }
        suffixSum += nums[i];
        count++;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(dominantIndices([5,4,3]));       // 2
console.log(dominantIndices([4,1,2]));       // 1
console.log(dominantIndices([1]));           // 0
console.log(dominantIndices([1,1]));         // 0
console.log(dominantIndices([2,1]));         // 1
console.log(dominantIndices([3,2,1]));       // 2
