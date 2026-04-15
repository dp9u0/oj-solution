/*
 * @lc app=leetcode id=3619 lang=javascript
 *
 * [3619] Count Islands With Total Value Divisible by K
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function(grid, k) {
    let m = grid.length, n = grid[0].length;
    let visited = Array.from({ length: m }, () => new Uint8Array(n));
    let dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0 && !visited[i][j]) {
                let sum = 0;
                let queue = [[i, j]];
                visited[i][j] = 1;
                while (queue.length) {
                    let [r, c] = queue.shift();
                    sum += grid[r][c];
                    for (let [dr, dc] of dirs) {
                        let nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] > 0 && !visited[nr][nc]) {
                            visited[nr][nc] = 1;
                            queue.push([nr, nc]);
                        }
                    }
                }
                if (sum % k === 0) count++;
            }
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countIslands([[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], 5)); // 2
console.log(countIslands([[3,0,3,0],[0,3,0,3],[3,0,3,0]], 3)); // 6
