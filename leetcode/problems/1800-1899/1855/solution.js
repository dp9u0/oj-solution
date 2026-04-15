/*
 * @lc app=leetcode id=1855 lang=javascript
 *
 * [1855] Maximum Distance Between a Pair of Values
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    let result = 0;
    let j = 0;

    for (let i = 0; i < m; i++) {
        j = Math.max(j, i);
        while (j < n && nums2[j] >= nums1[i]) j++;
        if (j > i) result = Math.max(result, j - 1 - i);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maxDistance([55,30,5,4,2], [100,20,10,10,5]));  // 2
console.log(maxDistance([2,2,2], [10,10,1]));                 // 1
console.log(maxDistance([30,29,19,5], [25,25,25,25,25]));    // 2
