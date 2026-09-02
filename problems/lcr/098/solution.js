/*
 * @lc app=leetcode.cn id=LCR 098 lang=javascript
 *
 * [LCR 098] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // dp[j] 表示当前行到第 j 列的路径数(滚动数组)
    const dp = new Array(n).fill(1); // 第一行只能向右,全为 1

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1]; // 上方 dp[j] + 左方 dp[j-1]
        }
    }
    return dp[n - 1];
};
// @lc code=end

// TEST:
// 示例 1: m=3, n=7 -> 28
console.log(uniquePaths(3, 7) === 28);

// 示例 2: m=3, n=2 -> 3
console.log(uniquePaths(3, 2) === 3);

// 示例 3: m=7, n=3 -> 28 (对称)
console.log(uniquePaths(7, 3) === 28);

// 示例 4: m=3, n=3 -> 6
console.log(uniquePaths(3, 3) === 6);

// 1x1 -> 1
console.log(uniquePaths(1, 1) === 1);

// 1xn 直线 -> 1
console.log(uniquePaths(1, 5) === 1);

// m x 1 直线 -> 1
console.log(uniquePaths(5, 1) === 1);

// 2x2 -> 2
console.log(uniquePaths(2, 2) === 2);

// 2x3 -> 3
console.log(uniquePaths(2, 3) === 3);

// 100x1 -> 1; 1x100 -> 1
console.log(uniquePaths(100, 1) === 1 && uniquePaths(1, 100) === 1);

// 边界大值 51x9 -> 答案应为 C(58,8) ≈ 近 2000万内? 精确验证
// C(58,8) = 1916797311? 用对称公式核对 JS number 精确性
console.log(uniquePaths(10, 10) === 48620); // C(18,9)=48620
