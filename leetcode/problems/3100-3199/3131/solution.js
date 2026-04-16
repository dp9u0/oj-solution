/*
 * @lc app=leetcode id=3131 lang=javascript
 *
 * [3131] Find the Integer Added to Array I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    return Math.min(...nums2) - Math.min(...nums1);
};
// @lc code=end

// TEST:
console.log(addedInteger([2,6,4], [9,7,5])); // 3
console.log(addedInteger([10], [5])); // -5
console.log(addedInteger([1,1,1,1], [1,1,1,1])); // 0
