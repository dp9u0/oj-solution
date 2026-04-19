/*
 * @lc app=leetcode id=2162 lang=javascript
 *
 * [2162] Minimum Cost to Set Cooking Time
 */

// @lc code=start
/**
 * @param {number} startAt
 * @param {number} moveCost
 * @param {number} pushCost
 * @param {number} targetSeconds
 * @return {number}
 */
var minCostSetTime = function(startAt, moveCost, pushCost, targetSeconds) {
    let calcCost = (digits) => {
        let cost = 0, pos = startAt;
        for (const d of digits) {
            if (d !== pos) {
                cost += moveCost;
                pos = d;
            }
            cost += pushCost;
        }
        return cost;
    };
    let minCost = Infinity;
    for (let m = 0; m <= 99; m++) {
        let s = targetSeconds - m * 60;
        if (s < 0 || s > 99) continue;
        let digits = String(m * 100 + s).padStart(4, '0');
        // try removing leading zeros
        let trimmed = digits.replace(/^0+/, '') || '0';
        minCost = Math.min(minCost, calcCost(trimmed.split('').map(Number)));
    }
    return minCost;
};
// @lc code=end

// TEST:
console.log(minCostSetTime(1, 2, 1, 600)); // 6
console.log(minCostSetTime(0, 1, 2, 76)); // 6
