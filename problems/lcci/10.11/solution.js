/*
 * @lc app=leetcode.cn id=面试题 10.11 lang=javascript
 *
 * [面试题 10.11] 峰与谷
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    // 偶数位为峰、奇数位为谷；与左邻身份不符即交换（不破坏前缀）
    for (let i = 1; i < nums.length; i++) {
        const isValley = i % 2 === 1;
        if (isValley ? nums[i] > nums[i - 1] : nums[i] < nums[i - 1]) {
            [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]];
        }
    }
};
// @lc code=end

// TEST:
// 校验器：偶数位为峰（≥ 右邻）、奇数位为谷（≤ 右邻）
const isWiggle = nums => {
    for (let i = 0; i < nums.length - 1; i++) {
        const isPeak = i % 2 === 0;
        if (isPeak ? nums[i] < nums[i + 1] : nums[i] > nums[i + 1]) return false;
    }
    return true;
};
const a1 = [5, 3, 1, 2, 3];
wiggleSort(a1);
console.log(isWiggle(a1));
const a2 = [5, 8, 4, 2, 3, 4, 6];
wiggleSort(a2);
console.log(isWiggle(a2));
const a3 = [];
wiggleSort(a3);
console.log(isWiggle(a3) && a3.length === 0);
const a4 = [7];
wiggleSort(a4);
console.log(isWiggle(a4) && a4[0] === 7);
const a5 = [1, 1, 1, 1];
wiggleSort(a5);
console.log(isWiggle(a5));
const rand = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100));
wiggleSort(rand);
console.log(isWiggle(rand));
