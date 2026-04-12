/*
 * @lc app=leetcode id=2425 lang=javascript
 *
 * [2425] Bitwise XOR of All Pairings
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    let result = 0;

    // Each nums1[i] appears nums2.length times in pairings
    if (nums2.length % 2 === 1) {
        for (const x of nums1) result ^= x;
    }

    // Each nums2[j] appears nums1.length times in pairings
    if (nums1.length % 2 === 1) {
        for (const x of nums2) result ^= x;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(xorAllNums([2,1,3], [10,2,5,0])); // 13
console.log(xorAllNums([1,2], [3,4])); // 0
console.log(xorAllNums([1], [3])); // 2
