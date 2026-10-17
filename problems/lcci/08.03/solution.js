/*
 * @lc app=leetcode.cn id=面试题 08.03 lang=javascript
 *
 * [面试题 08.03] 魔术索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    // 跳跃剪枝：nums[i] > i 时区间 (i, nums[i]) 内下标必小于值，可整体跳过
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === i) return i;
        i = Math.max(i + 1, nums[i]);
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(findMagicIndex([0, 2, 3, 4, 5]) === 0);
console.log(findMagicIndex([1, 1, 1]) === 1);
console.log(findMagicIndex([2, 3, 4]) === -1);
console.log(findMagicIndex([0, 0, 3, 3]) === 0);
console.log(findMagicIndex([3, 3, 3, 3, 3]) === 3);
console.log(findMagicIndex([5, 5, 5, 5, 5]) === -1);
// 1e6 全相同负值大数组，验证性能与不爆栈
const big = new Array(1000000).fill(-5);
console.log(findMagicIndex(big) === -1);
