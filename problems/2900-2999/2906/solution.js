/*
 * @lc app=leetcode id=2906 lang=javascript
 *
 * [2906] Construct Product Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function(grid) {
    const MOD = 12345;
    const flat = grid.flat();
    const len = flat.length;
    const prefix = new Array(len).fill(1);
    const suffix = new Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        prefix[i] = (prefix[i - 1] * flat[i - 1]) % MOD;
    }
    for (let i = len - 2; i >= 0; i--) {
        suffix[i] = (suffix[i + 1] * flat[i + 1]) % MOD;
    }
    const result = [];
    let idx = 0;
    for (let i = 0; i < grid.length; i++) {
        const row = [];
        for (let j = 0; j < grid[0].length; j++) {
            row.push((prefix[idx] * suffix[idx]) % MOD);
            idx++;
        }
        result.push(row);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(constructProductMatrix([[1,2],[3,4]]))); // [[24,12],[8,6]]
console.log(JSON.stringify(constructProductMatrix([[12345],[2],[1]]))); // [[2],[0],[0]]
