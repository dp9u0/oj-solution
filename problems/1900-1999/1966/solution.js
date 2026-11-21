/*
 * @lc app=leetcode.cn id=1966 lang=javascript
 *
 * [1966] 未排序数组中的可被二分查找的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var binarySearchableNumbers = function(nums) {
    const n = nums.length;
    const sufMin = new Array(n);
    sufMin[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        sufMin[i] = Math.min(nums[i], sufMin[i + 1]);
    }
    let count = 0;
    let preMax = -Infinity;
    for (let i = 0; i < n; i++) {
        if (nums[i] > preMax && (i === n - 1 || nums[i] < sufMin[i + 1])) count++;
        if (nums[i] > preMax) preMax = nums[i];
    }
    return count;
};
// @lc code=end

// TEST:
console.log(binarySearchableNumbers([7])); // 1
console.log(binarySearchableNumbers([-1,5,2])); // 1
console.log(binarySearchableNumbers([1,2,3,4,5])); // 5
console.log(binarySearchableNumbers([5,4,3,2,1])); // 0
console.log(binarySearchableNumbers([2,1,3])); // 1 (only 3)
