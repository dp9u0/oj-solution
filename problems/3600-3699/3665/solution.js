/*
 * @lc app=leetcode.cn id=3665 lang=javascript
 *
 * [3665] 统计镜子反射路径数目
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePaths = function(grid) {
    const MOD = 1e9 + 7;
    const m = grid.length;
    const n = grid[0].length;
    // land(i, j, d): 从 (i,j) 沿方向 d (0=右, 1=下) 出发最终落定的格子编号, -1 表示出界无效
    // 撞上镜子则转向 (右->下, 下->右) 后从镜子格继续; 每步 i+j 严格增加, 链是 DAG, 记忆化后每状态 O(1)
    const memo = new Int32Array(m * n * 2).fill(-2);
    const land = (i, j, d) => {
        const key = (i * n + j) * 2 + d;
        if (memo[key] !== -2) return memo[key];
        const ni = i + d;
        const nj = j + (1 - d);
        let res;
        if (ni >= m || nj >= n) res = -1;
        else if (grid[ni][nj] === 0) res = ni * n + nj;
        else res = land(ni, nj, 1 - d);
        memo[key] = res;
        return res;
    };

    // dp[p]: 到达格子 p 的路径数; 只向右/下走, 行序扫描即拓扑序
    const dp = new Int32Array(m * n);
    dp[0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const cur = dp[i * n + j];
            if (cur === 0) continue;
            for (let d = 0; d < 2; d++) {
                const t = land(i, j, d);
                if (t >= 0) dp[t] = (dp[t] + cur) % MOD;
            }
        }
    }
    return dp[m * n - 1];
};
// @lc code=end

// TEST:
console.log(uniquePaths([[0,1,0],[0,0,1],[1,0,0]])); // 5
console.log(uniquePaths([[0,0],[0,0]])); // 2
console.log(uniquePaths([[0,1,1],[1,1,0]])); // 1
console.log(uniquePaths([[0,1],[1,0]])); // 2 (两个方向的反射都落在 (1,1))
console.log(uniquePaths([[0,1],[0,0]])); // 2 (右撞镜反弹到 (1,1); 下再右直达)
console.log(uniquePaths([[0,1],[1,1],[1,1],[1,0]])); // 0 (两条反射链都出界)
