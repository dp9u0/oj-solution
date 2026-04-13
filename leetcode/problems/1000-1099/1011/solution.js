/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let lo = Math.max(...weights);
    let hi = weights.reduce((a, b) => a + b, 0);

    function canShip(cap) {
        let d = 1, load = 0;
        for (const w of weights) {
            if (load + w > cap) {
                d++;
                load = 0;
            }
            load += w;
        }
        return d <= days;
    }

    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (canShip(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    return lo;
};
// @lc code=end

// TEST:
console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5)); // 15
console.log(shipWithinDays([3,2,2,4,1,4], 3)); // 6
console.log(shipWithinDays([1,2,3,1,1], 4)); // 3
