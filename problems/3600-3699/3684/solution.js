/*
 * @lc app=leetcode id=3684 lang=javascript
 *
 * [3684] Maximize Sum of At Most K Distinct Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    let distinct = [...new Set(nums)].sort((a, b) => b - a);
    return distinct.slice(0, k);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maxKDistinct([84,93,100,77,90], 3))); // [100,93,90]
console.log(JSON.stringify(maxKDistinct([84,93,100,77,93], 3))); // [100,93,84]
console.log(JSON.stringify(maxKDistinct([1,1,1,2,2,2], 6))); // [2,1]
