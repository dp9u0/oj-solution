/*
 * @lc app=leetcode id=2146 lang=javascript
 *
 * [2146] K Highest Ranked Items Within a Price Range
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number[]} pricing
 * @param {number[]} start
 * @param {number} k
 * @return {number[][]}
 */
var highestRankedKItems = function(grid, pricing, start, k) {
    const [low, high] = pricing;
    const [sr, sc] = start;
    const m = grid.length;
    const n = grid[0].length;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));

    const queue = [[sr, sc]];
    visited[sr][sc] = true;
    const items = [];
    let dist = 0;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();
            const price = grid[r][c];
            if (price >= low && price <= high) {
                items.push([dist, price, r, c]);
            }
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc] && grid[nr][nc] !== 0) {
                    visited[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        }
        dist++;
    }

    items.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2] || a[3] - b[3]);
    return items.slice(0, k).map(item => [item[2], item[3]]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(highestRankedKItems([[1,2,0,1],[1,3,0,1],[0,2,5,1]], [2,5], [0,0], 3))); // [[0,1],[1,1],[2,1]]
console.log(JSON.stringify(highestRankedKItems([[1,2,0,1],[1,3,3,1],[0,2,5,1]], [2,3], [2,3], 2))); // [[2,1],[1,2]]
console.log(JSON.stringify(highestRankedKItems([[1,1,1],[0,0,1],[2,3,4]], [2,3], [0,0], 3))); // [[2,1],[2,0]]
console.log(JSON.stringify(highestRankedKItems([[1,1],[2,1]], [2,2], [0,0], 1))); // [[1,0]]
console.log(JSON.stringify(highestRankedKItems([[1]], [2,2], [0,0], 1))); // []
