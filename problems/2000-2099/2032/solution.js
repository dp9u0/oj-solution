/*
 * @lc app=leetcode id=2032 lang=javascript
 *
 * [2032] Two Out of Three
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let count = {};
    for (const n of new Set(nums1)) count[n] = (count[n] || 0) | 1;
    for (const n of new Set(nums2)) count[n] = (count[n] || 0) | 2;
    for (const n of new Set(nums3)) count[n] = (count[n] || 0) | 4;
    let result = [];
    for (const [k, v] of Object.entries(count)) {
        if ((v & (v - 1)) !== 0) result.push(+k); // more than 1 bit set
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(twoOutOfThree([1,1,3,2], [2,3], [3]))); // [3,2]
console.log(JSON.stringify(twoOutOfThree([3,1], [2,3], [1,2]))); // [3,1,2]
console.log(JSON.stringify(twoOutOfThree([1,2,2], [4,3,3], [5]))); // []
