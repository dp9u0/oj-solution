/*
 * @lc app=leetcode.cn id=505 lang=javascript
 *
 * [505] 迷宫 II
 */

// @lc code=start
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function(maze, start, destination) {
    const m = maze.length, n = maze[0].length;
    const dist = Array.from({ length: m }, () => new Array(n).fill(Infinity));
    dist[start[0]][start[1]] = 0;
    const heap = [[0, start[0], start[1]]];
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (heap.length) {
        let bi = 0;
        for (let i = 1; i < heap.length; i++) {
            if (heap[i][0] < heap[bi][0]) bi = i;
        }
        const [d, r, c] = heap.splice(bi, 1)[0];
        if (d > dist[r][c]) continue; // stale entry
        if (r === destination[0] && c === destination[1]) return d;
        for (const [dr, dc] of dirs) {
            let nr = r, nc = c, steps = 0;
            while (nr + dr >= 0 && nr + dr < m && nc + dc >= 0 && nc + dc < n &&
                   maze[nr + dr][nc + dc] === 0) {
                nr += dr; nc += dc; steps++;
            }
            if (d + steps < dist[nr][nc]) {
                dist[nr][nc] = d + steps;
                heap.push([d + steps, nr, nc]);
            }
        }
    }
    return -1;
};
// @lc code=end

// TEST:
const M = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]];
console.log(shortestDistance(M, [0, 4], [4, 4])); // 12
console.log(shortestDistance(M, [0, 4], [3, 2])); // -1 (can't stop there)
console.log(shortestDistance([[0,0,0],[0,0,0],[0,0,0]], [0, 0], [2, 2])); // 4
console.log(shortestDistance([[0, 1], [0, 0]], [0, 0], [1, 0])); // 1
console.log(shortestDistance([[0, 1, 0], [0, 1, 0], [0, 1, 0]], [0, 0], [0, 2])); // -1
