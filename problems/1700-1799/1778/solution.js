/*
 * @lc app=leetcode.cn id=1778 lang=javascript
 *
 * [1778] 未知网格中的最短路径
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
 *     @return {void}
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
    const OFF = 505, SIZE = 1011;
    const grid = new Int8Array(SIZE * SIZE); // 0 unknown, 1 open, 2 target, 3 blocked
    const key = (r, c) => r * SIZE + c;
    const sr = OFF, sc = OFF;
    const dirsArr = [['U', -1, 0], ['D', 1, 0], ['L', 0, -1], ['R', 0, 1]];
    const rev = { U: 'D', D: 'U', L: 'R', R: 'L' };

    grid[key(sr, sc)] = master.isTarget() ? 2 : 1;
    let targetKey = grid[key(sr, sc)] === 2 ? key(sr, sc) : -1;

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
        if (grid[nk] !== 0) continue; // already explored or blocked
        if (!master.canMove(d)) {
            grid[nk] = 3;
            continue;
        }
        master.move(d);
        const v = master.isTarget() ? 2 : 1;
        grid[nk] = v;
        if (v === 2) targetKey = nk;
        stack.push([r + dr, c + dc]);
        dirIter.push(0);
        entries.push(d);
    }

    if (targetKey === -1) return -1;

    // BFS over known cells
    const startK = key(sr, sc);
    const dist = new Int32Array(SIZE * SIZE).fill(-1);
    dist[startK] = 0;
    const bq = [startK];
    let bh = 0;
    while (bh < bq.length) {
        const k = bq[bh++];
        if (k === targetKey) return dist[k];
        const r = (k / SIZE) | 0, c = k % SIZE;
        for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            const nk = key(r + dr, c + dc);
            if (dist[nk] === -1 && (grid[nk] === 1 || grid[nk] === 2)) {
                dist[nk] = dist[k] + 1;
                bq.push(nk);
            }
        }
    }
    return -1;
};
// @lc code=end

// TEST:
const makeMaster = (g) => {
    let r = 0, c = 0;
    for (let i = 0; i < g.length; i++)
        for (let j = 0; j < g[0].length; j++)
            if (g[i][j] === -1) { r = i; c = j; }
    const D = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
    return {
        pos: () => [r, c],
        canMove: (d) => {
            const nr = r + D[d][0], nc = c + D[d][1];
            return nr >= 0 && nr < g.length && nc >= 0 && nc < g[0].length && g[nr][nc] !== 0;
        },
        move: (d) => {
            const nr = r + D[d][0], nc = c + D[d][1];
            if (nr >= 0 && nr < g.length && nc >= 0 && nc < g[0].length && g[nr][nc] !== 0) {
                r = nr; c = nc;
            }
        },
        isTarget: () => g[r][c] === 2,
    };
};
console.log(findShortestPath(makeMaster([[1,2],[-1,0]]))); // 2
console.log(findShortestPath(makeMaster([[0,0,-1],[1,1,1],[2,0,0]]))); // 4
console.log(findShortestPath(makeMaster([[-1,0],[0,2]]))); // -1
