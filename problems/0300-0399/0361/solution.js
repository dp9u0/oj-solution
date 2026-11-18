/*
 * @lc app=leetcode.cn id=361 lang=javascript
 *
 * [361] 轰炸敌人
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
    const m = grid.length, n = grid[0].length;
    const rowHit = Array.from({ length: m }, () => new Array(n).fill(0));
    const colSum = Array.from({ length: m }, () => new Array(n).fill(0));

    // horizontal: enemies visible in the row segment containing each cell
    for (let i = 0; i < m; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            const c = grid[i][j];
            if (c === 'W') cnt = 0;
            else { rowHit[i][j] += cnt; if (c === 'E') cnt++; }
        }
        cnt = 0;
        for (let j = n - 1; j >= 0; j--) {
            const c = grid[i][j];
            if (c === 'W') cnt = 0;
            else { rowHit[i][j] += cnt; if (c === 'E') cnt++; }
        }
    }

    // vertical: enemies visible in the column segment containing each cell
    for (let j = 0; j < n; j++) {
        let cnt = 0;
        for (let i = 0; i < m; i++) {
            const c = grid[i][j];
            if (c === 'W') cnt = 0;
            else { colSum[i][j] += cnt; if (c === 'E') cnt++; }
        }
        cnt = 0;
        for (let i = m - 1; i >= 0; i--) {
            const c = grid[i][j];
            if (c === 'W') cnt = 0;
            else { colSum[i][j] += cnt; if (c === 'E') cnt++; }
        }
    }

    let best = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '0') {
                best = Math.max(best, rowHit[i][j] + colSum[i][j]);
            }
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(maxKilledEnemies([["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]])); // 3
console.log(maxKilledEnemies([["W","W","W"],["0","0","0"],["E","E","E"]])); // 1
console.log(maxKilledEnemies([["E"]])); // 0 (no empty cell)
console.log(maxKilledEnemies([["0"]])); // 0
console.log(maxKilledEnemies([["E","0","E"]])); // 2 (one enemy each side)
console.log(maxKilledEnemies([["0","E"],["E","0"]])); // 2 (row + column enemies)
console.log(maxKilledEnemies([["E","W","E","0"]])); // 1 (wall blocks the far enemy)
