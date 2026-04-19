/*
 * @lc app=leetcode id=3011 lang=javascript
 *
 * [3011] Find if Array Can Be Sorted
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    const n = nums.length;
    const bitCount = (x) => x.toString(2).replace(/0/g, '').length;

    let prevMax = 0;
    let i = 0;

    while (i < n) {
        const bits = bitCount(nums[i]);
        let curMin = nums[i];
        let curMax = nums[i];
        let j = i;

        while (j < n && bitCount(nums[j]) === bits) {
            curMin = Math.min(curMin, nums[j]);
            curMax = Math.max(curMax, nums[j]);
            j++;
        }

        if (curMin < prevMax) return false;
        prevMax = curMax;
        i = j;
    }

    return true;
};
// @lc code=end

// TEST:
console.log(canSortArray([8, 4, 2, 30, 15])); // true
console.log(canSortArray([1, 2, 3, 4, 5])); // true
console.log(canSortArray([3, 16, 8, 4, 2])); // false
console.log(canSortArray([5])); // true
