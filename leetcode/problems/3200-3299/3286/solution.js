/*
 * @lc app=leetcode id=3286 lang=javascript
 *
 * [3286] Find a Safe Walk Through a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    const m = grid.length, n = grid[0].length;
    const dist = Array.from({length: m}, () => new Array(n).fill(Infinity));
    const deque = [];

    dist[0][0] = grid[0][0];
    deque.push([0, 0]);

    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];

    while (deque.length > 0) {
        const [i, j] = deque.shift();
        for (const [di, dj] of dirs) {
            const ni = i + di, nj = j + dj;
            if (ni < 0 || ni >= m || nj < 0 || nj >= n) continue;
            const cost = grid[ni][nj];
            if (dist[i][j] + cost < dist[ni][nj]) {
                dist[ni][nj] = dist[i][j] + cost;
                if (cost === 0) deque.unshift([ni, nj]);
                else deque.push([ni, nj]);
            }
        }
    }

    return dist[m - 1][n - 1] < health;
};
// @lc code=end

// TEST:
console.log(findSafeWalk([[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]], 1)); // true
console.log(findSafeWalk([[0,1,1,0,0,0],[1,0,1,0,0,0],[0,1,1,1,0,1],[0,0,1,0,1,0]], 3)); // false
console.log(findSafeWalk([[1,1,1],[1,0,1],[1,1,1]], 5)); // true
console.log(findSafeWalk([[0]], 1)); // true
console.log(findSafeWalk([[1]], 2)); // true
