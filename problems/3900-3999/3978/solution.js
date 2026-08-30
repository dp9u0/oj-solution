/*
 * @lc app=leetcode id=3978 lang=javascript
 *
 * [3978] Unique Middle Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    const mid = Math.floor(nums.length / 2);
    let count = 0;
    for (const num of nums) {
        if (num === nums[mid]) count++;
    }
    return count === 1;
};
// @lc code=end

// TEST:
console.log(isMiddleElementUnique([1, 2, 3])); // true
console.log(isMiddleElementUnique([1, 2, 2])); // false
console.log(isMiddleElementUnique([5])); // true
console.log(isMiddleElementUnique([7, 7, 7, 7, 7])); // false
console.log(isMiddleElementUnique([1, 3, 2, 3, 4])); // true
console.log(isMiddleElementUnique([1, 2, 1, 2, 1])); // false
console.log(isMiddleElementUnique([9, 1, 9, 2, 3])); // false
