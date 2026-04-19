/*
 * @lc app=leetcode id=2088 lang=javascript
 *
 * [2088] Count Fertile Pyramids in a Land
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPyramids = function(grid) {
    const m = grid.length, n = grid[0].length;
    let ans = 0;

    // Regular pyramids (apex top, compute bottom-up)
    let prev = new Array(n).fill(0);
    for (let r = m - 1; r >= 0; r--) {
        const curr = new Array(n).fill(0);
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            const left = c > 0 ? prev[c - 1] : 0;
            const mid = prev[c];
            const right = c < n - 1 ? prev[c + 1] : 0;
            curr[c] = 1 + Math.min(left, mid, right);
            ans += curr[c] - 1;
        }
        prev = curr;
    }

    // Inverse pyramids (apex bottom, compute top-down)
    prev = new Array(n).fill(0);
    for (let r = 0; r < m; r++) {
        const curr = new Array(n).fill(0);
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            const left = c > 0 ? prev[c - 1] : 0;
            const mid = prev[c];
            const right = c < n - 1 ? prev[c + 1] : 0;
            curr[c] = 1 + Math.min(left, mid, right);
            ans += curr[c] - 1;
        }
        prev = curr;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(countPyramids([[0,1,1,0],[1,1,1,1]])); // 2
console.log(countPyramids([[1,1,1],[1,1,1]])); // 2
console.log(countPyramids([[1,1,1,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,0,0,1]])); // 13
console.log(countPyramids([[1,1,1],[1,1,1],[1,1,1]])); // 4
console.log(countPyramids([[1]])); // 0
