/*
 * @lc app=leetcode.cn id=2123 lang=javascript
 *
 * [2123] 使矩阵中的 1 互不相邻的最小操作数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
    const m = grid.length, n = grid[0].length;
    // checkerboard bipartition of 1-cells
    const leftId = new Int32Array(m * n).fill(-1);
    const rightId = new Int32Array(m * n).fill(-1);
    let nL = 0, nR = 0;
    const adjL = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== 1) continue;
            const id = r * n + c;
            if ((r + c) % 2 === 0) {
                leftId[id] = nL++;
                adjL.push([]);
            } else {
                rightId[id] = nR++;
            }
        }
    }
    const D = [[1,0],[-1,0],[0,1],[0,-1]];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== 1 || (r + c) % 2 !== 0) continue;
            const u = leftId[r * n + c];
            for (const [dr, dc] of D) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
                    adjL[u].push(rightId[nr * n + nc]);
                }
            }
        }
    }
    // Hopcroft-Karp
    const matchL = new Int32Array(nL).fill(-1);
    const matchR = new Int32Array(nR).fill(-1);
    const dist = new Int32Array(nL);
    const queue = new Int32Array(nL);
    let matching = 0;
    const bfs = () => {
        let head = 0, tail = 0;
        for (let u = 0; u < nL; u++) {
            if (matchL[u] === -1) {
                dist[u] = 0;
                queue[tail++] = u;
            } else {
                dist[u] = -1;
            }
        }
        let found = false;
        while (head < tail) {
            const u = queue[head++];
            for (const v of adjL[u]) {
                const w = matchR[v];
                if (w === -1) {
                    found = true;
                } else if (dist[w] === -1) {
                    dist[w] = dist[u] + 1;
                    queue[tail++] = w;
                }
            }
        }
        return found;
    };
    const dfs = (u) => {
        for (const v of adjL[u]) {
            const w = matchR[v];
            if (w === -1 || (dist[w] === dist[u] + 1 && dfs(w))) {
                matchL[u] = v;
                matchR[v] = u;
                return true;
            }
        }
        dist[u] = -1;
        return false;
    };
    while (bfs()) {
        for (let u = 0; u < nL; u++) {
            if (matchL[u] === -1 && dfs(u)) matching++;
        }
    }
    return matching;
};
// @lc code=end

// TEST:
console.log(minimumOperations([[1,1,0],[0,1,1],[1,1,1]])); // 3
console.log(minimumOperations([[0,0,0],[0,0,0],[0,0,0]])); // 0
console.log(minimumOperations([[0,1],[1,0]])); // 0
console.log(minimumOperations([[1]])); // 0
console.log(minimumOperations([[1,1],[1,1]])); // 2 (4-cycle: min vertex cover = 2)
