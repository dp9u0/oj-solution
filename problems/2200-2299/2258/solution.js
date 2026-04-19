/*
 * @lc app=leetcode id=2258 lang=javascript
 *
 * [2258] Escape the Spreading Fire
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinutes = function(grid) {
    const m = grid.length, n = grid[0].length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const INF = Infinity;

    // BFS fire spread time
    const fireTime = Array.from({ length: m }, () => new Array(n).fill(INF));
    const fireQ = [];
    for (let r = 0; r < m; r++)
        for (let c = 0; c < n; c++)
            if (grid[r][c] === 1) { fireTime[r][c] = 0; fireQ.push(r * n + c); }

    let qi = 0;
    while (qi < fireQ.length) {
        const r = (fireQ[qi] / n) | 0, c = fireQ[qi] % n;
        qi++;
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 0 && fireTime[nr][nc] === INF) {
                fireTime[nr][nc] = fireTime[r][c] + 1;
                fireQ.push(nr * n + nc);
            }
        }
    }

    const check = (wait) => {
        if (fireTime[0][0] <= wait) return false;
        const dist = Array.from({ length: m }, () => new Array(n).fill(-1));
        const q = [0];
        dist[0][0] = 0;
        let qi2 = 0;
        while (qi2 < q.length) {
            const r = (q[qi2] / n) | 0, c = q[qi2] % n;
            qi2++;
            const t = dist[r][c];
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr < 0 || nr >= m || nc < 0 || nc >= n || grid[nr][nc] !== 0 || dist[nr][nc] >= 0) continue;
                const arrive = t + 1;
                const fire = fireTime[nr][nc];
                const isEnd = nr === m - 1 && nc === n - 1;
                if (isEnd ? fire < arrive + wait : fire <= arrive + wait) continue;
                dist[nr][nc] = arrive;
                q.push(nr * n + nc);
            }
        }
        return dist[m - 1][n - 1] >= 0;
    };

    // Binary search on wait time
    let lo = -1, hi = 1e9;
    while (lo < hi) {
        const mid = lo + ((hi - lo + 1) >> 1);
        if (check(mid)) lo = mid;
        else hi = mid - 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(maximumMinutes([[0,2,0,0,0,0,0],[0,0,0,2,2,1,0],[0,2,0,0,1,2,0],[0,0,2,2,2,0,2],[0,0,0,0,0,0,0]])); // 3
console.log(maximumMinutes([[0,0,0,0],[0,1,2,0],[0,2,0,0]])); // -1
console.log(maximumMinutes([[0,0,0],[2,2,0],[1,2,0]])); // 1000000000
console.log(maximumMinutes([[0,0],[0,0]])); // 1000000000
console.log(maximumMinutes([[0,1],[0,0]])); // -1
