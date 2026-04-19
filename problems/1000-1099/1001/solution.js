/*
 * @lc app=leetcode id=1001 lang=javascript
 *
 * [1001] Grid Illumination
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(n, lamps, queries) {
    const row = {}, col = {}, diag1 = {}, diag2 = {};
    const lampSet = new Set();

    for (const [r, c] of lamps) {
        const key = r * n + c;
        if (lampSet.has(key)) continue;
        lampSet.add(key);
        row[r] = (row[r] || 0) + 1;
        col[c] = (col[c] || 0) + 1;
        diag1[r - c] = (diag1[r - c] || 0) + 1;
        diag2[r + c] = (diag2[r + c] || 0) + 1;
    }

    const ans = [];
    const dirs = [[0,0],[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]];
    for (const [r, c] of queries) {
        const lit = (row[r] || 0) > 0 || (col[c] || 0) > 0 || (diag1[r - c] || 0) > 0 || (diag2[r + c] || 0) > 0;
        ans.push(lit ? 1 : 0);

        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
            const key = nr * n + nc;
            if (lampSet.has(key)) {
                lampSet.delete(key);
                row[nr]--;
                col[nc]--;
                diag1[nr - nc]--;
                diag2[nr + nc]--;
            }
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(gridIllumination(5, [[0,0],[4,4]], [[1,1],[1,0]]))); // [1,0]
console.log(JSON.stringify(gridIllumination(5, [[0,0],[4,4]], [[1,1],[1,1]]))); // [1,1]
console.log(JSON.stringify(gridIllumination(5, [[0,0],[0,4]], [[0,4],[0,1],[1,4]]))); // [1,1,0]
