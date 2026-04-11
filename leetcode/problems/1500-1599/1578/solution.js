/*
 * @lc app=leetcode id=1578 lang=javascript
 *
 * [1578] Minimum Time to Make Rope Colorful
 */

// @lc code=start
/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let result = 0;
    let maxInGroup = neededTime[0];
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] === colors[i - 1]) {
            result += Math.min(maxInGroup, neededTime[i]);
            maxInGroup = Math.max(maxInGroup, neededTime[i]);
        } else {
            maxInGroup = neededTime[i];
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minCost('abaac', [1, 2, 3, 4, 5])); // 3
console.log(minCost('abc', [1, 2, 3])); // 0
console.log(minCost('aabaa', [1, 2, 3, 4, 1])); // 2
