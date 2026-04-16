/*
 * @lc app=leetcode id=3115 lang=javascript
 *
 * [3115] Maximum Prime Difference
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function(nums) {
    let primes = new Set([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
    let first = -1, last = -1;
    for (let i = 0; i < nums.length; i++) {
        if (primes.has(nums[i])) {
            if (first === -1) first = i;
            last = i;
        }
    }
    return last - first;
};
// @lc code=end

// TEST:
console.log(maximumPrimeDifference([4,2,9,5,3])); // 3
console.log(maximumPrimeDifference([4,8,2,8])); // 0
console.log(maximumPrimeDifference([7])); // 0
