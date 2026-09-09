/*
 * @lc app=leetcode.cn id=LCP 48 lang=javascript
 *
 * [LCP 48] 无限棋局
 */

// @lc code=start
/**
 * @param {number[][]} pieces
 * @return {string}
 */
var gobang = function(pieces) {
    const stone = new Map();
    const key = (x, y) => x + ',' + y;
    for (const [x, y, c] of pieces) stone.set(key(x, y), c);
    const DIRS = [[1, 0], [0, 1], [1, 1], [1, -1]];

    // gap cells of color-windows (4 stones + 1 empty) anchored at existing stones of `color`
    const scanGaps = (color) => {
        const gaps = new Set();
        for (const [x, y, c] of pieces) {
            if (c !== color) continue;
            for (const [dx, dy] of DIRS) {
                for (let o = -4; o <= 0; o++) {
                    let cnt = 0, gap = null, ok = true;
                    for (let i = 0; i < 5; i++) {
                        const v = stone.get(key(x + (o + i) * dx, y + (o + i) * dy));
                        if (v === color) cnt++;
                        else if (v === undefined) {
                            if (gap === null) gap = key(x + (o + i) * dx, y + (o + i) * dy);
                            else { ok = false; break; }
                        } else { ok = false; break; }
                    }
                    if (ok && cnt === 4) gaps.add(gap);
                }
            }
        }
        return gaps;
    };
    // gap cells of color-windows containing an extra stone of `color` at (ex, ey)
    const gapsAround = (color, ex, ey) => {
        const gaps = new Set();
        for (const [dx, dy] of DIRS) {
            for (let o = -4; o <= 0; o++) {
                let cnt = 0, gap = null, ok = true;
                for (let i = 0; i < 5; i++) {
                    const x = ex + (o + i) * dx, y = ey + (o + i) * dy;
                    const v = (x === ex && y === ey) ? color : stone.get(key(x, y));
                    if (v === color) cnt++;
                    else if (v === undefined) {
                        if (gap === null) gap = key(x, y);
                        else { ok = false; break; }
                    } else { ok = false; break; }
                }
                if (ok && cnt === 4) gaps.add(gap);
            }
        }
        return gaps;
    };

    const blackGaps = scanGaps(0);
    if (blackGaps.size > 0) return 'Black';               // move 1 win
    const whiteGaps = scanGaps(1);
    if (whiteGaps.size >= 2) return 'White';              // one stone cannot block two distinct gaps
    if (whiteGaps.size === 1) {                           // forced block, then need a double threat
        const [gx, gy] = [...whiteGaps][0].split(',').map(Number);
        return gapsAround(0, gx, gy).size >= 2 ? 'Black' : 'None';
    }
    // no white threat: free first move, wins iff some move creates two distinct gaps
    const cand = new Set();
    for (const [x, y, c] of pieces) {
        if (c !== 0) continue;
        for (const [dx, dy] of DIRS) {
            for (let t = -4; t <= 4; t++) {
                const k = key(x + t * dx, y + t * dy);
                if (!stone.has(k)) cand.add(k);
            }
        }
    }
    for (const k of cand) {
        const [x, y] = k.split(',').map(Number);
        if (gapsAround(0, x, y).size >= 2) return 'Black';
    }
    return 'None';
};
// @lc code=end

