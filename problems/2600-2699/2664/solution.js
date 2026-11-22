/*
 * @lc app=leetcode.cn id=2664 lang=javascript
 *
 * [2664] 巡逻的骑士
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var tourOfKnight = function(m, n, r, c) {
    const DIRS = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
    const board = Array.from({ length: m }, () => new Array(n).fill(-1));
    const onward = (x, y) => {
        let cnt = 0;
        for (const [dx, dy] of DIRS) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && board[nx][ny] === -1) cnt++;
        }
        return cnt;
    };
    const dfs = (x, y, step) => {
        board[x][y] = step;
        if (step === m * n - 1) return true;
        const cands = [];
        for (const [dx, dy] of DIRS) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && board[nx][ny] === -1) {
                cands.push([onward(nx, ny), nx, ny]);
            }
        }
        cands.sort((a, b) => a[0] - b[0]);
        for (const [, nx, ny] of cands) {
            if (dfs(nx, ny, step + 1)) return true;
            board[nx][ny] = -1;
        }
        return false;
    };
    dfs(r, c, 0);
    return board;
};
// @lc code=end

// TEST:
const valid = (m, n, r, c, b) => {
    const pos = new Array(m * n);
    for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) {
        if (b[i][j] < 0 || b[i][j] >= m * n) return false;
        pos[b[i][j]] = [i, j];
    }
    if (pos[0][0] !== r || pos[0][1] !== c) return false;
    for (let k = 1; k < m * n; k++) {
        const [x1, y1] = pos[k - 1], [x2, y2] = pos[k];
        const dx = Math.abs(x1 - x2), dy = Math.abs(y1 - y2);
        if (Math.min(dx, dy) !== 1 || Math.max(dx, dy) !== 2) return false;
    }
    return true;
};
console.log(JSON.stringify(tourOfKnight(1, 1, 0, 0))); // [[0]]
console.log(valid(3, 4, 0, 0, tourOfKnight(3, 4, 0, 0))); // true
console.log(valid(5, 5, 0, 0, tourOfKnight(5, 5, 0, 0))); // true
console.log(valid(4, 5, 3, 3, tourOfKnight(4, 5, 3, 3))); // true
console.log(valid(5, 4, 0, 0, tourOfKnight(5, 4, 0, 0))); // true
