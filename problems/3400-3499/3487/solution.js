/*
 * @lc app=leetcode id=3487 lang=javascript
 *
 * [3487] Maximum Unique Subarray Sum After Deletion
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    const seen = new Set();
    let sum = 0;
    let maxVal = -Infinity;
    for (const num of nums) {
        maxVal = Math.max(maxVal, num);
        if (num > 0 && !seen.has(num)) {
            seen.add(num);
            sum += num;
        }
    }
    return seen.size > 0 ? sum : maxVal;
};
// @lc code=end

// TEST:
console.log(maxSum([1,2,3,4,5]));          // 15
console.log(maxSum([1,1,0,1,1]));          // 1
console.log(maxSum([1,2,-1,-2,1,0,-1]));   // 3
