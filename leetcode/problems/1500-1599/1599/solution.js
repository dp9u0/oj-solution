/*
 * @lc app=leetcode id=1599 lang=javascript
 *
 * [1599] Maximum Profit of Operating a Centennial Wheel
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function(customers, boardingCost, runningCost) {
    let wait = 0, boarded = 0, rotations = 0;
    let maxProfit = 0, bestRot = -1;

    for (let i = 0; i < customers.length || wait > 0; i++) {
        if (i < customers.length) wait += customers[i];
        const board = Math.min(4, wait);
        wait -= board;
        boarded += board;
        rotations++;
        const profit = boarded * boardingCost - rotations * runningCost;
        if (profit > maxProfit) {
            maxProfit = profit;
            bestRot = rotations;
        }
    }
    return bestRot;
};
// @lc code=end

// TEST:
console.log(minOperationsMaxProfit([8,3], 5, 6));           // 3
console.log(minOperationsMaxProfit([10,9,6], 6, 4));        // 7
console.log(minOperationsMaxProfit([3,4,0,5,1], 1, 92));   // -1
console.log(minOperationsMaxProfit([0,0,0,0,0,50], 100, 1)); // some positive result
console.log(minOperationsMaxProfit([5], 5, 5));              // 5*5 - 2*5 = 15? or 1 rot: 4*5-5=15, 2 rot: 5*5-10=15
