/*
 * @lc app=leetcode id=2670 lang=javascript
 *
 * [2670] Find the Distinct Difference Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const n = nums.length;
    const suffixDistinct = new Array(n + 1).fill(0);
    const seen = new Set();
    for (let i = n - 1; i >= 0; i--) {
        seen.add(nums[i]);
        suffixDistinct[i] = seen.size;
    }
    const result = [];
    const prefix = new Set();
    for (let i = 0; i < n; i++) {
        prefix.add(nums[i]);
        result.push(prefix.size - suffixDistinct[i + 1]);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(distinctDifferenceArray([1,2,3,4,5]))); // [-3,-1,1,3,5]
console.log(JSON.stringify(distinctDifferenceArray([3,2,3,4,2]))); // [-2,-1,0,2,3]
