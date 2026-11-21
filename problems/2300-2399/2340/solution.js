/*
 * @lc app=leetcode.cn id=2340 lang=javascript
 *
 * [2340] 生成有效数组的最少交换次数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function(nums) {
    const n = nums.length;
    let iMin = 0, iMax = 0;
    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[iMin]) iMin = i; // strict: leftmost min
        if (nums[i] >= nums[iMax]) iMax = i; // non-strict: rightmost max
    }
    let swaps = iMin + (n - 1 - iMax);
    if (iMin > iMax) swaps--;
    return swaps;
};
// @lc code=end

// TEST:
console.log(minimumSwaps([3,4,5,5,3,1])); // 6
console.log(minimumSwaps([9])); // 0
console.log(minimumSwaps([1,2,3])); // 0
console.log(minimumSwaps([3,1,2])); // 2 (min idx1 -> 1 swap; max idx0 -> 2 swaps; paths cross? 1 > 0 -> -1 -> 2)
console.log(minimumSwaps([2,1])); // 1 (paths cross: 1 + 1 - 1 = 1)
