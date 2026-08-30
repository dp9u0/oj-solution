/*
 * @lc app=leetcode id=801 lang=javascript
 *
 * [801] Minimum Swaps To Make Sequences Increasing
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
    let keep = 0; // 不交换 nums1[i]/nums2[i] 时的最少交换次数
    let swap = 1; // 交换 nums1[i]/nums2[i] 时的最少交换次数
    for (let i = 1; i < nums1.length; i++) {
        let newKeep = Infinity;
        let newSwap = Infinity;
        if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
            newKeep = Math.min(newKeep, keep);
            newSwap = Math.min(newSwap, swap + 1);
        }
        if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
            newKeep = Math.min(newKeep, swap);
            newSwap = Math.min(newSwap, keep + 1);
        }
        keep = newKeep;
        swap = newSwap;
    }
    return Math.min(keep, swap);
};
// @lc code=end

// TEST:
console.log(minSwap([1, 3, 5, 4], [1, 2, 3, 7])); // 1
console.log(minSwap([0, 3, 5, 8, 9], [2, 1, 4, 6, 9])); // 1
console.log(minSwap([1, 2, 3], [4, 5, 6])); // 0
console.log(minSwap([0, 4, 4, 5, 9], [0, 1, 6, 8, 10])); // 1
console.log(minSwap([3, 3, 8, 9, 10], [1, 7, 4, 6, 8])); // 1
console.log(minSwap([0, 7, 8, 9, 10], [2, 3, 4, 5, 6])); // 0
