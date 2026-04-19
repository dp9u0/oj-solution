/*
 * @lc app=leetcode id=3651 lang=javascript
 *
 * [3651] Minimum Cost Path with Teleportations
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var minCost = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const INF = Infinity;

    // Pre-sort cells by value descending (same for all levels)
    const cells = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            cells.push((i << 16) | j);
        }
    }
    cells.sort((a, b) => grid[b >> 16][b & 0xFFFF] - grid[a >> 16][a & 0xFFFF]);

    // Topological DP: only right/down moves
    const topoDP = (dist) => {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (i > 0 && dist[(i - 1) * n + j] + grid[i][j] < dist[i * n + j]) {
                    dist[i * n + j] = dist[(i - 1) * n + j] + grid[i][j];
                }
                if (j > 0 && dist[i * n + j - 1] + grid[i][j] < dist[i * n + j]) {
                    dist[i * n + j] = dist[i * n + j - 1] + grid[i][j];
                }
            }
        }
    };

    // Compute teleport costs: for each cell (x,y), min source cost among cells with value >= grid[x][y]
    const computeTeleport = (dist) => {
        const next = new Float64Array(m * n).fill(INF);
        let runningMin = INF;
        let idx = 0;
        while (idx < cells.length) {
            const v = grid[cells[idx] >> 16][cells[idx] & 0xFFFF];
            let end = idx;
            while (end < cells.length && grid[cells[end] >> 16][cells[end] & 0xFFFF] === v) {
                const ci = cells[end] >> 16, cj = cells[end] & 0xFFFF;
                runningMin = Math.min(runningMin, dist[ci * n + cj]);
                end++;
            }
            for (let i = idx; i < end; i++) {
                const ci = cells[i] >> 16, cj = cells[i] & 0xFFFF;
                next[ci * n + cj] = runningMin;
            }
            idx = end;
        }
        return next;
    };

    // Level k: start at (0,0)
    let dist = new Float64Array(m * n).fill(INF);
    dist[0] = 0;
    topoDP(dist);
    let ans = dist[(m - 1) * n + n - 1];

    for (let t = k; t >= 1; t--) {
        dist = computeTeleport(dist);
        topoDP(dist);
        ans = Math.min(ans, dist[(m - 1) * n + n - 1]);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(minCost([[1,3,3],[2,5,4],[4,3,5]], 2)); // 7
console.log(minCost([[1,2],[2,3],[3,4]], 1)); // 9
console.log(minCost([[1,1],[1,1]], 1)); // 0 (teleport directly to dest)
console.log(minCost([[5]], 0)); // 0
console.log(minCost([[1,2,3],[4,5,6]], 0)); // 11 (right,right,down = 2+3+6)