// TEST:
// exhaustive 3-ply game-tree search; candidates = axial ±4 neighborhoods (a pass move included)
const bruteGobang = (pieces) => {
    const S = 32, OFF = 12; // coords in [-12, 19]
    const g = new Int8Array(S * S).fill(-1);
    const id = (x, y) => (x + OFF) * S + (y + OFF);
    let stones = [];
    for (const [x, y, c] of pieces) { g[id(x, y)] = c; stones.push([x, y, c]); }
    const DIRS = [[1, 0], [0, 1], [1, 1], [1, -1]];
    const canWin = (color) => { // exists a window with 4 stones + exactly 1 empty
        for (const [x, y, c] of stones) {
            if (c !== color) continue;
            for (const [dx, dy] of DIRS) {
                for (let o = -4; o <= 0; o++) {
                    let cnt = 0, empty = 0, bad = false;
                    for (let i = 0; i < 5; i++) {
                        const v = g[id(x + (o + i) * dx, y + (o + i) * dy)];
                        if (v === color) cnt++;
                        else if (v === -1) empty++;
                        else { bad = true; break; }
                    }
                    if (!bad && cnt === 4 && empty === 1) return true;
                }
            }
        }
        return false;
    };
    const nearCells = (color) => {
        const out = [];
        const seen = new Set();
        for (const [x, y, c] of stones) {
            if (c !== color) continue;
            for (const [dx, dy] of DIRS) {
                for (let t = -4; t <= 4; t++) {
                    const i = id(x + t * dx, y + t * dy);
                    if (g[i] === -1 && !seen.has(i)) { seen.add(i); out.push(i); }
                }
            }
        }
        return out;
    };
    if (canWin(0)) return 'Black'; // move-1 win exists
    const b1s = nearCells(0).concat(nearCells(1), [-1]); // -1 = pass
    let sawNone = false;
    for (const bi of b1s) {
        let bxy = null;
        if (bi !== -1) {
            const bx = ((bi / S) | 0) - OFF, by = (bi % S) - OFF;
            g[bi] = 0;
            bxy = [bx, by, 0];
            stones.push(bxy);
        }
        let res;
        if (canWin(1)) {
            res = 'White';
        } else {
            res = 'Black';
            const wCands = nearCells(1).concat(nearCells(0), [-1]);
            for (const wi of wCands) {
                let wxy = null;
                if (wi !== -1) {
                    const wx = ((wi / S) | 0) - OFF, wy = (wi % S) - OFF;
                    g[wi] = 1;
                    wxy = [wx, wy, 1];
                    stones.push(wxy);
                }
                if (!canWin(0)) res = 'None';
                if (wi !== -1) { g[wi] = -1; stones.pop(); }
                if (res === 'None') break;
            }
        }
        if (bi !== -1) { g[bi] = -1; stones.pop(); }
        if (res === 'Black') return 'Black';
        if (res === 'None') sawNone = true;
    }
    return sawNone ? 'None' : 'White';
};
console.log(gobang([[0, 0, 1], [1, 1, 1], [2, 2, 0]]) === 'None');
console.log(gobang([[1, 2, 1], [1, 4, 1], [1, 5, 1], [2, 1, 0], [2, 3, 0], [2, 4, 0], [3, 2, 1], [3, 4, 0], [4, 2, 1], [5, 2, 1]]) === 'Black');
// white double threat (two distinct gaps) -> White
console.log(gobang([[0, 0, 1], [1, 0, 1], [2, 0, 1], [3, 0, 1], [10, 10, 0]]) === 'White');
// white single gap forces black; the block creates a black double threat -> Black
console.log(gobang([[0, 0, 1], [1, 0, 1], [2, 0, 1], [3, 0, 1], [-1, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0]]) === 'Black');
// randomized cross-check
let seed = 2024;
const rnd = (n) => { seed = (seed * 16807) % 2147483647; return seed % n; };
let allOk = true;
for (let t = 0; t < 30; t++) {
    const n = rnd(7);
    const used = new Set();
    const ps = [];
    for (let i = 0; i < n; i++) {
        let x, y;
        do { x = rnd(8) - 1; y = rnd(8) - 1; } while (used.has(x + ',' + y));
        used.add(x + ',' + y);
        ps.push([x, y, rnd(2)]);
    }
    const a = gobang(ps), b = bruteGobang(ps);
    if (a !== b) { allOk = false; console.log('MISMATCH', JSON.stringify(ps), a, b); }
}
console.log(allOk);
