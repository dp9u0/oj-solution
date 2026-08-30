/*
 * @lc app=leetcode id=3912 lang=javascript
 *
 * [3912] Valid Elements in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function(nums) {
    const n = nums.length;
    // suffixMax[i] = max(nums[i..n-1]); suffixMax[n] = -Infinity (empty right side)
    const suffixMax = new Array(n + 1).fill(-Infinity);
    for (let i = n - 1; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i + 1], nums[i]);
    }
    const res = [];
    let leftMax = -Infinity;
    for (let i = 0; i < n; i++) {
        if (nums[i] > leftMax || nums[i] > suffixMax[i + 1]) {
            res.push(nums[i]);
        }
        leftMax = Math.max(leftMax, nums[i]);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findValidElements([1, 2, 4, 2, 3, 2])) === JSON.stringify([1, 2, 4, 3, 2])); // true
console.log(JSON.stringify(findValidElements([5, 5, 5, 5])) === JSON.stringify([5, 5])); // true
console.log(JSON.stringify(findValidElements([1])) === JSON.stringify([1])); // true
console.log(JSON.stringify(findValidElements([3, 1, 2])) === JSON.stringify([3, 2])); // true
console.log(JSON.stringify(findValidElements([1, 2, 3, 4])) === JSON.stringify([1, 2, 3, 4])); // true
console.log(JSON.stringify(findValidElements([4, 3, 2, 1])) === JSON.stringify([4, 3, 2, 1])); // true
console.log(JSON.stringify(findValidElements([2, 1, 2])) === JSON.stringify([2, 2])); // true
