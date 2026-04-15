/*
 * @lc app=leetcode id=1091 lang=javascript
 *
 * [1091] Shortest Path in Binary Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
    if (n === 1) return 1;

    const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    const visited = Array.from({ length: n }, () => new Array(n).fill(false));
    let queue = [[0, 0]];
    visited[0][0] = true;
    let len = 1;

    while (queue.length) {
        const next = [];
        len++;
        for (const [r, c] of queue) {
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc] && grid[nr][nc] === 0) {
                    if (nr === n - 1 && nc === n - 1) return len;
                    visited[nr][nc] = true;
                    next.push([nr, nc]);
                }
            }
        }
        queue = next;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(shortestPathBinaryMatrix([[0,1],[1,0]]));              // 2
console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]])); // 4
console.log(shortestPathBinaryMatrix([[1,0,0],[1,1,0],[1,1,0]])); // -1
