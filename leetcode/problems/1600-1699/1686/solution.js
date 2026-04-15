/*
 * @lc app=leetcode id=1686 lang=javascript
 *
 * [1686] Stone Game VI
 */

// @lc code=start
/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function(aliceValues, bobValues) {
    let n = aliceValues.length;
    let indices = Array.from({ length: n }, (_, i) => i);
    indices.sort((a, b) => (aliceValues[b] + bobValues[b]) - (aliceValues[a] + bobValues[a]));
    let aliceScore = 0, bobScore = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) aliceScore += aliceValues[indices[i]];
        else bobScore += bobValues[indices[i]];
    }
    if (aliceScore > bobScore) return 1;
    if (aliceScore < bobScore) return -1;
    return 0;
};
// @lc code=end

// TEST:
console.log(stoneGameVI([1,3], [2,1]));
console.log(stoneGameVI([1,2], [3,1]));
console.log(stoneGameVI([2,4,3], [1,6,7]));
