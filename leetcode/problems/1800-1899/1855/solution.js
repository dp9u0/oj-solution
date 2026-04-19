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
    const n1 = nums1.length, n2 = nums2.length;
    let ans = 0;
    for (let i = 0, j = 0; i < n1; i++) {
        j = Math.max(j, i);
        while (j < n2 && nums2[j] >= nums1[i]) j++;
        ans = Math.max(ans, j - 1 - i);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxDistance([55,30,5,4,2], [100,20,10,10,5]) === 2);
console.log(maxDistance([2,2,2], [10,10,1]) === 1);
console.log(maxDistance([30,29,19,5], [25,25,25,25,25]) === 2);
console.log(maxDistance([1], [1]) === 0);
console.log(maxDistance([5,4], [3,2]) === 0);
