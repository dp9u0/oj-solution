/*
 * @lc app=leetcode id=3797 lang=javascript
 *
 * [3797] Count Routes to Climb a Rectangular Grid
 */

// @lc code=start
/**
 * @param {string[]} grid
 * @param {number} d
 * @return {number}
 */
var numberOfRoutes = function(grid, d) {
    const MOD = 1e9 + 7;
    const n = grid.length;
    const m = grid[0].length;
    const wUp = Math.floor(Math.sqrt(d * d - 1));

    let prevArrive = null;
    let prevStay = null;

    for (let r = n - 1; r >= 0; r--) {
        const row = grid[r];
        const arrive = new Array(m).fill(0);
        const stay = new Array(m).fill(0);

        // Step 1: Compute arrive[r] from row r+1
        if (r === n - 1) {
            for (let c = 0; c < m; c++) {
                if (row[c] === '.') arrive[c] = 1;
            }
        } else {
            const nextRow = grid[r + 1];
            // Prefix sum of (prevArrive + prevStay) for row r+1
            const prefix = new Array(m + 1).fill(0);
            for (let c = 0; c < m; c++) {
                const val = nextRow[c] === '.' ? (prevArrive[c] + prevStay[c]) % MOD : 0;
                prefix[c + 1] = (prefix[c] + val) % MOD;
            }
            for (let c = 0; c < m; c++) {
                if (row[c] === '.') {
                    const lo = Math.max(0, c - wUp);
                    const hi = Math.min(m - 1, c + wUp);
                    arrive[c] = (prefix[hi + 1] - prefix[lo] + MOD) % MOD;
                }
            }
        }

        // Step 2: Compute stay[r] from arrive[r] (same-row moves)
        const prefixA = new Array(m + 1).fill(0);
        for (let c = 0; c < m; c++) {
            prefixA[c + 1] = (prefixA[c] + arrive[c]) % MOD;
        }
        for (let c = 0; c < m; c++) {
            if (row[c] === '.') {
                const lo = Math.max(0, c - d);
                const hi = Math.min(m - 1, c + d);
                const total = (prefixA[hi + 1] - prefixA[lo] + MOD) % MOD;
                stay[c] = (total - arrive[c] + MOD) % MOD;
            }
        }

        prevArrive = arrive;
        prevStay = stay;
    }

    let result = 0;
    for (let c = 0; c < m; c++) {
        result = (result + prevArrive[c] + prevStay[c]) % MOD;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(numberOfRoutes(["..", "#."], 1)); // 2
console.log(numberOfRoutes(["..", "#."], 2)); // 4
console.log(numberOfRoutes(["#"], 750)); // 0
console.log(numberOfRoutes([".."], 1)); // 4
console.log(numberOfRoutes(["...", "..."], 1)); // test
