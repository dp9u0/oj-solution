/*
 * @lc app=leetcode id=1210 lang=javascript
 *
 * [1210] Minimum Moves to Reach Target with Rotations
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
    const n = grid.length;
    const visited = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => [false, false]));

    const ok = (r, c) => r >= 0 && r < n && c >= 0 && c < n && grid[r][c] === 0;

    const queue = [[0, 0, 0]];
    visited[0][0][0] = true;
    let steps = 0;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [r, c, o] = queue.shift();
            if (r === n - 1 && c === n - 2 && o === 0) return steps;

            const tryAdd = (nr, nc, no) => {
                if (!visited[nr][nc][no]) {
                    visited[nr][nc][no] = true;
                    queue.push([nr, nc, no]);
                }
            };

            // Right
            if (o === 0) {
                if (ok(r, c + 2)) tryAdd(r, c + 1, 0);
            } else {
                if (ok(r, c + 1) && ok(r + 1, c + 1)) tryAdd(r, c + 1, 1);
            }
            // Down
            if (o === 0) {
                if (ok(r + 1, c) && ok(r + 1, c + 1)) tryAdd(r + 1, c, 0);
            } else {
                if (ok(r + 2, c)) tryAdd(r + 1, c, 1);
            }
            // Rotate
            if (o === 0) {
                if (ok(r + 1, c) && ok(r + 1, c + 1)) tryAdd(r, c, 1);
            } else {
                if (ok(r, c + 1) && ok(r + 1, c + 1)) tryAdd(r, c, 0);
            }
        }
        steps++;
    }
    return -1;
};
// @lc code=end

// TEST:
const g1 = [[0,0,0,0,0,1],[1,1,0,0,1,0],[0,0,0,0,1,1],[0,0,1,0,1,0],[0,1,1,0,0,0],[0,1,1,0,0,0]];
console.log(minimumMoves(g1)); // 11
const g2 = [[0,0,1,1,1,1],[0,0,0,0,1,1],[1,1,0,0,0,1],[1,1,1,0,0,1],[1,1,1,0,0,1],[1,1,1,0,0,0]];
console.log(minimumMoves(g2)); // 9
const g3 = [[0,0],[0,0]];
console.log(minimumMoves(g3)); // 1
const g4 = [[0,0,0],[0,0,0],[0,0,0]];
console.log(minimumMoves(g4)); // 3
