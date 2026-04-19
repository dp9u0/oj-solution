/*
 * @lc app=leetcode id=3552 lang=javascript
 *
 * [3552] Grid Teleportation Traversal
 */

// @lc code=start
/**
 * @param {string[]} matrix
 * @return {number}
 */
var minMoves = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    if (m === 1 && n === 1) return 0;

    const portalMap = new Map();
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {
            const ch = matrix[i][j];
            if (ch >= 'A' && ch <= 'Z') {
                if (!portalMap.has(ch)) portalMap.set(ch, []);
                portalMap.get(ch).push([i, j]);
            }
        }

    const dist = Array.from({ length: m }, () => new Int32Array(n).fill(-1));
    const used = new Set();
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
    let cur = [[0, 0]];
    dist[0][0] = 0;

    while (cur.length > 0) {
        let idx = 0;
        while (idx < cur.length) {
            const [r, c] = cur[idx++];
            const ch = matrix[r][c];
            if (ch >= 'A' && ch <= 'Z' && !used.has(ch)) {
                used.add(ch);
                for (const [r2, c2] of portalMap.get(ch)) {
                    if (dist[r2][c2] === -1) {
                        dist[r2][c2] = dist[r][c];
                        cur.push([r2, c2]);
                    }
                }
            }
        }
        const next = [];
        for (const [r, c] of cur) {
            if (r === m - 1 && c === n - 1) return dist[r][c];
            for (const [dr, dc] of dirs) {
                const r2 = r + dr, c2 = c + dc;
                if (r2 >= 0 && r2 < m && c2 >= 0 && c2 < n && matrix[r2][c2] !== '#' && dist[r2][c2] === -1) {
                    dist[r2][c2] = dist[r][c] + 1;
                    next.push([r2, c2]);
                }
            }
        }
        cur = next;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(minMoves(["A..",".A.","..."])); // 2
console.log(minMoves([".#...",".#.#.",".#.#.","...#."])); // 13
console.log(minMoves(["...","...","..."])); // 4
console.log(minMoves(["A"])); // 0
console.log(minMoves([".#",".#"])); // -1
