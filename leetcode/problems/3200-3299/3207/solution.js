/*
 * @lc app=leetcode id=3207 lang=javascript
 *
 * [3207] Maximum Points After Enemy Battles
 */

// @lc code=start
/**
 * @param {number[]} enemyEnergies
 * @param {number} currentEnergy
 * @return {number}
 */
var maximumPoints = function(enemyEnergies, currentEnergy) {
    const minE = Math.min(...enemyEnergies);
    if (currentEnergy < minE) return 0;
    const totalSum = enemyEnergies.reduce((a, b) => a + b, 0);
    return Math.floor((currentEnergy + totalSum - minE) / minE);
};
// @lc code=end

// TEST:
console.log(maximumPoints([3, 2, 2], 2)); // 3
console.log(maximumPoints([2], 10)); // 5
console.log(maximumPoints([1, 2, 3], 0)); // 0
console.log(maximumPoints([5, 5, 5], 5)); // 3
console.log(maximumPoints([3, 1, 2], 5)); // 6
