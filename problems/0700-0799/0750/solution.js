/*
 * @lc app=leetcode.cn id=750 lang=javascript
 *
 * [750] 角矩形的数量
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countCornerRectangles = function(grid) {
    const cnt = new Map(); // column pair -> how many rows already contain both
    let ans = 0;
    for (const row of grid) {
        const ones = [];
        for (let j = 0; j < row.length; j++) {
            if (row[j] === 1) ones.push(j);
        }
        for (let a = 0; a < ones.length; a++) {
            for (let b = a + 1; b < ones.length; b++) {
                const key = ones[a] * 1000 + ones[b];
                const seen = cnt.get(key) || 0;
                ans += seen; // every earlier row forms one rectangle with this pair
                cnt.set(key, seen + 1);
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countCornerRectangles([[1,0,0,1,0],[0,0,1,0,1],[0,0,0,1,0],[1,0,1,0,1]])); // 1
console.log(countCornerRectangles([[1,1],[1,1]])); // 1
console.log(countCornerRectangles([[1,1,1],[1,1,1]])); // 3 (three column pairs)
console.log(countCornerRectangles([[0,0],[0,0]])); // 0
console.log(countCornerRectangles([[1,1,1]])); // 0 (single row)
