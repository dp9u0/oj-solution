/*
 * @lc app=leetcode id=1536 lang=javascript
 *
 * [1536] Minimum Swaps to Arrange a Binary Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
    const n = grid.length;
    const tz = grid.map(row => {
        let c = 0;
        for (let j = n - 1; j >= 0 && row[j] === 0; j--) c++;
        return c;
    });

    let swaps = 0;
    for (let i = 0; i < n; i++) {
        const need = n - 1 - i;
        let found = -1;
        for (let j = i; j < n; j++) {
            if (tz[j] >= need) { found = j; break; }
        }
        if (found === -1) return -1;
        for (let j = found; j > i; j--) {
            [tz[j], tz[j - 1]] = [tz[j - 1], tz[j]];
            swaps++;
        }
    }
    return swaps;
};
// @lc code=end

// TEST:
console.log(minSwaps([[0,0,1],[1,1,0],[1,0,0]])); // 3
console.log(minSwaps([[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]])); // -1
console.log(minSwaps([[1,0,0],[1,1,0],[1,1,1]])); // 0
console.log(minSwaps([[0,0],[0,1]])); // 0
console.log(minSwaps([[0,1],[0,0]])); // 1
