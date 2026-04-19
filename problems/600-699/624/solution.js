/*
 * @lc app=leetcode id=624 lang=javascript
 *
 * [624] Maximum Distance in Arrays
 */

// @lc code=start
/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let result = 0;
    let curMin = arrays[0][0];
    let curMax = arrays[0][arrays[0].length - 1];

    for (let i = 1; i < arrays.length; i++) {
        const lo = arrays[i][0];
        const hi = arrays[i][arrays[i].length - 1];
        result = Math.max(result, Math.abs(hi - curMin), Math.abs(curMax - lo));
        curMin = Math.min(curMin, lo);
        curMax = Math.max(curMax, hi);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maxDistance([[1,2,3],[4,5],[1,2,3]])); // 4
console.log(maxDistance([[1],[1]])); // 0
console.log(maxDistance([[1,2,3],[1,2,3]])); // 2
