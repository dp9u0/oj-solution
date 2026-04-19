/*
 * @lc app=leetcode id=2855 lang=javascript
 *
 * [2855] Minimum Right Shifts to Sort the Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function(nums) {
    const n = nums.length;
    let dropIdx = -1;
    let dropCount = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            dropCount++;
            dropIdx = i;
        }
    }

    if (dropCount === 0) return 0;
    if (dropCount > 1) return -1;
    return n - 1 - dropIdx;
};
// @lc code=end

// TEST:
console.log(minimumRightShifts([3,4,5,1,2]));  // 2
console.log(minimumRightShifts([1,3,5]));      // 0
console.log(minimumRightShifts([2,1,4]));      // -1
console.log(minimumRightShifts([5,1,2,3,4]));  // 1
