/*
 * @lc app=leetcode id=1391 lang=javascript
 *
 * [1391] Check if There is a Valid Path in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length, n = grid[0].length;
    // Street type -> directions it connects
    const streets = {
        1: [[0,-1],[0,1]],
        2: [[-1,0],[1,0]],
        3: [[0,-1],[1,0]],
        4: [[0,1],[1,0]],
        5: [[0,-1],[-1,0]],
        6: [[0,1],[-1,0]],
    };
    const connects = (street, dr, dc) => streets[street].some(([a,b]) => a === dr && b === dc);

    const visited = Array.from({length: m}, () => new Uint8Array(n));
    const queue = [[0, 0]];
    visited[0][0] = 1;
    let head = 0;

    while (head < queue.length) {
        const [r, c] = queue[head++];
        if (r === m - 1 && c === n - 1) return true;
        for (const [dr, dc] of streets[grid[r][c]]) {
            const nr = r + dr, nc = c + dc;
            if (nr < 0 || nr >= m || nc < 0 || nc >= n || visited[nr][nc]) continue;
            if (connects(grid[nr][nc], -dr, -dc)) {
                visited[nr][nc] = 1;
                queue.push([nr, nc]);
            }
        }
    }
    return false;
};
// @lc code=end

// TEST:
console.log(hasValidPath([[2,4,3],[6,5,2]])); // true
console.log(hasValidPath([[1,2,1],[1,2,1]])); // false
console.log(hasValidPath([[1,1,2]])); // false
console.log(hasValidPath([[2]])); // true (single cell)
console.log(hasValidPath([[1,1,1,1]])); // true (row of type 1)
console.log(hasValidPath([[2],[2],[2]])); // true (column of type 2)
console.log(hasValidPath([[1,2],[2,1]])); // check
