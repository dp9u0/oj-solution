/*
 * @lc app=leetcode id=3492 lang=javascript
 *
 * [3492] Maximum Containers on a Ship
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function(n, w, maxWeight) {
    return Math.min(n * n, Math.floor(maxWeight / w));
};
// @lc code=end

// TEST:
console.log(maxContainers(2, 3, 15));
console.log(maxContainers(3, 5, 20));
