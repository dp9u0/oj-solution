/*
 * @lc app=leetcode.cn id=2495 lang=javascript
 *
 * [2495] 乘积为偶数的子数组数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var evenProduct = function(nums) {
    const n = nums.length;
    let total = (n * (n + 1)) / 2;
    let run = 0;
    for (const v of nums) {
        if (v % 2 === 1) run++;
        else {
            total -= (run * (run + 1)) / 2;
            run = 0;
        }
    }
    total -= (run * (run + 1)) / 2;
    return total;
};
// @lc code=end

// TEST:
console.log(evenProduct([9,6,7,13])); // 6
console.log(evenProduct([7,3,5])); // 0
console.log(evenProduct([2])); // 1
console.log(evenProduct([1,2,3,4])); // 8 (10 total minus two all-odd singles)
console.log(evenProduct([2,2])); // 3
