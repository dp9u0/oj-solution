/*
 * @lc app=leetcode id=1970 lang=javascript
 *
 * [1970] Last Day Where You Can Still Cross
 */

// @lc code=start
/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function(row, col, cells) {
    const total = row * col;
    const grid = new Int8Array(total);

    const can = (day) => {
        grid.fill(0);
        for (let i = 0; i < day; i++) {
            grid[(cells[i][0] - 1) * col + cells[i][1] - 1] = 1;
        }
        const q = [];
        for (let j = 0; j < col; j++) {
            if (grid[j] === 0) { q.push(j); grid[j] = 2; }
        }
        const dirs = [-1, 0, 1, 0, 0, -1, 0, 1];
        let head = 0;
        while (head < q.length) {
            const pos = q[head++];
            const r = (pos / col) | 0, c = pos % col;
            if (r === row - 1) return true;
            for (let d = 0; d < 8; d += 2) {
                const nr = r + dirs[d], nc = c + dirs[d + 1];
                if (nr >= 0 && nr < row && nc >= 0 && nc < col) {
                    const np = nr * col + nc;
                    if (grid[np] === 0) { grid[np] = 2; q.push(np); }
                }
            }
        }
        return false;
    };

    let lo = 0, hi = total;
    while (lo < hi) {
        const mid = (lo + hi + 1) >> 1;
        if (can(mid)) lo = mid;
        else hi = mid - 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(latestDayToCross(2, 2, [[1,1],[2,1],[1,2],[2,2]]));  // 2
console.log(latestDayToCross(2, 2, [[1,1],[1,2],[2,1],[2,2]]));  // 1
console.log(latestDayToCross(3, 3, [[1,2],[2,1],[3,3],[2,2],[1,1],[1,3],[2,3],[3,2],[3,1]]));  // 3
console.log(latestDayToCross(2, 3, [[1,1],[1,2],[1,3],[2,1],[2,2],[2,3]]));  // 2
console.log(latestDayToCross(3, 2, [[1,1],[2,1],[3,1],[1,2],[2,2],[3,2]]));  // 3
