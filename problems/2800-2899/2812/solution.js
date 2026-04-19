/*
 * @lc app=leetcode id=2812 lang=javascript
 *
 * [2812] Find the Safest Path in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    const n = grid.length;
    const dist = Array.from({ length: n }, () => new Array(n).fill(-1));
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];

    // Multi-source BFS from all thieves
    const queue = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                dist[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    let head = 0;
    while (head < queue.length) {
        const [r, c] = queue[head++];
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] === -1) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    // BFS with max-heap (priority queue) using sorted array
    // Use binary search + BFS instead for efficiency
    let lo = 0, hi = dist[0][0];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            hi = Math.min(hi, dist[i][j]);
        }
    }
    hi = Math.max(...dist.map(row => Math.max(...row)));

    function canReach(minDist) {
        if (dist[0][0] < minDist || dist[n-1][n-1] < minDist) return false;
        const visited = Array.from({ length: n }, () => new Array(n).fill(false));
        const q = [[0, 0]];
        visited[0][0] = true;
        let h = 0;
        while (h < q.length) {
            const [r, c] = q[h++];
            if (r === n - 1 && c === n - 1) return true;
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc] && dist[nr][nc] >= minDist) {
                    visited[nr][nc] = true;
                    q.push([nr, nc]);
                }
            }
        }
        return false;
    }

    let result = 0;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (canReach(mid)) {
            result = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maximumSafenessFactor([[1,0,0],[0,0,0],[0,0,1]])); // 0
console.log(maximumSafenessFactor([[0,0,1],[0,0,0],[0,0,0]])); // 2
console.log(maximumSafenessFactor([[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]])); // 2
