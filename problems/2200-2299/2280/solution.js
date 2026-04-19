/*
 * @lc app=leetcode id=2280 lang=javascript
 *
 * [2280] Minimum Lines to Represent a Line Chart
 */

// @lc code=start
/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
    const n = stockPrices.length;
    if (n <= 1) return 0;
    if (n === 2) return 1;

    stockPrices.sort((a, b) => a[0] - b[0]);

    let lines = 1;
    let prevDy = stockPrices[1][1] - stockPrices[0][1];
    let prevDx = stockPrices[1][0] - stockPrices[0][0];

    for (let i = 2; i < n; i++) {
        const dy = stockPrices[i][1] - stockPrices[i - 1][1];
        const dx = stockPrices[i][0] - stockPrices[i - 1][0];
        // Use BigInt to avoid overflow with large values
        if (BigInt(dy) * BigInt(prevDx) !== BigInt(prevDy) * BigInt(dx)) {
            lines++;
            prevDy = dy;
            prevDx = dx;
        }
    }

    return lines;
};
// @lc code=end

// TEST:
console.log(minimumLines([[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]])); // 3
console.log(minimumLines([[3,4],[1,2],[7,8],[2,3]]));                           // 1
console.log(minimumLines([[1,1]]));                                             // 0
