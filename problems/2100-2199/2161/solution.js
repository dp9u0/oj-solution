/*
 * @lc app=leetcode id=2161 lang=javascript
 *
 * [2161] Partition Array According to Given Pivot
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const less = [], equal = [], greater = [];
    for (const num of nums) {
        if (num < pivot) less.push(num);
        else if (num === pivot) equal.push(num);
        else greater.push(num);
    }
    return [...less, ...equal, ...greater];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(pivotArray([9, 12, 5, 10, 14, 3, 10], 10))); // [9,5,3,10,10,12,14]
console.log(JSON.stringify(pivotArray([-3, 4, 3, 2], 2))); // [-3,2,4,3]
console.log(JSON.stringify(pivotArray([1, 1, 1], 1))); // [1,1,1]
