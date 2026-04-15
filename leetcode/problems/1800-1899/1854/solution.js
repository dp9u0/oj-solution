/*
 * @lc app=leetcode id=1854 lang=javascript
 *
 * [1854] Maximum Population Year
 */

// @lc code=start
/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let diff = {};
    for (const [birth, death] of logs) {
        diff[birth] = (diff[birth] || 0) + 1;
        diff[death] = (diff[death] || 0) - 1;
    }
    let years = Object.keys(diff).map(Number).sort((a, b) => a - b);
    let maxPop = 0, pop = 0, result = 0;
    for (const y of years) {
        pop += diff[y];
        if (pop > maxPop) {
            maxPop = pop;
            result = y;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maximumPopulation([[1993,1999],[2000,2010]])); // 1993
console.log(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]])); // 1960
