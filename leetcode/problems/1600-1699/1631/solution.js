/*
 * @lc app=leetcode id=1631 lang=javascript
 *
 * [1631] Path With Minimum Effort
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const rows = heights.length, cols = heights[0].length;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];

    let lo = 0, hi = 0;
    for (const row of heights) for (const h of row) hi = Math.max(hi, h);

    const canReach = (limit) => {
        const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
        const queue = [[0, 0]];
        visited[0][0] = true;
        while (queue.length > 0) {
            const [r, c] = queue.shift();
            if (r === rows - 1 && c === cols - 1) return true;
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
                    if (Math.abs(heights[nr][nc] - heights[r][c]) <= limit) {
                        visited[nr][nc] = true;
                        queue.push([nr, nc]);
                    }
                }
            }
        }
        return false;
    };

    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (canReach(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]])); // 2
console.log(minimumEffortPath([[1,2,3],[3,8,4],[5,3,5]])); // 1
console.log(minimumEffortPath([[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]])); // 0
