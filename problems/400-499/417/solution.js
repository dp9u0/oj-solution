/*
 * @lc app=leetcode id=417 lang=javascript
 *
 * [417] Pacific Atlantic Water Flow
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length, n = heights[0].length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const bfs = (queue) => {
        const visited = Array.from({ length: m }, () => new Array(n).fill(false));
        for (const [r, c] of queue) visited[r][c] = true;

        while (queue.length > 0) {
            const [r, c] = queue.shift();
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < m && nc >= 0 && nc < n
                    && !visited[nr][nc] && heights[nr][nc] >= heights[r][c]) {
                    visited[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        }
        return visited;
    };

    const pacificQueue = [];
    const atlanticQueue = [];
    for (let i = 0; i < m; i++) {
        pacificQueue.push([i, 0]);
        atlanticQueue.push([i, n - 1]);
    }
    for (let j = 0; j < n; j++) {
        pacificQueue.push([0, j]);
        atlanticQueue.push([m - 1, j]);
    }

    const pacific = bfs(pacificQueue);
    const atlantic = bfs(atlanticQueue);

    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]])));
// Expected: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

console.log(JSON.stringify(pacificAtlantic([[1]])));
// Expected: [[0,0]]
