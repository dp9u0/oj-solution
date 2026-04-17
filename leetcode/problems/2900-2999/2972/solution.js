/*
 * @lc app=leetcode id=2972 lang=javascript
 *
 * [2972] Count the Number of Incremovable Subarrays II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
    const n = nums.length;

    let endPre = 0;
    while (endPre + 1 < n && nums[endPre + 1] > nums[endPre]) endPre++;
    if (endPre === n - 1) return n * (n + 1) / 2;

    let startSuf = n - 1;
    while (startSuf > 0 && nums[startSuf - 1] < nums[startSuf]) startSuf--;

    let count = 0;
    let j = startSuf;

    for (let l = 0; l <= endPre + 1; l++) {
        if (l > 0) {
            while (j < n && nums[j] <= nums[l - 1]) j++;
        }
        count += n - Math.max(l, j - 1);
    }

    return count;
};
// @lc code=end

// TEST:
console.log(incremovableSubarrayCount([1,2,3,4])); // 10
console.log(incremovableSubarrayCount([6,5,7,8])); // 7
console.log(incremovableSubarrayCount([8,7,6,6])); // 3
console.log(incremovableSubarrayCount([1,1])); // 3
console.log(incremovableSubarrayCount([5,4,3,2,1])); // 3
