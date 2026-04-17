/*
 * @lc app=leetcode id=2148 lang=javascript
 *
 * [2148] Count Elements With Strictly Smaller and Greater Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    const mn = Math.min(...nums);
    const mx = Math.max(...nums);
    if (mn === mx) return 0;
    return nums.filter(x => x > mn && x < mx).length;
};
// @lc code=end

// TEST:
console.log(countElements([11, 7, 2, 15]));     // 2
console.log(countElements([-3, 3, 3, 90]));      // 2
console.log(countElements([1, 1]));               // 0
console.log(countElements([1, 2, 3]));            // 1
console.log(countElements([5]));                  // 0
