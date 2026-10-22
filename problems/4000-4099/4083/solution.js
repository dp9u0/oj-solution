/*
 * @lc app=leetcode.cn id=4083 lang=javascript
 *
 * [4083] 使相邻元素按位异或非零的最少删除次数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletions = function(nums) {
    // 异或为 0 ⟺ 两数相等：每个极大同值连续段保留 1 个，删 n - 段数
    let runs = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) runs++;
    }
    return nums.length - runs;
};
// @lc code=end

// TEST:
console.log(minDeletions([1, 1, 2, 2, 2, 3]) === 3);
console.log(minDeletions([4, 4, 9, 4]) === 1);
console.log(minDeletions([1, 2, 3]) === 0);
console.log(minDeletions([7, 7]) === 1);
console.log(minDeletions([5]) === 0);
