/*
 * @lc app=leetcode id=885 lang=javascript
 *
 * [885] Spiral Matrix III
 */

// @lc code=start
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]]; // E, S, W, N
    const total = rows * cols;
    const ans = [];
    let r = rStart, c = cStart, d = 0, step = 1;

    ans.push([r, c]);

    while (ans.length < total) {
        for (let i = 0; i < 2 && ans.length < total; i++) {
            const [dr, dc] = dirs[d % 4];
            for (let j = 0; j < step && ans.length < total; j++) {
                r += dr;
                c += dc;
                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                    ans.push([r, c]);
                }
            }
            d++;
        }
        step++;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(spiralMatrixIII(1, 4, 0, 0))); // [[0,0],[0,1],[0,2],[0,3]]
console.log(JSON.stringify(spiralMatrixIII(5, 6, 1, 4)));
