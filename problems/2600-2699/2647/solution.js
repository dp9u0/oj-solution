/*
 * @lc app=leetcode.cn id=2647 lang=javascript
 *
 * [2647] 把三角形染成红色
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var colorRed = function(n) {
    const chunks = [];
    let r0 = n;
    // bottom-up in 4-row chunks: top col 1, odd cols from 3, col 2, bottom all odd
    while (r0 >= 4) {
        const g = [];
        g.push([r0 - 3, 1]);
        for (let j = 3; j <= 2 * (r0 - 2) - 1; j += 2) g.push([r0 - 2, j]);
        g.push([r0 - 1, 2]);
        for (let j = 1; j <= 2 * r0 - 1; j += 2) g.push([r0, j]);
        chunks.push(g);
        r0 -= 4;
    }
    // leftover top rows: staircase
    const g = [];
    for (let i = 1; i <= r0; i++) {
        g.push([i, 1]);
        if (i >= 2) g.push([i, 2 * i - 1]);
    }
    chunks.push(g);
    return chunks.reverse().flat();
};
// @lc code=end

// TEST:
console.log(JSON.stringify(colorRed(1))); // [[1,1]]
console.log(JSON.stringify(colorRed(2))); // [[1,1],[2,1],[2,3]]
console.log(JSON.stringify(colorRed(3))); // [[1,1],[2,1],[2,3],[3,1],[3,5]]
console.log(JSON.stringify(colorRed(5))); // [[1,1],[2,1],[3,3],[3,5],[4,2],[5,1],[5,3],[5,5],[5,7],[5,9]]
console.log(JSON.stringify(colorRed(10)).length); // 33 seeds
