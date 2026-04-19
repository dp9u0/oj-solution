/*
 * @lc app=leetcode id=3162 lang=javascript
 *
 * [3162] Find the Number of Good Pairs I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let result = 0;
    for (const a of nums1) {
        for (const b of nums2) {
            if (a % (b * k) === 0) result++;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(numberOfPairs([1,3,4], [1,3,4], 1));          // 5
console.log(numberOfPairs([1,2,4,12], [2,4], 3));         // 2
