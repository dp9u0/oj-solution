/*
 * @lc app=leetcode.cn id=370 lang=javascript
 *
 * [370] 区间加法
 */

// @lc code=start
/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    // difference array: mark only the two ends of each range
    const res = new Array(length).fill(0);
    for (const [s, e, inc] of updates) {
        res[s] += inc;
        if (e + 1 < length) res[e + 1] -= inc;
    }
    // prefix sum restores the actual values
    for (let i = 1; i < length; i++) res[i] += res[i - 1];
    return res;
};
// @lc code=end

// TEST:
console.log(getModifiedArray(5, [[1,3,2],[2,4,3],[0,2,-2]])); // [-2,0,3,5,3]
console.log(getModifiedArray(2, [])); // [0,0] (no updates)
console.log(getModifiedArray(1, [[0,0,5]])); // [5]
console.log(getModifiedArray(4, [[0,3,1]])); // [1,1,1,1] (full range)
console.log(getModifiedArray(6, [[1,2,10],[2,4,-5]])); // [0,10,5,-5,-5,0] (idx3,4 only covered by -5)
