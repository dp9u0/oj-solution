/*
 * @lc app=leetcode id=957 lang=javascript
 *
 * [957] Prison Cells After N Days
 */

// @lc code=start
/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
    const next = (state) => {
        const res = new Array(8).fill(0);
        for (let i = 1; i < 7; i++) {
            res[i] = state[i - 1] === state[i + 1] ? 1 : 0;
        }
        return res;
    };

    const key = (state) => state.join('');

    const seen = new Map();
    let day = 0;
    while (day < n) {
        const k = key(cells);
        if (seen.has(k)) {
            const cycle = day - seen.get(k);
            n = ((n - day) % cycle);
            // Re-run remaining days
            for (let i = 0; i < n; i++) {
                cells = next(cells);
            }
            return cells;
        }
        seen.set(k, day);
        cells = next(cells);
        day++;
    }
    return cells;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(prisonAfterNDays([0,1,0,1,1,0,0,1], 7)));           // [0,0,1,1,0,0,0,0]
console.log(JSON.stringify(prisonAfterNDays([1,0,0,1,0,0,1,0], 1000000000)));  // [0,0,1,1,1,1,1,0]
