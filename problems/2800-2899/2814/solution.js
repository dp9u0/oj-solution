/*
 * @lc app=leetcode.cn id=2814 lang=javascript
 *
 * [2814] 避免淹死并到达目的地的最短时间
 */

// @lc code=start
/**
 * @param {string[][]} land
 * @return {number}
 */
var minimumSeconds = function(land) {
    const n = land.length, m = land[0].length;
    const DIRS = [[1,0],[-1,0],[0,1],[0,-1]];
    let sr = 0, sc = 0, dr = 0, dc = 0;
    const flood = Array.from({ length: n }, () => new Array(m).fill(Infinity));
    let queue = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const c = land[i][j];
            if (c === 'S') { sr = i; sc = j; }
            else if (c === 'D') { dr = i; dc = j; }
            else if (c === '*') { flood[i][j] = 0; queue.push([i, j]); }
        }
    }
    // multi-source BFS: flood spreads over '.' and 'S' (X and D never flood)
    while (queue.length) {
        const next = [];
        for (const [r, c, ] of queue) {
            for (const [dx, dy] of DIRS) {
                const nr = r + dx, nc = c + dy;
                if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
                if ((land[nr][nc] === '.' || land[nr][nc] === 'S') && flood[nr][nc] === Infinity) {
                    flood[nr][nc] = flood[r][c] + 1;
                    next.push([nr, nc]);
                }
            }
        }
        queue = next;
    }
    // person BFS
    const dist = Array.from({ length: n }, () => new Array(m).fill(-1));
    dist[sr][sc] = 0;
    queue = [[sr, sc]];
    while (queue.length) {
        const next = [];
        for (const [r, c] of queue) {
            const t = dist[r][c];
            for (const [dx, dy] of DIRS) {
                const nr = r + dx, nc = c + dy;
                if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
                if (dist[nr][nc] !== -1) continue;
                if (land[nr][nc] === 'X') continue;
                if (land[nr][nc] !== 'D' && flood[nr][nc] <= t + 1) continue;
                dist[nr][nc] = t + 1;
                next.push([nr, nc]);
            }
        }
        queue = next;
    }
    return dist[dr][dc] === -1 ? -1 : dist[dr][dc];
};
// @lc code=end

// TEST:
console.log(minimumSeconds([["D",".","*"],[".",".","."],[".","S","."]])); // 3
console.log(minimumSeconds([["D","X","*"],[".",".","."],[".",".","S"]])); // -1
console.log(minimumSeconds([["D",".",".",".","*","."],[".","X",".","X",".","."],[".",".",".",".","S","."]])); // 6
console.log(minimumSeconds([["S",".","D"]])); // 2
console.log(minimumSeconds([["S","*","D"]])); // -1
