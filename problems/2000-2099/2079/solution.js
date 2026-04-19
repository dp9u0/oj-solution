/*
 * @lc app=leetcode id=2079 lang=javascript
 *
 * [2079] Watering Plants
 */

// @lc code=start
/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let steps = 0, water = capacity, pos = -1;
    for (let i = 0; i < plants.length; i++) {
        if (water < plants[i]) {
            steps += pos + 1 + i + 1;
            water = capacity - plants[i];
        } else {
            steps += i - pos;
            water -= plants[i];
        }
        pos = i;
    }
    return steps;
};
// @lc code=end

// TEST:
console.log(wateringPlants([2,2,3,3], 5));          // 14
console.log(wateringPlants([1,1,1,4,2,3], 4));      // 30
console.log(wateringPlants([7,7,7,7,7,7,7], 8));    // 49
