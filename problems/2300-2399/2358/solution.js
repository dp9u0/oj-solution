/*
 * @lc app=leetcode id=2358 lang=javascript
 *
 * [2358] Maximum Number of Groups Entering a Competition
 */

// @lc code=start
/**
 * @param {number[]} grades
 * @return {number}
 */
var maximumGroups = function(grades) {
    const n = grades.length;
    return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
};
// @lc code=end

// TEST:
console.log(maximumGroups([10,6,12,7,3,5])); // 3
console.log(maximumGroups([8,8]));           // 1
console.log(maximumGroups([1]));             // 1
