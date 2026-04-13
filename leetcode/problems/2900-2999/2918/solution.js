/*
 * @lc app=leetcode id=2918 lang=javascript
 *
 * [2918] Minimum Equal Sum of Two Arrays After Replacing Zeros
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    let sum1 = 0, zeros1 = 0;
    for (const num of nums1) {
        if (num === 0) zeros1++;
        sum1 += num;
    }

    let sum2 = 0, zeros2 = 0;
    for (const num of nums2) {
        if (num === 0) zeros2++;
        sum2 += num;
    }

    const minSum1 = sum1 + zeros1;
    const minSum2 = sum2 + zeros2;

    if (minSum1 === minSum2) return minSum1;
    if (minSum1 > minSum2) return zeros2 > 0 ? minSum1 : -1;
    return zeros1 > 0 ? minSum2 : -1;
};
// @lc code=end

// TEST:
console.log(minSum([3, 2, 0, 1, 0], [6, 5, 0])); // 12
console.log(minSum([2, 0, 2, 0], [1, 4])); // -1
console.log(minSum([1, 2, 3], [1, 2, 3])); // 6
console.log(minSum([0, 0, 0], [0])); // 3
