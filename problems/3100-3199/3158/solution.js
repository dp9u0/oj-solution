/*
 * @lc app=leetcode id=3158 lang=javascript
 *
 * [3158] Find the XOR of Numbers Which Appear Twice
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let seen = new Set();
    let result = 0;
    for (const n of nums) {
        if (seen.has(n)) result ^= n;
        else seen.add(n);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(duplicateNumbersXOR([1,2,1,3])); // 1
console.log(duplicateNumbersXOR([1,2,3])); // 0
console.log(duplicateNumbersXOR([1,2,2,1])); // 3
