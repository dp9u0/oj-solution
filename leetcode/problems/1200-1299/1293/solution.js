/*
 * @lc app=leetcode id=1293 lang=javascript
 *
 * [1293] Shortest Path in a Grid with Obstacles Elimination
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    if (m === 1 && n === 1) return 0;
    if (k >= m + n - 2) return m + n - 2;

    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = Array.from({ length: m }, () => new Int16Array(n).fill(-1));
    const queue = [[0, 0, k]];
    visited[0][0] = k;
    let steps = 0;

    while (queue.length > 0) {
        const size = queue.length;
        steps++;
        for (let i = 0; i < size; i++) {
            const [r, c, rem] = queue.shift();
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
                const nrem = rem - grid[nr][nc];
                if (nrem < 0 || visited[nr][nc] >= nrem) continue;
                if (nr === m - 1 && nc === n - 1) return steps;
                visited[nr][nc] = nrem;
                queue.push([nr, nc, nrem]);
            }
        }
    }

    return -1;
};
// @lc code=end

// TEST:
console.log(shortestPath([[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], 1)); // 6
console.log(shortestPath([[0,1,1],[1,1,1],[1,0,0]], 1)); // -1
console.log(shortestPath([[0]], 0)); // 0
console.log(shortestPath([[0,0],[0,0]], 2)); // 2
console.log(shortestPath([[0,1,0],[0,1,0],[0,1,0]], 1)); // 4
