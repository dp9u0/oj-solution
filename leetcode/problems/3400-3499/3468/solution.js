/*
 * @lc app=leetcode id=3468 lang=javascript
 *
 * [3468] Find the Number of Copy Arrays
 */

// @lc code=start
/**
 * @param {number[]} original
 * @param {number[][]} bounds
 * @return {number}
 */
var countArrays = function(original, bounds) {
    const n = original.length;
    let lo = bounds[0][0];
    let hi = bounds[0][1];

    for (let i = 1; i < n; i++) {
        const diff = original[i] - original[0];
        lo = Math.max(lo, bounds[i][0] - diff);
        hi = Math.min(hi, bounds[i][1] - diff);
        if (lo > hi) return 0;
    }

    return hi - lo + 1;
};
// @lc code=end

// TEST:
console.log(countArrays([1,2,3,4], [[1,2],[2,3],[3,4],[4,5]]));           // 2
console.log(countArrays([1,2,3,4], [[1,10],[2,9],[3,8],[4,7]]));           // 4
console.log(countArrays([1,2,1,2], [[1,1],[2,3],[3,3],[2,3]]));            // 0
