/*
 * @lc app=leetcode id=2332 lang=javascript
 *
 * [2332] The Latest Time to Catch a Bus
 */

// @lc code=start
/**
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
var latestTimeCatchTheBus = function(buses, passengers, capacity) {
    buses.sort((a, b) => a - b);
    passengers.sort((a, b) => a - b);
    const pSet = new Set(passengers);

    let j = 0;
    let lastCount = 0;
    const n = buses.length;

    for (let i = 0; i < n; i++) {
        let cnt = 0;
        while (j < passengers.length && passengers[j] <= buses[i] && cnt < capacity) {
            j++;
            cnt++;
        }
        if (i === n - 1) lastCount = cnt;
    }

    let t;
    if (lastCount < capacity) {
        t = buses[n - 1];
    } else {
        t = passengers[j - 1] - 1;
    }
    while (pSet.has(t)) t--;
    return t;
};
// @lc code=end

// TEST:
console.log(latestTimeCatchTheBus([10, 20], [2, 17, 18, 19], 2)); // 16
console.log(latestTimeCatchTheBus([20, 30, 10], [19, 13, 26, 4, 25, 11, 21], 2)); // 20
console.log(latestTimeCatchTheBus([3], [2, 4], 2)); // 3
console.log(latestTimeCatchTheBus([5], [2, 3, 4, 5], 2)); // 1
console.log(latestTimeCatchTheBus([10], [5, 6, 7, 8], 3)); // 4
