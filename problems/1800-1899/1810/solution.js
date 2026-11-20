/*
 * @lc app=leetcode.cn id=1810 lang=javascript
 *
 * [1810] 隐藏网格下的最小消耗路径
 */

// @lc code=start
/**
 * // This is the GridMaster's API interface.
 * // You should not implement it, or speculate about its implementation
 * function GridMaster() {
 *
 *     @param {character} direction
 *     @return {boolean}
 *     this.canMove = function(direction) {
 *         ...
 *     };
 *     @param {character} direction
 *     @return {integer}
 *     this.move = function(direction) {
 *         ...
 *     };
 *     @return {boolean}
 *     this.isTarget = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {GridMaster} master
 * @return {integer}
 */
var findShortestPath = function(master) {
    const OFF = 101, SIZE = 203;
    const grid = new Int32Array(SIZE * SIZE); // 0 unknown, -1 blocked, >0 entry cost
    const key = (r, c) => r * SIZE + c;
    const sr = OFF, sc = OFF;
    const dirsArr = [['U', -1, 0], ['D', 1, 0], ['L', 0, -1], ['R', 0, 1]];
    const rev = { U: 'D', D: 'U', L: 'R', R: 'L' };

    grid[key(sr, sc)] = 1; // open (start cost not counted; positive costs prevent revisits)
    let targetKey = master.isTarget() ? key(sr, sc) : -1;

    // iterative DFS with backtracking moves
    const stack = [[sr, sc]];
    const dirIter = [0];
    const entries = [null];
    while (stack.length) {
        const top = stack.length - 1;
        const [r, c] = stack[top];
        const di = dirIter[top];
        if (di === dirsArr.length) {
            stack.pop();
            dirIter.pop();
            const entry = entries.pop();
            if (entry) master.move(rev[entry]);
            continue;
        }
        dirIter[top]++;
        const [d, dr, dc] = dirsArr[di];
        const nk = key(r + dr, c + dc);
        if (grid[nk] !== 0) continue;
        const cost = master.move(d); // -1 if blocked (robot stays)
        if (cost === -1) {
            grid[nk] = -1;
            continue;
        }
        grid[nk] = cost;
        if (master.isTarget()) targetKey = nk;
        stack.push([r + dr, c + dc]);
        dirIter.push(0);
        entries.push(d);
    }

    if (targetKey === -1) return -1;

    // Dijkstra with a small binary heap
    const INF = 1e9;
    const D = new Int32Array(SIZE * SIZE).fill(INF);
    const heap = [];
    const push = (d, k) => {
        heap.push([d, k]);
        let i = heap.length - 1;
        while (i > 0) {
            const par = (i - 1) >> 1;
            if (heap[par][0] <= heap[i][0]) break;
            [heap[par], heap[i]] = [heap[i], heap[par]];
            i = par;
        }
    };
    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length) {
            heap[0] = last;
            let i = 0;
            for (;;) {
                const l = 2 * i + 1, rr = 2 * i + 2;
                let m = i;
                if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
                if (rr < heap.length && heap[rr][0] < heap[m][0]) m = rr;
                if (m === i) break;
                [heap[m], heap[i]] = [heap[i], heap[m]];
                i = m;
            }
        }
        return top;
    };
    push(0, key(sr, sc));
    while (heap.length) {
        const [d, k] = pop();
        if (k === targetKey) return d;
        if (d > D[k]) continue;
        const r = (k / SIZE) | 0, c = k % SIZE;
        for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            const nk = key(r + dr, c + dc);
            const w = grid[nk];
            if (w > 0) {
                const nd = d + w;
                if (nd < D[nk]) {
                    D[nk] = nd;
                    push(nd, nk);
                }
            }
        }
    }
    return -1;
};
// @lc code=end

// TEST:
const makeMaster = (g, r1, c1, r2, c2) => {
    let r = r1, c = c1;
    const D = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
    return {
        canMove: (d) => {
            const nr = r + D[d][0], nc = c + D[d][1];
            return nr >= 0 && nr < g.length && nc >= 0 && nc < g[0].length && g[nr][nc] !== 0;
        },
        move: (d) => {
            const nr = r + D[d][0], nc = c + D[d][1];
            if (nr >= 0 && nr < g.length && nc >= 0 && nc < g[0].length && g[nr][nc] !== 0) {
                r = nr; c = nc;
                return g[r][c];
            }
            return -1;
        },
        isTarget: () => r === r2 && c === c2,
    };
};
console.log(findShortestPath(makeMaster([[2,3],[1,1]], 0, 1, 1, 0))); // 2
console.log(findShortestPath(makeMaster([[0,3,1],[3,4,2],[1,2,0]], 2, 0, 0, 2))); // 9
console.log(findShortestPath(makeMaster([[1,0],[0,1]], 0, 0, 1, 1))); // -1
