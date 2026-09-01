/*
 * @lc app=leetcode id=576 lang=javascript
 *
 * [576] Out of Boundary Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const MOD = 1e9 + 7;
    // memo[i][j][k]: 从 (i, j) 出发、剩 k 步时移出边界的路径数
    const memo = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => new Array(maxMove + 1).fill(-1))
    );
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const dfs = (row, col, movesLeft) => {
        if (movesLeft === 0) return 0;
        if (memo[row][col][movesLeft] !== -1) return memo[row][col][movesLeft];
        let count = 0;
        for (const [dr, dc] of directions) {
            const nr = row + dr;
            const nc = col + dc;
            if (nr < 0 || nr >= m || nc < 0 || nc >= n) {
                count = (count + 1) % MOD;
            } else {
                count = (count + dfs(nr, nc, movesLeft - 1)) % MOD;
            }
        }
        memo[row][col][movesLeft] = count;
        return count;
    };

    return dfs(startRow, startColumn, maxMove);
};
// @lc code=end

// TEST:
console.log(findPaths(2, 2, 2, 0, 0)); // 6
console.log(findPaths(1, 3, 3, 0, 1)); // 12
console.log(findPaths(1, 1, 1, 0, 0)); // 4（四步都直接出界）
console.log(findPaths(1, 1, 0, 0, 0)); // 0（无移动次数）
console.log(findPaths(2, 2, 0, 0, 0)); // 0（无移动次数）
console.log(findPaths(8, 50, 23, 5, 26)); // 914783380（大规模用例）
