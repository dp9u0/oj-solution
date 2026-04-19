/*
 * @lc app=leetcode id=1748 lang=javascript
 *
 * [1748] Sum of Unique Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const count = {};
    for (const n of nums) count[n] = (count[n] || 0) + 1;
    let sum = 0;
    for (const n in count) {
        if (count[n] === 1) sum += Number(n);
    }
    return sum;
};
// @lc code=end

// TEST:
console.log(sumOfUnique([1,2,3,2])); // 4
console.log(sumOfUnique([1,1,1,1,1])); // 0
console.log(sumOfUnique([1,2,3,4,5])); // 15
