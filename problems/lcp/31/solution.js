/*
 * @lc app=leetcode.cn id=LCP 31 lang=javascript
 *
 * [LCP 31] 变换的迷宫
 */

// @lc code=start
/**
 * @param {string[][]} maze
 * @return {boolean}
 */
var escapeMaze = function(maze) {
    const T = maze.length, n = maze[0].length, m = maze[0][0].length;
    const N = n * m;
    const open = (t, i) => maze[t][(i / m) | 0][i % m] === '.';
    // adjacency including self (stay)
    const adj = [];
    for (let i = 0; i < N; i++) {
        const r = (i / m) | 0, c = i % m;
        const list = [i];
        if (r > 0) list.push(i - m);
        if (r < n - 1) list.push(i + m);
        if (c > 0) list.push(i - 1);
        if (c < m - 1) list.push(i + 1);
        adj.push(list);
    }
    const spreads = (set) => { // cells adjacent-or-equal to some cell in set
        const out = new Uint8Array(N);
        for (let i = 0; i < N; i++) if (set[i]) for (const j of adj[i]) out[j] = 1;
        return out;
    };

    // forward reachability: F0 = no scroll, F1 = temp used
    const F0 = [new Uint8Array(N)], F1 = [new Uint8Array(N)];
    F0[0][0] = 1;
    for (let t = 1; t < T; t++) {
        const pf0 = spreads(F0[t - 1]), pf1 = spreads(F1[t - 1]);
        const c0 = new Uint8Array(N), c1 = new Uint8Array(N);
        for (let i = 0; i < N; i++) {
            if (open(t, i)) {
                if (pf0[i]) c0[i] = 1;
                if (pf1[i]) c1[i] = 1;
            }
            if (pf0[i]) c1[i] = 1; // temp-cast arrival, any terrain
        }
        F0.push(c0);
        F1.push(c1);
    }
    const end = N - 1;
    for (let t = 0; t < T; t++) if (F0[t][end] || F1[t][end]) return true;
    if (T < 2) return false;

    // backward reachability anchored at (T-1, end):
    // B  = start cell must be raw-open; B* = transition-only (presence provided by perm/scroll)
    const B0 = new Array(T), B1 = new Array(T), Bs0 = new Array(T), Bs1 = new Array(T);
    B0[T - 1] = new Uint8Array(N); B0[T - 1][end] = 1;
    B1[T - 1] = B0[T - 1];
    Bs0[T - 1] = B0[T - 1];
    Bs1[T - 1] = B0[T - 1];
    for (let t = T - 2; t >= 0; t--) {
        const nb0 = spreads(B0[t + 1]), nb1 = spreads(B1[t + 1]), nbs0 = spreads(Bs0[t + 1]);
        const c0 = new Uint8Array(N), c1 = new Uint8Array(N);
        const cs0 = nb0, cs1 = new Uint8Array(N);
        for (let i = 0; i < N; i++) {
            if (!open(t, i)) continue;
            if (nb0[i]) c0[i] = 1;
            if (nb1[i] || nbs0[i]) c1[i] = 1; // normal move, or temp-cast arrival next
        }
        for (let i = 0; i < N; i++) if (nb1[i] || nbs0[i]) cs1[i] = 1;
        B0[t] = c0;
        B1[t] = c1;
        Bs0[t] = cs0;
        Bs1[t] = cs1;
    }
    // perm junction: prefix touches N(p)∪{p} at t1-1, suffix departs (t2, p), t1 <= t2
    for (let p = 0; p < N; p++) {
        for (const [F, Bs] of [[F0, Bs0], [F1, Bs0], [F0, Bs1]]) {
            let earliest = -1;
            for (let t = 1; t < T; t++) {
                for (const j of adj[p]) if (F[t - 1][j]) { earliest = t; break; }
                if (earliest !== -1) break;
            }
            if (earliest === -1) continue;
            for (let t2 = T - 1; t2 >= earliest; t2--) {
                if (Bs[t2][p]) return true;
            }
        }
    }
    return false;
};
// @lc code=end

// TEST:
// exact model: BFS over (t, pos, tempUsed, permCell)
const bruteEscape = (maze) => {
    const T = maze.length, n = maze[0].length, m = maze[0][0].length;
    const N = n * m;
    const adj = [];
    for (let i = 0; i < N; i++) {
        const r = (i / m) | 0, c = i % m;
        const list = [i];
        if (r > 0) list.push(i - m);
        if (r < n - 1) list.push(i + m);
        if (c > 0) list.push(i - 1);
        if (c < m - 1) list.push(i + 1);
        adj.push(list);
    }
    const open = (t, i) => maze[t][(i / m) | 0][i % m] === '.';
    const key = (t, i, tu, pc) => ((t * N + i) * 2 + tu) * (N + 1) + pc + 1;
    const seen = new Set([key(0, 0, 0, -1)]);
    let cur = [[0, 0, 0, -1]];
    for (const [t, i] of cur) if (i === N - 1) return true;
    for (let t = 0; t < T - 1 && cur.length; t++) {
        const next = [];
        for (const [tt, i, tu, pc] of cur) {
            for (const d of adj[i]) {
                const cand = [];
                if (open(tt + 1, d)) cand.push([tt + 1, d, tu, pc]);
                if (pc !== -1 && d === pc) cand.push([tt + 1, d, tu, pc]); // perm cell always open
                if (!tu) cand.push([tt + 1, d, 1, pc]);                    // temp-cast arrival
                if (pc === -1 && d === i) cand.push([tt + 1, d, tu, d]);   // cast perm on current cell, stay
                if (pc === -1) cand.push([tt + 1, d, tu, d]);              // cast perm entering d
                for (const st of cand) {
                    const k = key(st[0], st[1], st[2], st[3]);
                    if (!seen.has(k)) { seen.add(k); next.push(st); }
                }
            }
        }
        for (const [tt, i] of next) if (i === N - 1) return true;
        cur = next;
    }
    return false;
};
console.log(escapeMaze([[".#.", "#.."], ["...", ".#."], [".##", ".#."], ["..#", ".#."]]) === true);
console.log(escapeMaze([[".#.", "..."], ["...", "..."]]) === false);
console.log(escapeMaze([["...", "...", "..."], [".##", "###", "##."], [".##", "###", "##."], [".##", "###", "##."], [".##", "###", "##."], [".##", "###", "##."], [".##", "###", "##."]]) === false);
// randomized cross-check against the exact model
let seed = 42;
const rnd = (n) => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed % n; };
let allOk = true;
for (let t = 0; t < 500; t++) {
    const T = 1 + rnd(6), n = 1 + rnd(3), m = 1 + rnd(3);
    const maze = [];
    for (let s = 0; s < T; s++) {
        const rows = [];
        for (let r = 0; r < n; r++) {
            let row = '';
            for (let c = 0; c < m; c++) row += ((r === 0 && c === 0) || (r === n - 1 && c === m - 1)) ? '.' : (rnd(4) < 2 ? '#' : '.');
            rows.push(row);
        }
        maze.push(rows);
    }
    const a = escapeMaze(maze), b = bruteEscape(maze);
    if (a !== b) { allOk = false; console.log('MISMATCH', JSON.stringify(maze), a, b); }
}
console.log(allOk);
