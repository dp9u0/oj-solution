/*
 * @lc app=leetcode.cn id=4058 lang=javascript
 *
 * [4058] 一个子数组循环移动后的最大脉冲值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxValue = function(nums) {
    const ravonelqis = nums;
    const n = ravonelqis.length;
    let p = 0; // P[t]，前缀交替和
    const maxP = [-Infinity, -Infinity]; // 各奇偶下已见 P[s] 的最大值
    let best = 0; // 最优增益（不操作则为 0）
    for (let t = 1; t <= n; t++) {
        maxP[(t - 1) & 1] = Math.max(maxP[(t - 1) & 1], p);
        p += ((t - 1) & 1) === 0 ? ravonelqis[t - 1] : -ravonelqis[t - 1];
        best = Math.max(best, maxP[t & 1] - p);
    }
    return p + 2 * best; // p 最终为 P[n]，即原脉冲值
};
// @lc code=end

// TEST:
console.log(maxValue([1, 5, 2])); // 6 (旋转 [0..1])
console.log(maxValue([6, 4, 3])); // 7 (旋转 [1..2])
console.log(maxValue([9, 7])); // 2 (不操作)
console.log(maxValue([5])); // 5 (n=1 无法旋转)
console.log(maxValue([1, -1])); // 2 (不操作)
console.log(maxValue([1, 5, 2, 9])); // 11 (旋转 [0..3])
console.log(maxValue([2, -4, 6, -8, 10])); // 30 (不操作最优)
console.log(maxValue([-3, -5])); // 2 (不操作)
