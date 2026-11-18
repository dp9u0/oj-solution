/*
 * @lc app=leetcode.cn id=499 lang=javascript
 *
 * [499] 迷宫 III
 */

// @lc code=start
/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
var findShortestWay = function(maze, ball, hole) {
    const m = maze.length, n = maze[0].length;
    const dirs = [[1, 0, 'd'], [0, -1, 'l'], [0, 1, 'r'], [-1, 0, 'u']];
    // best (distance, path) per stopping cell
    const dist = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => [Infinity, '']));
    dist[ball[0]][ball[1]] = [0, ''];

    const heap = [[0, '', ball[0], ball[1]]];
    while (heap.length) {
        // linear-extract min by (dist, path)
        let bi = 0;
        for (let i = 1; i < heap.length; i++) {
            const a = heap[i], b = heap[bi];
            if (a[0] < b[0] || (a[0] === b[0] && a[1] < b[1])) bi = i;
        }
        const [d, path, r, c] = heap.splice(bi, 1)[0];
        const cur = dist[r][c];
        if (d > cur[0] || (d === cur[0] && path > cur[1])) continue; // stale
        if (r === hole[0] && c === hole[1]) return path;
        for (const [dr, dc, ch] of dirs) {
            let nr = r, nc = c, steps = 0;
            while (nr + dr >= 0 && nr + dr < m && nc + dc >= 0 && nc + dc < n &&
                   maze[nr + dr][nc + dc] === 0) {
                nr += dr; nc += dc; steps++;
                if (nr === hole[0] && nc === hole[1]) break; // drops into the hole
            }
            const nd = d + steps, npath = path + ch;
            const cell = dist[nr][nc];
            if (nd < cell[0] || (nd === cell[0] && npath < cell[1])) {
                dist[nr][nc] = [nd, npath];
                heap.push([nd, npath, nr, nc]);
            }
        }
    }
    return 'impossible';
};
// @lc code=end

// TEST:
const M1 = [[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]];
console.log(findShortestWay(M1, [4, 3], [0, 1])); // "lul"
console.log(findShortestWay(M1, [4, 3], [3, 0])); // "impossible"
console.log(findShortestWay([[0,0,0,0,0,0,0],[0,0,1,0,0,1,0],[0,0,0,0,1,0,0],[0,0,0,0,0,0,1]], [0, 4], [3, 5])); // "dldr"
console.log(findShortestWay([[0,0,0],[0,0,0],[0,0,0]], [0, 0], [2, 2])); // "dr" (dist 4, "dr" < "rd")
console.log(findShortestWay([[0,0,0]], [0, 0], [0, 1])); // "r" (passes over the hole)
