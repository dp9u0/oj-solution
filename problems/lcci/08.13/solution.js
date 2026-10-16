/*
 * @lc app=leetcode.cn id=面试题 08.13 lang=javascript
 *
 * [面试题 08.13] 堆箱子
 */

// @lc code=start
/**
 * @param {number[][]} box
 * @return {number}
 */
var pileBox = function(box) {
    // 按宽度降序排序；w 相等的箱子三维不可能严格大于彼此，不会互叠
    box.sort((a, b) => b[0] - a[0] || b[1] - a[1] || b[2] - a[2]);
    const n = box.length;
    // dp[i]: 以箱子 i 为最顶箱的最大高度；合法堆叠必为排序后序列的子序列
    const dp = new Array(n);
    let best = 0;
    for (let i = 0; i < n; i++) {
        const [wi, di, hi] = box[i];
        dp[i] = hi;
        for (let j = 0; j < i; j++) {
            const [wj, dj, hj] = box[j];
            if (wj > wi && dj > di && hj > hi && dp[j] + hi > dp[i]) {
                dp[i] = dp[j] + hi;
            }
        }
        if (dp[i] > best) best = dp[i];
    }
    return best;
};
// @lc code=end

// TEST:
console.log(pileBox([[1, 1, 1], [2, 2, 2], [3, 3, 3]]) === 6);
console.log(pileBox([[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]) === 10);
console.log(pileBox([[5, 5, 5]]) === 5);
console.log(pileBox([[5, 5, 5], [5, 5, 5]]) === 5); // 相同箱子不能互叠
console.log(pileBox([[4, 2, 3], [1, 1, 1], [3, 2, 2]]) === 4); // [4,2,3] + [1,1,1]
console.log(pileBox([[1, 2, 3], [2, 3, 4]]) === 7);
console.log(pileBox([]) === 0);
