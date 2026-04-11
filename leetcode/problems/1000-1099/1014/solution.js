/*
 * @lc app=leetcode id=1014 lang=javascript
 *
 * [1014] Best Sightseeing Pair
 */

// @lc code=start
/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let maxLeft = values[0];
    let result = 0;
    for (let j = 1; j < values.length; j++) {
        result = Math.max(result, maxLeft + values[j] - j);
        maxLeft = Math.max(maxLeft, values[j] + j);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maxScoreSightseeingPair([8,1,5,2,6])); // 11
console.log(maxScoreSightseeingPair([1,2])); // 2
console.log(maxScoreSightseeingPair([1,3,5])); // 7
