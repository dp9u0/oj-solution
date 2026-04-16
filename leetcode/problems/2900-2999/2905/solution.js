/*
 * @lc app=leetcode id=2905 lang=javascript
 *
 * [2905] Find Indices With Index and Value Difference II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
    const n = nums.length;
    let maxIdx = 0, minIdx = 0;

    for (let j = indexDifference; j < n; j++) {
        const i = j - indexDifference;
        if (nums[i] > nums[maxIdx]) maxIdx = i;
        if (nums[i] < nums[minIdx]) minIdx = i;

        if (nums[maxIdx] - nums[j] >= valueDifference) return [maxIdx, j];
        if (nums[j] - nums[minIdx] >= valueDifference) return [minIdx, j];
    }

    return [-1, -1];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findIndices([5,1,4,1], 2, 4))); // [0,3]
console.log(JSON.stringify(findIndices([2,1], 0, 0))); // [0,0]
console.log(JSON.stringify(findIndices([1,2,3], 2, 4))); // [-1,-1]
