/*
 * @lc app=leetcode.cn id=4054 lang=javascript
 *
 * [4054] 统计影子数对 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var shadowPairs = function(nums) {
    // 单调非递减栈，分组压缩 [value, count]；total = 栈内候选总数
    const stack = [];
    let total = 0;
    let ans = 0;
    for (const x of nums) {
        // 弹出所有 > x 的候选：与 j 不配对且被 x 永久挡住
        while (stack.length && stack[stack.length - 1][0] > x) {
            total -= stack[stack.length - 1][1];
            stack.pop();
        }
        // 栈内剩余全部 <= x；严格 < x 的与 j 组成影子对（== x 的不配对）
        const topEq = stack.length && stack[stack.length - 1][0] === x ? stack[stack.length - 1][1] : 0;
        ans += total - topEq;
        if (topEq) stack[stack.length - 1][1]++;
        else stack.push([x, 1]);
        total++;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(shadowPairs([3, 1, 4, 1, 5])); // Expected: 3
console.log(shadowPairs([1, 2, 3, 4])); // Expected: 6 (all pairs visible)
console.log(shadowPairs([4, 3, 2, 1])); // Expected: 0
console.log(shadowPairs([1, 1, 1])); // Expected: 0 (no strict less)
console.log(shadowPairs([2, 1, 3])); // Expected: 1
console.log(shadowPairs([1, 3, 2, 4])); // Expected: 4
