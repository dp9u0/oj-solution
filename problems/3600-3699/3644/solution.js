/*
 * @lc app=leetcode.cn id=3644 lang=javascript
 *
 * [3644] 排序排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sortPermutation = function(nums) {
    // 答案 = 所有错位元素的按位与；无错位元素则返回 0
    let k = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            k = k === -1 ? nums[i] : k & nums[i];
        }
    }
    return k === -1 ? 0 : k;
};
// @lc code=end

// TEST:
console.log(sortPermutation([0, 3, 2, 1]) === 1); // 示例1：错位元素 3、1，AND 为 1
console.log(sortPermutation([0, 1, 3, 2]) === 2); // 示例2：错位元素 3、2，AND 为 2
console.log(sortPermutation([3, 2, 1, 0]) === 0); // 示例3：全部错位，AND 归零
console.log(sortPermutation([0, 1, 2, 3]) === 0); // 已有序
console.log(sortPermutation([0]) === 0); // 单元素
console.log(sortPermutation([1, 0]) === 0); // 1 AND 0 = 0
console.log(sortPermutation([0, 1, 7, 6]) === 6); // 错位元素 7、6，AND 为 6
console.log(sortPermutation([2, 0, 1]) === 0); // 三元环，AND 归零
