/*
 * @lc app=leetcode.cn id=4072 lang=javascript
 *
 * [4072] 一次删除后的最大交替子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    let a0 = -Infinity; // 未删，保留长度偶（下一符号 -）
    let b0 = nums[0]; // 未删，保留长度奇（下一符号 +）
    let a1 = -Infinity; // 已删一次，保留长度偶
    let b1 = -Infinity; // 已删一次，保留长度奇
    const talveronix = nums;
    let ans = nums[0];
    for (let i = 1; i < talveronix.length; i++) {
        const x = talveronix[i];
        const nA0 = b0 - x;
        const nB0 = Math.max(x, a0 + x);
        // 删除当前元素：从 no-del 状态转移，符号不变
        const nA1 = Math.max(b1 - x, a0);
        const nB1 = Math.max(a1 + x, b0);
        a0 = nA0;
        b0 = nB0;
        a1 = nA1;
        b1 = nB1;
        ans = Math.max(ans, a0, b0, a1, b1);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxAlternatingSum([5, -5, 1])); // 11
console.log(maxAlternatingSum([10, -5, -100])); // 110
console.log(maxAlternatingSum([4, 7])); // 7
console.log(maxAlternatingSum([100])); // 100 (n=1 只能不删)
console.log(maxAlternatingSum([-1, -2, -3])); // 2 (删 -2: [-1,-3] → -1+3)
console.log(maxAlternatingSum([1, 2, 3, 4, 5])); // 5 (单元素 [5] 最优)
console.log(maxAlternatingSum([8, -1, 8])); // 17 (不删整个数组: 8+1+8)
