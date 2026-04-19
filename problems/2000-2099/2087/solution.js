/*
 * @lc app=leetcode id=2087 lang=javascript
 *
 * [2087] Minimum Cost Homecoming of a Robot in a Grid
 */

// @lc code=start
/**
 * @param {number[]} startPos
 * @param {number[]} homePos
 * @param {number[]} rowCosts
 * @param {number[]} colCosts
 * @return {number}
 */
var minCost = function(startPos, homePos, rowCosts, colCosts) {
    let result = 0;
    const [sr, sc] = startPos;
    const [hr, hc] = homePos;

    const rStart = Math.min(sr, hr), rEnd = Math.max(sr, hr);
    for (let r = rStart; r <= rEnd; r++) result += rowCosts[r];
    // subtract start row since we don't pay cost for starting position
    result -= rowCosts[sr];

    const cStart = Math.min(sc, hc), cEnd = Math.max(sc, hc);
    for (let c = cStart; c <= cEnd; c++) result += colCosts[c];
    result -= colCosts[sc];

    return result;
};
// @lc code=end

// TEST:
console.log(minCost([1,0], [2,3], [5,4,3], [8,2,6,7])); // 18
console.log(minCost([0,0], [0,0], [5], [26])); // 0
