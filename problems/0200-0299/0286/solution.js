/*
 * @lc app=leetcode.cn id=286 lang=javascript
 *
 * [286] 墙与门
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    // -1 = wall, 0 = gate, INF = empty room
    const GATE = 0, INF = 2147483647;
    const queue = [];
    for (let r = 0; r < rooms.length; r++) {
        for (let c = 0; c < rooms[r].length; c++) {
            if (rooms[r][c] === GATE) queue.push([r, c]);
        }
    }

    // multi-source BFS from all gates
    while (queue.length) {
        const [r, c] = queue.shift();
        const dist = rooms[r][c] + 1;
        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < rooms.length && nc >= 0 && nc < rooms[nr].length
                && rooms[nr][nc] === INF) {
                rooms[nr][nc] = dist;
                queue.push([nr, nc]);
            }
        }
    }
};
// @lc code=end

// TEST:
const run = grid => {
    wallsAndGates(grid);
    return grid.map(row => row.join(","));
};
console.log(run([[2147483647, -1, 0, 2147483647], [2147483647, 2147483647, 2147483647, -1], [2147483647, -1, 2147483647, -1], [0, -1, 2147483647, 2147483647]]));
// ["3,-1,0,1", "2,2,1,-1", "1,-1,2,-1", "0,-1,3,4"]
console.log(run([[-1]])); // ["-1"]
console.log(run([[0]])); // ["0"]
console.log(run([[2147483647, 0]])); // ["1,0"]
