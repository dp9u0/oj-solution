/*
 * @lc app=leetcode.cn id=面试题 17.16 lang=javascript
 *
 * [面试题 17.16] 按摩师
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    // take/skip 滚动：接 x 必须基于前一个 skip；跳过则取两态较大者
    let take = 0;
    let skip = 0;
    for (const x of nums) {
        const t = skip + x;
        skip = Math.max(skip, take);
        take = t;
    }
    return Math.max(take, skip);
};
// @lc code=end

// TEST:
console.log(massage([1, 2, 3, 1]) === 4);
console.log(massage([2, 7, 9, 3, 1]) === 12);
console.log(massage([2, 1, 4, 5, 3, 1, 1, 3]) === 12);
console.log(massage([]) === 0);
console.log(massage([5]) === 5);
console.log(massage([1, 20]) === 20);
