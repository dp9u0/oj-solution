/*
 * @lc app=leetcode id=2771 lang=javascript
 *
 * [2771] Longest Non-decreasing Subarray From Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxNonDecreasingLength = function(nums1, nums2) {
    const n = nums1.length;
    let prev0 = 1, prev1 = 1, ans = 1;
    for (let i = 1; i < n; i++) {
        let cur0 = 1, cur1 = 1;
        if (nums1[i] >= nums1[i - 1]) cur0 = Math.max(cur0, prev0 + 1);
        if (nums1[i] >= nums2[i - 1]) cur0 = Math.max(cur0, prev1 + 1);
        if (nums2[i] >= nums1[i - 1]) cur1 = Math.max(cur1, prev0 + 1);
        if (nums2[i] >= nums2[i - 1]) cur1 = Math.max(cur1, prev1 + 1);
        prev0 = cur0; prev1 = cur1;
        ans = Math.max(ans, cur0, cur1);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxNonDecreasingLength([2,3,1], [1,2,1])); // 2
console.log(maxNonDecreasingLength([1,3,2,1], [2,2,3,4])); // 4
console.log(maxNonDecreasingLength([1,1], [2,2])); // 2
console.log(maxNonDecreasingLength([5,4,3], [1,2,3])); // 3
console.log(maxNonDecreasingLength([1], [2])); // 1
