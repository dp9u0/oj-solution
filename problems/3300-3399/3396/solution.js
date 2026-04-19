/*
 * @lc app=leetcode id=3396 lang=javascript
 *
 * [3396] Minimum Number of Operations to Make Elements in Array Distinct
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const seen = new Set();
    let i = nums.length - 1;
    while (i >= 0 && !seen.has(nums[i])) {
        seen.add(nums[i]);
        i--;
    }
    return Math.ceil((i + 1) / 3);
};
// @lc code=end

// TEST:
console.log(minimumOperations([1,2,3,4,2,3,3,5,7])); // 2
console.log(minimumOperations([4,5,6,4,4])); // 2
console.log(minimumOperations([6,7,8,9])); // 0
console.log(minimumOperations([1,2,3])); // 0
console.log(minimumOperations([1,1,1])); // 1
