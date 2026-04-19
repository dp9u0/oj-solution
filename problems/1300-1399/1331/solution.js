/*
 * @lc app=leetcode id=1331 lang=javascript
 *
 * [1331] Rank Transform of an Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const rank = new Map();
    for (const v of sorted) {
        if (!rank.has(v)) rank.set(v, rank.size + 1);
    }
    return arr.map(v => rank.get(v));
};
// @lc code=end

// TEST:
console.log(arrayRankTransform([40,10,20,30]));
console.log(arrayRankTransform([100,100,100]));
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));
