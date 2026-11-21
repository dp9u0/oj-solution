/*
 * @lc app=leetcode.cn id=2184 lang=javascript
 *
 * [2184] 建造坚实的砖墙的方法数
 */

// @lc code=start
/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} bricks
 * @return {number}
 */
var buildWall = function(height, width, bricks) {
    const MOD = 1000000007;
    const rows = [];
    const dfs = (pos, mask) => {
        if (pos === width) {
            rows.push(mask);
            return;
        }
        for (const b of bricks) {
            if (pos + b > width) continue;
            dfs(pos + b, pos + b < width ? mask | (1 << (pos + b)) : mask);
        }
    };
    dfs(0, 0);
    let dp = new Array(rows.length).fill(1);
    for (let h = 1; h < height; h++) {
        const nd = new Array(rows.length).fill(0);
        for (let a = 0; a < rows.length; a++) {
            for (let b = 0; b < rows.length; b++) {
                if ((rows[a] & rows[b]) === 0) {
                    nd[b] = (nd[b] + dp[a]) % MOD;
                }
            }
        }
        dp = nd;
    }
    let ans = 0;
    for (const v of dp) ans = (ans + v) % MOD;
    return ans;
};
// @lc code=end

// TEST:
console.log(buildWall(2, 3, [1,2])); // 2
console.log(buildWall(1, 1, [5])); // 0
console.log(buildWall(1, 3, [1,2])); // 2 (single row, all compositions: 3)
console.log(buildWall(3, 2, [1,2])); // 5 (rows {1} and {}; DP trace: sums 2 -> 3 -> 5)
