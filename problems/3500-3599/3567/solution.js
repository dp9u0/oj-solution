/*
 * @lc app=leetcode id=3567 lang=javascript
 *
 * [3567] Minimum Absolute Difference in Sliding Submatrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var minAbsDiff = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    const ans = [];
    for (let i = 0; i <= m - k; i++) {
        const row = [];
        for (let j = 0; j <= n - k; j++) {
            const vals = [];
            for (let r = i; r < i + k; r++)
                for (let c = j; c < j + k; c++)
                    vals.push(grid[r][c]);
            vals.sort((a, b) => a - b);
            let minDiff = Infinity;
            for (let x = 1; x < vals.length; x++)
                if (vals[x] !== vals[x - 1])
                    minDiff = Math.min(minDiff, vals[x] - vals[x - 1]);
            row.push(minDiff === Infinity ? 0 : minDiff);
        }
        ans.push(row);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minAbsDiff([[1,8],[3,-2]], 2))); // [[2]]
console.log(JSON.stringify(minAbsDiff([[3,-1]], 1))); // [[0,0]]
console.log(JSON.stringify(minAbsDiff([[1,-2,3],[2,3,5]], 2))); // [[1,2]]
console.log(JSON.stringify(minAbsDiff([[5]], 1))); // [[0]]
console.log(JSON.stringify(minAbsDiff([[1,2],[3,4]], 1))); // [[0,0],[0,0]]
