/*
 * @lc app=leetcode.cn id=490 lang=javascript
 *
 * [490] 迷宫
 */

// @lc code=start
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
    const m = maze.length, n = maze[0].length;
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));
    const queue = [[start[0], start[1]]];
    visited[start[0]][start[1]] = true;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let head = 0;
    while (head < queue.length) {
        const [r, c] = queue[head++];
        if (r === destination[0] && c === destination[1]) return true;
        for (const [dr, dc] of dirs) {
            // roll until the next cell is a wall or the border
            let nr = r, nc = c;
            while (nr + dr >= 0 && nr + dr < m && nc + dc >= 0 && nc + dc < n && maze[nr + dr][nc + dc] === 0) {
                nr += dr;
                nc += dc;
            }
            if (!visited[nr][nc]) {
                visited[nr][nc] = true;
                queue.push([nr, nc]);
            }
        }
    }
    return false;
};
// @lc code=end

// TEST:
const M1 = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]];
console.log(hasPath(M1, [0, 4], [4, 4])); // true
console.log(hasPath(M1, [0, 4], [3, 2])); // false (can't stop there)
const M3 = [[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]];
console.log(hasPath(M3, [4, 3], [0, 1])); // false
console.log(hasPath([[0, 1], [0, 0]], [0, 0], [1, 0])); // true (rolls down directly)
console.log(hasPath([[0, 1, 0], [0, 1, 0], [0, 1, 0]], [0, 0], [0, 2])); // false (walled off)
