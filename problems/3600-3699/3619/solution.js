/*
 * @lc app=leetcode.cn id=3619 lang=javascript
 *
 * [3619] 总价值可以被 K 整除的岛屿数目
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    const queue = [];
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) continue;
            // BFS flood fill one island; accumulate value at enqueue time (cell is zeroed then)
            let sum = 0, head = 0;
            queue.push(i, j);
            sum += grid[i][j];
            grid[i][j] = 0;
            while (head < queue.length) {
                const x = queue[head++], y = queue[head++];
                if (x > 0 && grid[x - 1][y] > 0) { sum += grid[x - 1][y]; grid[x - 1][y] = 0; queue.push(x - 1, y); }
                if (x < m - 1 && grid[x + 1][y] > 0) { sum += grid[x + 1][y]; grid[x + 1][y] = 0; queue.push(x + 1, y); }
                if (y > 0 && grid[x][y - 1] > 0) { sum += grid[x][y - 1]; grid[x][y - 1] = 0; queue.push(x, y - 1); }
                if (y < n - 1 && grid[x][y + 1] > 0) { sum += grid[x][y + 1]; grid[x][y + 1] = 0; queue.push(x, y + 1); }
            }
            queue.length = 0;
            if (sum % k === 0) count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
const cases = [
    { grid: [[0, 2, 1, 0, 0], [0, 5, 0, 0, 5], [0, 0, 1, 0, 0], [0, 1, 4, 7, 0], [0, 2, 0, 0, 8]], k: 5, expect: 2 },
    { grid: [[3, 0, 3, 0], [0, 3, 0, 3], [3, 0, 3, 0]], k: 3, expect: 6 },
    { grid: [[0, 0, 0], [0, 0, 0]], k: 7, expect: 0 },
    { grid: [[5]], k: 5, expect: 1 },
    { grid: [[5]], k: 3, expect: 0 },
    { grid: [[1, 1], [1, 1]], k: 4, expect: 1 },
    { grid: [[1], [2], [3]], k: 2, expect: 1 },
];
cases.forEach(({ grid, k, expect }, idx) => {
    const g = grid.map(row => row.slice());
    const res = countIslands(g, k);
    console.log(`case ${idx}: got=${res} expect=${expect} ${res === expect ? 'PASS' : 'FAIL'}`);
});
