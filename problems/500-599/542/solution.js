/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length, n = mat[0].length;
    const dist = Array.from({ length: m }, () => new Array(n).fill(-1));
    const queue = [];
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                dist[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    let head = 0;
    while (head < queue.length) {
        const [r, c] = queue[head++];
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && dist[nr][nc] === -1) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    return dist;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(updateMatrix([[0,0,0],[0,1,0],[0,0,0]])));
// [[0,0,0],[0,1,0],[0,0,0]]
console.log(JSON.stringify(updateMatrix([[0,0,0],[0,1,0],[1,1,1]])));
// [[0,0,0],[0,1,0],[1,2,1]]
console.log(JSON.stringify(updateMatrix([[1,1,1],[1,0,1],[1,1,1]])));
// [[2,1,2],[1,0,1],[2,1,2]]
