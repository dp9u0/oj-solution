/*
 * @lc app=leetcode id=2903 lang=javascript
 *
 * [2903] Find Indices With Index and Value Difference I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
    let n = nums.length;
    let minIdx = 0, maxIdx = 0;
    for (let j = indexDifference; j < n; j++) {
        let i = j - indexDifference;
        if (nums[i] < nums[minIdx]) minIdx = i;
        if (nums[i] > nums[maxIdx]) maxIdx = i;
        if (Math.abs(nums[j] - nums[minIdx]) >= valueDifference) return [minIdx, j];
        if (Math.abs(nums[j] - nums[maxIdx]) >= valueDifference) return [maxIdx, j];
    }
    return [-1, -1];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findIndices([5,1,4,1], 2, 4))); // [0,3]
console.log(JSON.stringify(findIndices([2,1], 0, 0))); // [0,0]
console.log(JSON.stringify(findIndices([1,2,3], 2, 4))); // [-1,-1]
