/*
 * @lc app=leetcode id=2568 lang=javascript
 *
 * [2568] Minimum Impossible OR
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function(nums) {
    let set = new Set(nums);
    let x = 1;
    while (set.has(x)) x <<= 1;
    return x;
};
// @lc code=end

// TEST:
console.log(minImpossibleOR([2,1])); // 4
console.log(minImpossibleOR([5,3,2])); // 1
console.log(minImpossibleOR([1,2,4,8])); // 16
