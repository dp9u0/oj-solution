/*
 * @lc app=leetcode.cn id=LCP 75 lang=javascript
 *
 * [LCP 75] 传送卷轴
 */

// @lc code=start
/**
 * @param {string[]} maze
 * @return {number}
 */
var challengeOfTheKeeper = function(maze) {
    const n = maze.length, N = n * n;
    const id = (i, j) => i * n + j;
    let S = -1, T = -1;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        if (maze[i][j] === 'S') S = id(i, j);
        else if (maze[i][j] === 'T') T = id(i, j);
    }
    // BFS from T
    const INF = Infinity;
    const distT = new Array(N).fill(INF);
    distT[T] = 0;
    const q = [T];
    for (let h = 0; h < q.length; h++) {
        const v = q[h], i = (v / n) | 0, j = v % n, d = distT[v] + 1;
        for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const ni = i + di, nj = j + dj;
            if (ni < 0 || ni >= n || nj < 0 || nj >= n || maze[ni][nj] === '#') continue;
            const u = id(ni, nj);
            if (distT[u] === INF) { distT[u] = d; q.push(u); }
        }
    }
    if (distT[S] === INF) return -1;
    // keeper's value per empty cell; -1 = cannot fire, Infinity = blocking mirror
    const val = new Array(N).fill(-1);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        if (maze[i][j] !== '.') continue;
        let best = -1;
        for (const [mi, mj] of [[i, n - 1 - j], [n - 1 - i, j]]) {
            if (maze[mi][mj] === '#') continue;
            const d = distT[id(mi, mj)];
            best = Math.max(best, d);
        }
        val[id(i, j)] = best;
    }
    // Dijkstra minimizing the path maximum
    const dist = new Array(N).fill(INF);
    dist[S] = 0;
    const heap = [[0, S]]; // [cost, cell]
    const push = (c, v) => {
        heap.push([c, v]);
        let k = heap.length - 1;
        while (k > 0) {
            const p = (k - 1) >> 1;
            if (heap[p][0] <= heap[k][0]) break;
            [heap[p], heap[k]] = [heap[k], heap[p]];
            k = p;
        }
    };
    const pop = () => {
        const top = heap[0], last = heap.pop();
        if (heap.length) {
            heap[0] = last;
            let k = 0;
            for (;;) {
                const a = 2 * k + 1, b = 2 * k + 2;
                let m = k;
                if (a < heap.length && heap[a][0] < heap[m][0]) m = a;
                if (b < heap.length && heap[b][0] < heap[m][0]) m = b;
                if (m === k) break;
                [heap[m], heap[k]] = [heap[k], heap[m]];
                k = m;
            }
        }
        return top;
    };
    while (heap.length) {
        const [d0, v] = pop();
        if (d0 > dist[v]) continue;
        if (v === T) break;
        const i = (v / n) | 0, j = v % n;
        for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const ni = i + di, nj = j + dj;
            if (ni < 0 || ni >= n || nj < 0 || nj >= n || maze[ni][nj] === '#') continue;
            const u = id(ni, nj);
            const c = val[u] === Infinity ? Infinity : Math.max(d0, val[u]);
            if (c < dist[u]) { dist[u] = c; push(c, u); }
        }
    }
    return dist[T] === Infinity ? -1 : dist[T];
};
// @lc code=end

// TEST:
console.log(challengeOfTheKeeper([".....", "##S..", "...#.", "T.#..", "###.."]) === 7);
console.log(challengeOfTheKeeper([".#..", "..##", ".#S.", ".#.T"]) === -1);
console.log(challengeOfTheKeeper(["S###.", "..###", "#..##", "##..#", "###.T"]) === 5);
// direct row: path crosses (2,1) val 1 and (2,2) val 2 -> 2
console.log(challengeOfTheKeeper(["....", "##.#", "S..T", "...."]) === 2);
// S adjacent to T: no empty cell in between, keeper cannot fire -> 0
console.log(challengeOfTheKeeper(["....", "ST..", "....", "#..."]) === 0);
// forced route through (3,2) whose row-mirror is far from T -> 8
console.log(challengeOfTheKeeper(["T#..", ".#.#", ".#.#", "...S"]) === 8);
// forced corridor through a cell whose mirror is unreachable -> -1
console.log(challengeOfTheKeeper(["S...", "###.", "###.", "..#T"]) === -1);
// S region sealed off from T -> -1
console.log(challengeOfTheKeeper(["S.#.", "##.#", "##.#", "...T"]) === -1);
