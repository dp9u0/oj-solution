/*
 * @lc app=leetcode id=1094 lang=javascript
 *
 * [1094] Car Pooling
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    const diff = new Array(1001).fill(0);
    for (const [num, from, to] of trips) {
        diff[from] += num;
        diff[to] -= num;
    }

    let passengers = 0;
    for (let i = 0; i <= 1000; i++) {
        passengers += diff[i];
        if (passengers > capacity) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 4));
// Expected: false

console.log(carPooling([[2, 1, 5], [3, 3, 7]], 5));
// Expected: true

console.log(carPooling([[2, 1, 5], [3, 5, 7]], 3));
// Expected: true
