/*
 * @lc app=leetcode id=2383 lang=javascript
 *
 * [2383] Minimum Hours of Training to Win a Competition
 */

// @lc code=start
/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    const n = energy.length;
    let totalEnergy = 0;
    for (const e of energy) totalEnergy += e;
    let trainEnergy = Math.max(0, totalEnergy + 1 - initialEnergy);

    let trainExp = 0;
    let curExp = initialExperience;
    for (let i = 0; i < n; i++) {
        if (curExp <= experience[i]) {
            trainExp += experience[i] + 1 - curExp;
            curExp = experience[i] + 1;
        }
        curExp += experience[i];
    }

    return trainEnergy + trainExp;
};
// @lc code=end

// TEST:
console.log(minNumberOfHours(5, 3, [1,4,3,2], [2,6,3,1]));  // 8
console.log(minNumberOfHours(2, 4, [1], [3]));               // 0
