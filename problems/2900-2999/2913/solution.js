/*
 * @lc app=leetcode id=2913 lang=javascript
 *
 * [2913] Subarrays Distinct Element Sum of Squares I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const n = nums.length;
    let result = 0;
    for (let i = 0; i < n; i++) {
        const seen = new Set();
        for (let j = i; j < n; j++) {
            seen.add(nums[j]);
            result += seen.size * seen.size;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(sumCounts([1,2,1])); // 15
console.log(sumCounts([1,1])); // 3
console.log(sumCounts([2,2])); // 3
