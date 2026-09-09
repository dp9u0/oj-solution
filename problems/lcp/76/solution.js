/*
 * @lc app=leetcode.cn id=LCP 76 lang=javascript
 *
 * [LCP 76] 魔法棋盘
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {string[]} chessboard
 * @return {number}
 */
var getSchemeCount = function(n, m, chessboard) {
    // resonance <=> in each row/column piece sequence, pieces two apart differ;
    // i.e. color sequences satisfy c[k] = c[k+2] (period-2 alternation)
    let grid;
    if (n <= m) grid = chessboard; // profile width = n rows, scan m columns
    else grid = Array.from({ length: m }, (_, j) => Array.from({ length: n }, (_, i) => chessboard[i][j]).join(''));
    const w = grid.length, L = grid[0].length;
    // state: 0 none, 1 single B, 2 single R, 3 (B,B), 4 (B,R), 5 (R,B), 6 (R,R)
    // T[state][choice] with choice 0 empty, 1 B, 2 R; -1 = violates alternation
    const T = [[0, 1, 2], [1, 3, 4], [2, 5, 6], [3, 3, -1], [4, 5, -1], [5, -1, 4], [6, -1, 6]];
    const POW = [1, 7, 49, 343, 2401, 16807];
    const size = POW[w] * 7;
    let dp = new Float64Array(size);
    dp[0] = 1;
    for (let c = 0; c < L; c++) {
        for (let r = 0; r < w; r++) {
            const ch = grid[r][c];
            const choices = ch === '?' ? [0, 1, 2] : [ch === '.' ? 0 : ch === 'B' ? 1 : 2];
            const next = new Float64Array(size);
            const lastRow = r === w - 1; // vertical state resets after the column ends
            const rp = POW[r];
            for (let s = 0; s < size; s++) {
                const cnt = dp[s];
                if (cnt === 0) continue;
                const v = s % 7, rest = (s - v) / 7;
                const rowSt = Math.floor(rest / rp) % 7;
                const restBase = rest - rowSt * rp;
                for (const choice of choices) {
                    const nv = T[v][choice];
                    if (nv === -1) continue; // column constraint
                    const nr = T[rowSt][choice];
                    if (nr === -1) continue; // row constraint
                    next[(lastRow ? 0 : nv) + 7 * (restBase + nr * rp)] += cnt;
                }
            }
            dp = next;
        }
    }
    let ans = 0;
    for (let s = 0; s < size; s++) ans += dp[s];
    return ans;
};
// @lc code=end

// TEST:
// brute force: enumerate all '?' fillings and check resonance directly
const bruteCount = (n, m, board) => {
    const qs = [];
    for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) if (board[i][j] === '?') qs.push([i, j]);
    const ok = (g) => {
        const resonates = (cells) => {
            for (let a = 0; a < cells.length; a++) for (let b = a + 1; b < cells.length; b++) {
                if (cells[a][1] !== cells[b][1] && b - a === 2) return true; // exactly one piece between
            }
            return false;
        };
        for (let i = 0; i < n; i++) {
            const row = [];
            for (let j = 0; j < m; j++) if (g[i][j] !== '.') row.push([i, g[i][j]]);
            if (resonates(row)) return false;
        }
        for (let j = 0; j < m; j++) {
            const col = [];
            for (let i = 0; i < n; i++) if (g[i][j] !== '.') col.push([j, g[i][j]]);
            if (resonates(col)) return false;
        }
        return true;
    };
    let cnt = 0;
    const total = 3 ** qs.length;
    for (let mask = 0; mask < total; mask++) {
        const g = board.map(row => row.split(''));
        let mm = mask;
        for (const [i, j] of qs) { g[i][j] = ['.', 'B', 'R'][mm % 3]; mm = (mm / 3) | 0; }
        if (ok(g)) cnt++;
    }
    return cnt;
};
console.log(getSchemeCount(3, 3, ["..R", "..B", "?R?"]) === 5);
console.log(getSchemeCount(3, 3, ["?R?", "B?B", "?R?"]) === 105);
console.log(getSchemeCount(1, 1, ["?"]) === 3);
console.log(getSchemeCount(1, 2, ["??"]) === 9); // adjacent pieces have zero between, never resonate
console.log(bruteCount(1, 2, ["??"]) === 9);
// randomized cross-check
let seed = 777;
const rnd = (n) => { seed = (seed * 16807) % 2147483647; return seed % n; };
let allOk = true;
for (let t = 0; t < 200; t++) {
    const n = 1 + rnd(3), m = 1 + rnd(4);
    let qCount = 0;
    const board = [];
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < m; j++) {
            const p = rnd(10);
            if (p < 4 && qCount < 9) { row += '?'; qCount++; }
            else row += '.BR'[rnd(3)];
        }
        board.push(row);
    }
    const a = getSchemeCount(n, m, board), b = bruteCount(n, m, board);
    if (a !== b) { allOk = false; console.log('MISMATCH', n, m, JSON.stringify(board), a, b); }
}
console.log(allOk);
// long thin board performance check
console.log(getSchemeCount(5, 6, ["??????", "??????", "??????", "??????", "??????"]) > 0);
