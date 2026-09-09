/*
 * @lc app=leetcode.cn id=4044 lang=javascript
 *
 * [4044] 统计好循环移位的数量
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countGoodRotations = function(nums) {
    const n = nums.length, h = n / 2;
    let total = 0;
    for (const x of nums) total += x;
    // rotation starting at p: good iff 2 * sum(nums[p..p+h-1] circular) > total
    let first = 0;
    for (let i = 0; i < h; i++) first += nums[i];
    let count = 0;
    for (let p = 0; p < n; p++) {
        if (2 * first > total) count++;
        first += nums[(p + h) % n] - nums[p];
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countGoodRotations([1, 2, 3, 4, 5, 6]) === 3);
console.log(countGoodRotations([1, 2, 1, 2]) === 0);
console.log(countGoodRotations([2, 1]) === 1);
console.log(countGoodRotations([1, 1]) === 0);
console.log(countGoodRotations([5, 1, 1, 1]) === 2);
console.log(countGoodRotations([1, 1, 1, 9]) === 2);
console.log(countGoodRotations([9, 9, 1, 1, 1, 1]) === 2);
