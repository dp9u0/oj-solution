/*
 * @lc app=leetcode id=853 lang=javascript
 *
 * [853] Car Fleet
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let n = position.length;
    let cars = position.map((p, i) => [p, speed[i]]);
    cars.sort((a, b) => b[0] - a[0]);

    let fleets = 0;
    let maxTime = 0;
    for (let [pos, spd] of cars) {
        let time = (target - pos) / spd;
        if (time > maxTime) {
            fleets++;
            maxTime = time;
        }
    }
    return fleets;
};
// @lc code=end

// TEST:
console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3])); // 3
console.log(carFleet(10, [3], [3])); // 1
console.log(carFleet(100, [0,2,4], [4,2,1])); // 1
