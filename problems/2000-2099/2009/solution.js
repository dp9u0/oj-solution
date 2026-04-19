/*
 * @lc app=leetcode id=2009 lang=javascript
 *
 * [2009] Minimum Number of Operations to Make Array Continuous
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    const unique = [...new Set(nums)].sort((a, b) => a - b);
    const m = unique.length;

    let result = n;
    let right = 0;

    for (let left = 0; left < m; left++) {
        while (right < m && unique[right] - unique[left] < n) {
            right++;
        }
        const count = right - left;
        result = Math.min(result, n - count);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(minOperations([4,2,5,3])); // 0
console.log(minOperations([1,2,3,5,6])); // 1
console.log(minOperations([1,10,100,1000])); // 3
