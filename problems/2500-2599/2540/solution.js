/*
 * @lc app=leetcode id=2540 lang=javascript
 *
 * [2540] Minimum Common Value
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) return nums1[i];
        if (nums1[i] < nums2[j]) i++;
        else j++;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(getCommon([1,2,3], [2,4])); // 2
console.log(getCommon([1,2,3,6], [2,3,4,5])); // 2
console.log(getCommon([1,3,5], [2,4,6])); // -1
console.log(getCommon([1], [1])); // 1
console.log(getCommon([1,2,3,4,5], [5,6,7])); // 5
