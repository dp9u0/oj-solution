/*
 * @lc app=leetcode id=3819 lang=javascript
 *
 * [3819] Rotate Non Negative Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var rotateElements = function(nums, k) {
    const positions = [];
    const nonNeg = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            positions.push(i);
            nonNeg.push(nums[i]);
        }
    }
    const n = nonNeg.length;
    if (n === 0) return nums;
    k = k % n;
    if (k > 0) {
        const rotated = nonNeg.slice(k).concat(nonNeg.slice(0, k));
        for (let i = 0; i < n; i++) {
            nums[positions[i]] = rotated[i];
        }
    }
    return nums;
};
// @lc code=end

// TEST:
console.log(rotateElements([1, -2, 3, -4], 3)); // [3, -2, 1, -4]
console.log(rotateElements([-3, -2, 7], 1)); // [-3, -2, 7]
console.log(rotateElements([5, 4, -9, 6], 2)); // [6, 5, -9, 4]
console.log(rotateElements([1, 2, 3], 1)); // [2, 3, 1]
