/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for (const x of nums) {
        if (String(x).length % 2 === 0) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(findNumbers([12,345,2,6,7896])); // 2
console.log(findNumbers([555,901,482,1771])); // 1
console.log(findNumbers([1])); // 0
console.log(findNumbers([10])); // 1
console.log(findNumbers([100000])); // 1 (6 digits)
