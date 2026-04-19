/*
 * @lc app=leetcode id=1936 lang=javascript
 *
 * [1936] Add Minimum Number of Rungs
 */

// @lc code=start
/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
    let result = 0, prev = 0;
    for (const h of rungs) {
        const gap = h - prev;
        if (gap > dist) {
            result += Math.ceil(gap / dist) - 1;
        }
        prev = h;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(addRungs([1,3,5,10], 2)); // 2
console.log(addRungs([3,6,8,10], 3)); // 0
console.log(addRungs([3,4,6,7], 2));  // 1
