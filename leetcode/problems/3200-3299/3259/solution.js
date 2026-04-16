/*
 * @lc app=leetcode id=3259 lang=javascript
 *
 * [3259] Maximum Energy Boost From Two Drinks
 */

// @lc code=start
/**
 * @param {number[]} energyDrinkA
 * @param {number[]} energyDrinkB
 * @return {number}
 */
var maxEnergyBoost = function(energyDrinkA, energyDrinkB) {
    let dpA = energyDrinkA[0], dpB = energyDrinkB[0];
    let prevA = 0, prevB = 0;

    for (let i = 1; i < energyDrinkA.length; i++) {
        const newA = Math.max(dpA + energyDrinkA[i], prevB + energyDrinkA[i]);
        const newB = Math.max(dpB + energyDrinkB[i], prevA + energyDrinkB[i]);
        prevA = dpA;
        prevB = dpB;
        dpA = newA;
        dpB = newB;
    }

    return Math.max(dpA, dpB);
};
// @lc code=end

// TEST:
console.log(maxEnergyBoost([1,3,1], [3,1,1])); // 5
console.log(maxEnergyBoost([4,1,1], [1,1,3])); // 7
console.log(maxEnergyBoost([1,1,1], [1,1,1])); // 3
console.log(maxEnergyBoost([5,5,5,5], [1,1,1,1])); // 20
console.log(maxEnergyBoost([1,1,1,1], [5,5,5,5])); // 20
