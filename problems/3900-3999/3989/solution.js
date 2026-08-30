/*
 * @lc app=leetcode id=3989 lang=javascript
 *
 * [3989] Maximum Consistent Columns in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} limit
 * @return {number}
 */
var maxConsistentColumns = function(grid, limit) {
    const n = grid[0].length;
    const m = grid.length;

    // compat[a][b] = 1 表示列 a、b 相邻保留时对所有行都满足 |grid[r][b] - grid[r][a]| <= limit
    const compat = Array.from({ length: n }, () => new Uint8Array(n));
    for (let a = 0; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            let ok = 1;
            for (let r = 0; r < m; r++) {
                if (Math.abs(grid[r][b] - grid[r][a]) > limit) {
                    ok = 0;
                    break;
                }
            }
            compat[a][b] = ok;
        }
    }

    // dp[b]：以列 b 结尾的兼容子序列的最大长度
    const dp = new Array(n).fill(1);
    let best = 1;
    for (let b = 1; b < n; b++) {
        for (let a = 0; a < b; a++) {
            if (compat[a][b] && dp[a] + 1 > dp[b]) {
                dp[b] = dp[a] + 1;
            }
        }
        if (dp[b] > best) best = dp[b];
    }
    return best;
};
// @lc code=end

// TEST:
if (require.main === module) {
    // Example 1
    console.log(maxConsistentColumns([[-2, 0, 3]], 2) === 2);
    // Example 2
    console.log(maxConsistentColumns([[1, -1, 1], [2, 2, 2]], 1) === 2);
    // Example 3
    console.log(maxConsistentColumns([[-5, 5]], 9) === 1);
    // 单列，答案必为 1
    console.log(maxConsistentColumns([[42]], 0) === 1);
    // 全部保留：每行单调不降且差值都不超 limit
    console.log(maxConsistentColumns([[0, 1, 2, 3], [-3, -1, 0, 2]], 2) === 4);
    // limit=0 且有重复列：相同值列可全保留
    console.log(maxConsistentColumns([[5, 5, 5], [5, 5, 5]], 0) === 3);
    // 绝对值语义：递减列 |8-11|=3 <= 3 可保留，重复列差 0
    console.log(maxConsistentColumns([[11, 8, 8]], 3) === 3);
    // 递减但差值超限：|5-11|=6 > 5，只能留 1 列
    console.log(maxConsistentColumns([[11, 5]], 5) === 1);
    // 多行交叉：单看某一行能多留，联合约束下不行
    console.log(maxConsistentColumns([[0, 2, 3], [0, 3, 2]], 2) === 2);
}
